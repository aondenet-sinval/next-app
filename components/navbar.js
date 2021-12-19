import React from 'react'
import Link from 'next/link'
import { Navbar, Nav, NavLink, Container,
			NavDropdown, Divider } from 'react-bootstrap'

const NavigBar = () => {
			return<>
						<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className="fixed-top">
						  <Container>
								<Nav.Link  href="/">
								  Home
								</Nav.Link>  
						  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
						  <Navbar.Collapse id="responsive-navbar-nav">
						    <Nav className="me-auto">
						      <Nav.Link href="/pages/contato">
								    Contato
						      </Nav.Link>
						      <Nav.Link href="/pages/caroussel">
								    Carrossel
						      </Nav.Link>
						      <Nav.Link href="/pages/artigos">
										Artigos
						      </Nav.Link>						      
						    </Nav>
						  </Navbar.Collapse>
						  </Container>
						</Navbar>							
					</>
}	



export default NavigBar;