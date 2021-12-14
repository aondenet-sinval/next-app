import Head from 'next/head'
import Link from 'next/link'
import { useState, React } from 'react'
import {
	Container,	Button, Offcanvas,
	OffcanvasHeader, OffcanvasTitle,
	OffcanvasBody } from 'react-bootstrap/';

export default function ExampleCanvas() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

		return<>
				   <Button variant="primary" onClick={handleShow}>
			        Links
			      </Button>
			
			      <Offcanvas show={show} onHide={handleClose}>
			        <Offcanvas.Header closeButton>
			          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
			        </Offcanvas.Header>
			        <Offcanvas.Body>
							<h1 className="title">
							  Ir para{' '}
							  <Link href="/pages/contato">
							    <a>Contato</a>
							  </Link>
							</h1>
							<h1 className="title">
							  Ir para{' '}
							  <Link href="/pages/caroussel">
							    <a>Carrossel</a>
							  </Link>
							</h1>
			        </Offcanvas.Body>
			      </Offcanvas>
		</>
}


