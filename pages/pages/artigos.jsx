import Head from 'next/head'
import Layout from '../../components/layout'
import Image from 'next/image'
import React from 'react'
import { Accordion, Item, Header,
			Body, Toast, ToastHeader, ToastBody, Container } from 'react-bootstrap/';



export default function Artigos() {
	return <>	 
			      <Head>             
			        <title>Artigos</title>
			      </Head>
			      <main className="layout-mod container">
				      <Container>
							<Accordion defaultActiveKey="0">
							  <Accordion.Item eventKey="0">
							    <Accordion.Header>Accordion Item #1</Accordion.Header>
							    <Accordion.Body>
							      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
							      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
							      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
							      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
							      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
							      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
							      est laborum.
							    </Accordion.Body>
							  </Accordion.Item>
							  <Accordion.Item eventKey="1">
							    <Accordion.Header>Accordion Item #2</Accordion.Header>
							    <Accordion.Body>
							      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
							      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
							      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
							      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
							      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
							      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
							      est laborum.
							    </Accordion.Body>
							  </Accordion.Item>
							</Accordion>
							<Toast>
							  <Toast.Header>
							    <Image src="/images/img19min.jpg" position="relative" width="100" height="100" className="rounded me-2" alt="Imagem do Pixabay" />
							    <strong className="me-auto">Cat</strong>
							    <small>11 mins ago</small>
							  </Toast.Header>
							  <Toast.Body>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
							   nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
							    mollit anim id est laborum.</Toast.Body>
							</Toast>
						</Container>			      
			      </main>
				</>
}