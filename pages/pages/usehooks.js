import Head from 'next/head'
import Layout from '../../components/layout'
import Image from 'next/image'
import React from 'react'
import Container from 'react-bootstrap/Container'
import Counter from '../components/counter.js'

export default function Usehooks(){

	return<>
				<Head>
					<title>Usando React Hooks</title>
				</Head>
				<main className="layout-mod">
					<Container>
						<h3>STATE Exemplo 1:</h3>
						<Counter />
					</Container>
				</main>
			</>
}