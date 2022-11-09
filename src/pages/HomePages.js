import React, { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchList, cartAdded } from '../features/listSlice';


import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';


const HomePages = () => {
  const list = useSelector((state) => state.list.list);
  const dispatch = useDispatch();
  const [Login, setLogin] = useState(false)


  const addCart = (data) => {
    if(Login){
      dispatch(cartAdded(data));
    }else{
      alert("Login dulu bro")
    }
  };


  useEffect(() => {
    if(localStorage.getItem("token")){
      setLogin(true)
    }else{
      setLogin(false)
    }
    dispatch(fetchList());
  }, [dispatch]);

  return (
    <div style={{}}>
      <Row xs={1} md={6} className='g-4'>
        {list !== null &&
          list.map((data, index) => (
            <Col key={data.id}>
              <Card style={{ width: '18rem', height: '42rem', margin: '25px' }}>
                <Card.Img
                  variant='top'
                  src={data.image}
                  style={{ width: '17rem', height: '20rem' }}
                />
                <Card.Body>
                  <Card.Title>{data.title}</Card.Title>
                  <Card.Text>{data.category}</Card.Text>
                  <Card.Text>
                    {data.description.substring(0, 100)}. . . .
                  </Card.Text>
                  <Card.Text>Price : ${data.price}</Card.Text>
                  <Card.Text>
                    {data.rating.rate} | {data.rating.count}{' '}
                  </Card.Text>
                  <Button variant='primary'>Detail</Button>
                  <Button
                    onClick={() => addCart(data)}
                    variant='success'
                    style={{ marginLeft: '20px' }}
                  >
                    Add to Cart
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
      </Row>
    </div>
  );
};

export default HomePages;
