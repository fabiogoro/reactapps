import Container from 'react-bootstrap/Container';
import { Component } from 'react'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

export class Header extends Component {
  render() {
    return ( 
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand page="0" onClick={this.props.handler}>React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link page="1" onClick={this.props.handler}>Calculator</Nav.Link>
              <Nav.Link page="2" onClick={this.props.handler}>Voting</Nav.Link>
              <Nav.Link page="3" onClick={this.props.handler}>Video Player</Nav.Link>
              <Nav.Link page="4" onClick={this.props.handler}>Form</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}
