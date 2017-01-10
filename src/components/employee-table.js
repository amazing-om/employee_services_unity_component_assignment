import React, { Component } from 'react';

let EmployeeTable = (props)=>{
		return <table>
			<thead><tr>{props.columns.map(( columnName, i )=>{
				return <td key={i}>{columnName}</td>
			})}</tr></thead>
			<tbody>{props.rows.map(( row, i )=>{
				return <tr key={i}><td>{row.name}</td><td>{row.designation}</td><td>{row.company}</td></tr>
			})}</tbody>
		</table>;	
}
export default EmployeeTable;