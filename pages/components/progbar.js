import React from 'react'
import ProgressBar from 'react-bootstrap/ProgressBar'

const Progbar = ()=>{
	return<div id="progressBar" className="progressBar">
				<h3>Progress:</h3>
				<h5>15%</h5>
				<ProgressBar animated now={15} />
				<h5>25%</h5>
				<ProgressBar animated now={25} />
				<h5>45%</h5>
				<ProgressBar animated now={45} />				
				<h5>85%</h5>
				<ProgressBar animated now={85} />
				<h5>100%</h5>
				<ProgressBar animated now={100} />												
			</div>
}

export default Progbar;