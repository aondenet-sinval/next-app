import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import * as React from 'react'
import Script from 'next/script'
import ExampleCanvas from '../components/example.js'
import Fotos from './components/fotos.js'
import Jumbo from './components/jumbo'
import Taber from './components/tab.js'
import Slidshow from './components/slidshow.js'
import ProgBar from './components/progbar.js'
import SSRProvider from 'react-bootstrap/SSRProvider'
import {
	Container, NavBar, Nav,
	Button, Row, Col, ProgressBar } from 'react-bootstrap/'



export default function Home() {
  return (
    <div className={styles.container}>
      <Head> 
			<title>Development Sinval Gomes Next App</title>
			<meta name="description" content="Generated by create next app" />
			<link rel="icon" href="/logoaondenet.ico" />
      </Head>

		<main className={styles.main}>
				<div className={styles.grid}>
					<a href="https://github.com/aondenet-sinval/next-app" 
						className={styles.card}>
						<h2>Deploy</h2>
						<p>Essa API &eacute; apenas para treinamento.</p>
						<p>Clicando aqui você irá para o c&oacute;digo fonte.</p>
					</a>
					<a	href="https://github.com/aondenet-sinval"
						className={styles.card}>
						<h2>Projetos</h2>
						<p>Veja outros projetos.</p>
					</a>
					{/*Component fotos*/}
					<Fotos />
					<Jumbo />
					<Slidshow />
					
					<SSRProvider><Taber /></SSRProvider>
				</div>
				<ProgBar /> 
				<ExampleCanvas />	   
		</main>

		</div>
  )
}
