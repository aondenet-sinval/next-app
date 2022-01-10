import React from 'react'
import Link from 'next/link'
import Script from 'next/script'
import Image from 'next/image'

const NavigBar = () => {
			return<>
<nav className="navbar navbar-expand-sm bg-dark navbar-dark fixed-top">
  <div className="container-fluid">
    <Link className="navbar-brand nav-link" href="/">
	    <Image src="/logoaondenet.png" width={30} height={20} alt="Logo aondenet: Sinval Gomes" />
    </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="collapsibleNavbar">
      <ul className="navbar-nav">
        <li className="nav-item">          
          <Link href="/">
	          <a className="nav-link">
		          Home
	          </a>	          
          </Link>         
        </li>
        <li className="nav-item">       
          <Link href="/pages/caroussel">
	          <a className="nav-link">
		          Carousel
	          </a>          
          </Link>
        </li>
        <li className="nav-item">               
          <Link href="/pages/contato">
	          <a className="nav-link">
		          Contato
	          </a>	          
          </Link>      
        </li> 
        <li className="nav-item">               
          <Link href="/pages/usehooks">
	          <a className="nav-link">
		          Hooks
	          </a>	          
          </Link>      
        </li>                     
      </ul>
    </div>
  </div>
</nav>
 <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.2/dist/js/bootstrap.bundle.min.js" />							
					</>
}	



export default NavigBar;