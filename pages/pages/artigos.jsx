import Head from 'next/head'
import Layout from '../../components/layout'
import Image from 'next/image'
import React from 'react'
import { Accordion, Item, Header,
			Body, Toast, ToastHeader, ToastBody, Container } from 'react-bootstrap/';
import ResumoTempo from '../components/resumotempo.js'
{/*import Notice from '../components/notice.js'*/}

export default function Artigos() {
	return <>	 
			      <Head>             
			        <title>Artigos</title>
			      </Head>
			      <main className="layout-mod container">
				      <Container>
							<h3>Noticias no site do IBGE:</h3>
							{/*<ResumoTempo />*/}
							{/*<Notice />*/}
						</Container>			      
			      </main>
				</>
}
