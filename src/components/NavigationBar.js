import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const NavigationBar = () => {
  let navigate = useNavigate();

  const logOut = () => {
    localStorage.clear();
    navigate('/home');
  };

  useEffect(() => {}, []);

  return (
    <Navbar collapseOnSelect expand='lg' bg='dark' variant='dark'>
      <Container>
        <Navbar.Brand>Shopping Cart</Navbar.Brand>
        <Navbar.Toggle aria-controls='responsive-navbar-nav' />
        <Navbar.Collapse id='responsive-navbar-nav'>
          <Nav className='me-auto'>
            <Nav.Link as={Link} to='/home'>
              Home
            </Nav.Link>
            {localStorage.getItem('token') && localStorage.getItem('isAdmin') && (
              <Nav.Link as={Link} to='/update'>
                Update
              </Nav.Link>
            )}
            {localStorage.getItem('token') && localStorage.getItem('isAdmin') && (
              <Nav.Link as={Link} to='/rekap'>
                Rekap
              </Nav.Link>
            )}

            <Nav.Link as={Link} to='/cart'>
              Cart
            </Nav.Link>
          </Nav>
          <Nav>
            {!localStorage.getItem('token') && (
              <Nav.Link as={Link} to='/login'>
                Login
              </Nav.Link>
            )}

            {localStorage.getItem('token') && (
              <Button onClick={() => logOut()}>logOut</Button>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
