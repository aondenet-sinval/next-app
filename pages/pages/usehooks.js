import Head from 'next/head'
import Layout from '../../components/layout'
import Image from 'next/image'
import React from 'react'
import Container from 'react-bootstrap/Container'
import Counter from '../components/counter.js'
import Forms from '../components/forms'
import FavoriteColor from '../components/FavoriteColor'
import DefCar from '../components/DefCar'
import Cronometro from '../components/Cronometro'
import Pessoas from '../components/UsesReducer'
import CompartilhandoEstado1 from '../components/CompartilhandoEstado'
import ComponentOne from '../components/CompartilhandoEstadoDois'
import UseSemCallback from '../components/UsesCallback'
import UsesComCallback from '../components/UsesComCallback'
import UsarMemo from '../components/UsarMemo'


export default function Usehooks(){

	return<>
				<Head>
					<title>Usando React Hooks</title>
				</Head>
				<main className="layout-mod">
					<Container>
						<h1>Hooks exemplos:</h1>
						<h3>useState Exemplo:</h3>
						<Counter />
						<FavoriteColor />
						<DefCar />
						<h3>useForm com React-Hook-Form:</h3>
						<Forms />
						<h3>useEffect:</h3>
						<Cronometro />	
						<h3>Sem useContext:</h3>
						<CompartilhandoEstado1 />
						<h3>Com useContext:</h3>						
						<ComponentOne />												
						<h3>Sem useCallback:</h3>						
						<UseSemCallback />	
						<h3>Com useCallback:</h3>						
						<UsesComCallback />
						<h3>Com useReducer:</h3>						
						<Pessoas />	
						<h3>Com useMemo:</h3>						
						<UsarMemo />																			
					</Container>
				</main>
			</>
}