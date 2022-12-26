import React from "react";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function NavbarComp() {
  return (
    <Container style={{padding:0,marginLeft:'auto',marginRight:'auto',marginTop:'4rem'}}>
      <Navbar style={{border:"solid",borderColor:"#9e9e9e",borderWidth:"2px 0",padding:"0"}} expand="lg" variant="light" bg="light">
        <Container>
          <Navbar.Brand onMouseOver={(event)=>event.target.style.color="red"} onMouseOut={(event)=>event.target.style.color="black"} style={{fontWeight:"bold"}} href="index.html">A.Recipe.A.Day</Navbar.Brand>
        </Container>
      </Navbar>
    </Container>
  );
}

export default NavbarComp;
