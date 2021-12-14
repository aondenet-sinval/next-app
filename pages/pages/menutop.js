import * as React from 'react'
import Nav  from 'react-bootstrap/Nav'

const Menutop = () => {
			return<>
				<Nav className="navbar navbar-expand-lg navbar-light bg-light">
				  <a className="navbar-brand" href="#">Navbar</a>
				  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#conteudoNavbarSuportado" aria-controls="conteudoNavbarSuportado" aria-expanded="false" aria-label="Alterna navegação">
				    <span className="navbar-toggler-icon"></span>
				  </button>
				
				  <div className="collapse navbar-collapse" id="conteudoNavbarSuportado">
				    <ul className="navbar-nav mr-auto">
				      <li className="nav-item active">
				        <a className="nav-link" href="#">Home <span className="sr-only">(página atual)</span></a>
				      </li>
				      <li className="nav-item">
				        <a className="nav-link" href="#">Desativado</a>
				      </li>
				      <li className="nav-item">
				        <a className="nav-link disabled" href="#">Desativado</a>
				      </li>
				    </ul>
				  </div>
				</Nav>
   
			</>
}	

const Menubottom = () => {
			return<>
				<Nav className="navbar navbar-expand-lg navbar-light bg-light">
				  <a className="navbar-brand" href="#">Navbar</a>
				  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#conteudoNavbarSuportado" aria-controls="conteudoNavbarSuportado" aria-expanded="false" aria-label="Alterna navegação">
				    <span className="navbar-toggler-icon"></span>
				  </button>
				
				  <div className="collapse navbar-collapse" id="conteudoNavbarSuportado">
				    <ul className="navbar-nav mr-auto">
				      <li className="nav-item active">
				        <a className="nav-link" href="#">Home <span className="sr-only">(página atual)</span></a>
				      </li>
				      <li className="nav-item">
				        <a className="nav-link" href="#">Desativado</a>
				      </li>
				      <li className="nav-item">
				        <a className="nav-link disabled" href="#">Desativado</a>
				      </li>
				    </ul>
				  </div>
				</Nav>
   
			</>
}		

export { Menutop, Menubottom };