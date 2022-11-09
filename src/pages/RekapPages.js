import React, { useEffect} from 'react'
import { useSelector } from 'react-redux'
import { Table } from 'react-bootstrap'

const RekapPages = () => {

  const data = useSelector((state) => state.list);

  useEffect(()=>{
    
  },[])
  return (
    <>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Product</th>
            <th>Quantity</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {data.rekap !== null &&
            data.rekap.map((data, index) => (
              <tr key={data.id}>
                <td>{data.id}</td>
                <td>{data.title}</td>
                <td>{data.quantity}</td>
                <td>${data.price * data.quantity}</td>
              </tr>
            ))}
        </tbody>
      </Table>
      <p>Total: ${data.totalRevenue.toFixed(2)}</p>
    </>
  )
}

export default RekapPages