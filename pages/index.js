import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import React from 'react'
import ExampleCanvas from '../components/example.js'
import Twocol from '../components/twocol.js'
import Fotos from './components/fotos.js'
import Jumbo from './components/jumbo'
import Aba from './components/tab'
import Slidshow from './components/slidshow.js'
import ProgBar from './components/progbar.js'
import { SSRProvider,
	Container, Row, Col } from 'react-bootstrap/'


export default function Home() {
  return (<>
      <Head> 
			<title>Development Sinval Gomes Next App</title>
			<meta name="description" content="Generated by create next app" />
			<link rel="icon" href="/logoaondenet.ico" />
      </Head>

		<main className="layout-mod">
				<Container>
			  
						<div className="d-flex flex-wrap justify-content-start">
							<div className="card p-3 m3"> 				
								<a href="https://github.com/aondenet-sinval/next-app">
									<h2 className="card-title">Deploy</h2>
								</a>
								<p className="card-text">Essa API &eacute; apenas para treinamento.<br />
								Clicando aqui você irá para o c&oacute;digo fonte.</p>
							</div>
							<div className="card p-3 m-3"> 		
								<a	href="https://github.com/aondenet-sinval">
									<h2 className="card-title">Projetos</h2>
								</a>								
								<p className="card-text">Veja outros projetos.</p>
							</div>
						</div>
						{/*Components:*/}
						<Fotos />
						<Jumbo />
						<Slidshow />
						<ProgBar />
						<ProgBar />					
						<SSRProvider><Aba /></SSRProvider>
						<ExampleCanvas />
				</Container>	   
		</main>
		</>
  )
}
