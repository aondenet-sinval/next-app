import React from 'react'
import './css/tab.module.css'
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'



const Taber = () => {
	
	return<>
    <div>
      <h4>Componente Tab(aba) desenvolvida com  React-Bootstrap</h4>
      <Tabs defaultActiveKey="second"  id="tabss">
        <Tab eventKey="first" title="TAB1">
          Lorem ipsum dolor sit amet, consecteteur adipiscing. Lacus. Ipsum. Hac ornare et, conubia eros, quis cursus. Tincidunt. Per, tempor ligula porta vivamus eni, ante.  

        </Tab>
        <Tab eventKey="second" title="TAB2">
          Eu per ve metus ad tempor a, adipiscing sit. Parturient neque duis auctor, ac. Nisi. Vivamus lobortis dapibus porta id. Risus ut habitasse dolor. Nunc orci iaculis potenti metus nibh non vivamus.
        </Tab>
        <Tab eventKey="third" title="TAB3">
          Mattis nisi condimentum dapibus, pellentesque congue sapien, augue nec ante venenatis bibendum, tempor senectus. Ligula integer quis accumsan. Natoque lacus nunc, pretium, in. Nisi.
        </Tab>
      </Tabs>
    </div>
    </>
};

export default Taber;