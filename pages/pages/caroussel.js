import Link from 'next/link'
import Head from 'next/head'
import Layout from '../../components/layout'
import React from 'react'
import {
	Container, Carousel, Button } from 'react-bootstrap/';



export default function Caroussel() {
	return<> 
		      <Head>             
			        <title>Caroussel</title>
		      </Head>
				<main className="layout-mod">	 

					<Carousel>
					  <Carousel.Item>
					    <img
					      className="d-block w-100"
					      src="/images/img7.jpg"
					      layout="fill"
					      alt="First slide"
					    />
					    <Carousel.Caption>
					      <h3>First slide label</h3>
					      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
					    </Carousel.Caption>
					  </Carousel.Item>
					  <Carousel.Item>
					    <img
					      className="d-block w-100"
					      src="/images/img8.jpg"
					      layout="fill"
					      alt="Second slide"
					    />
					
					    <Carousel.Caption>
					      <h3>Second slide label</h3>
					      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
					    </Carousel.Caption>
					  </Carousel.Item>
					</Carousel>
				</main>
			</>
}