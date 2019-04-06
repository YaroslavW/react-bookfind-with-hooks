import React from 'react';
import {Navbar, Container} from 'react-bootstrap';

const Header = () => {

  return (
    <Navbar className="navbar navbar-expand-lg  navbar-dark bg-dark">
    <Container>
        <Navbar.Brand>BookFinder</Navbar.Brand>
    </Container>
      
    </Navbar>
  );
}

export default Header;