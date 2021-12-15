import * as React from 'react'
import Nav  from 'react-bootstrap/Nav'
import Link from 'next/link'

const NavigBar = () => {
			return<>
				<Nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
				  <a className="navbar-brand" href="#">Navbar</a>
				  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#conteudoNavbarSuportado" aria-controls="conteudoNavbarSuportado" aria-expanded="false" aria-label="Alterna navegação">
				    <span className="navbar-toggler-icon"></span>
				  </button>
				
				  <div className="collapse navbar-collapse" id="conteudoNavbarSuportado">
				    <ul className="navbar-nav mr-auto">
				      <li className="nav-item active">
				      <Link  href="/">
				        <a className="nav-link">Home <span className="sr-only"></span></a>
				        </Link>
				      </li>
				      <li className="nav-item">
  							  <Link href="/pages/caroussel">
							    <a  className="nav-link">Carrossel</a>
							  </Link>
				      </li>
				      <li className="nav-item">
  							  <Link href="/pages/contato">
							    <a  className="nav-link">Contato</a>
							  </Link>
				      </li>
				    </ul>
				  </div>
				</Nav>
   
			</>
}	



export default NavigBar;