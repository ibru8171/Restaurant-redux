import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <>
     <Navbar bg="primary" data-bs-theme="dark">
        <Container>
            <Link to={'/'} style={{textDecoration:"none"}}>
            <img src='https://thumbs.dreamstime.com/b/restaurant-icon-17641889.jpg' alt="" 
            height={"100px"} width={"100px"}/>
            </Link>
           
          <Navbar.Brand href="#home" style={{fontFamily:"-moz-initial"}}>RESTAURENT</Navbar.Brand>

        </Container>
      </Navbar>
    </>
  )
}

export default Header