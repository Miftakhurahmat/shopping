import React, { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import { useDispatch, useSelector } from 'react-redux';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { updateStock } from '../features/listSlice';
import { fetchList } from '../features/listSlice';

const UpdatePages = () => {
  const dispatch = useDispatch();

  const data = useSelector((state) => state.list.list);
  const [stock, setStock] = useState();

  const handleAddStock = (index, stock, e) => {
    dispatch(updateStock({ index, stock }));
    setStock(0);
  };

  const handleInput = (e) => {
    setStock(e.target.value);
  };

  useEffect(() => {
    dispatch(fetchList());
  }, [dispatch]);

  return (
    <>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Product</th>
            <th>Stock</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data !== null &&
            data.map((data, index) => (
              <tr key={data.id}>
                <td>{data.id}</td>
                <td>{data.title}</td>
                <td>{data.stock}</td>
                <td>
                  <Form.Control
                    type='number'
                    id='stock'
                    onChange={(e) => handleInput(e)}
                    aria-describedby='passwordHelpBlock'
                  />
                </td>
                <td>
                  <Button onClick={() => handleAddStock(index, stock)}>
                    Update
                  </Button>
                </td>
              </tr>
            ))}
        </tbody>
      </Table>
    </>
  );
};

export default UpdatePages;
