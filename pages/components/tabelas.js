import * as React from 'react'
import Table  from 'react-bootstrap/Table'

const TabelaPreco = () => {
			return<>
<table id={"tabela-preco"} className="table">
<thead>
Tabela de preços:
</thead>
<tbody>
<tr><td>Nome</td><td>Descri&ccedil;&atilde;o</td><td>Moeda</td><td>Pre&ccedil;o</td></tr>
<tr><td>Camisa</td><td>Polo Masculina</td><td>BRL</td><td>80,00</td></tr>
</tbody>
</table>
			</>
}	

const TabelaMaisVendidos = () => {
			return<>
   
			</>
}		

export { TabelaPreco, TabelaMaisVendidos};