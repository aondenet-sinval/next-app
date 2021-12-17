import React from 'react'
import Table  from 'react-bootstrap/Table'

const Tabelapreco = () => {
			return<>
						<h3>Tabela de preços:</h3>
						<table  className="w3-table w3-hoverable w3-bordered w3-striped">
							<thead className="w3-border-top">
								<th>Nome</th>
								<th>Descrição</th>
								<th>Moeda</th>
								<th>Preço</th>
							</thead>
							<tbody>
								<tr><td>Camisa</td><td>Polo Masculina</td><td>BRL</td><td>80,00</td></tr>
							</tbody>
						</table>
				
	
					</>
}	

	

export default Tabelapreco;