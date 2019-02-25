import React, { Component } from 'react';

export default class playersRow extends Component {

     render() {

     	console.log('name',this.props)

          	return(
  					<tr>
			      		<td>{this.props.name}</td>
			      		<td>{this.props.score}</td>
			      		<td> <button className="btn btn-md btn-primary"> <strong>+</strong> </button> </td>
			      		<td> <button className="btn btn-md btn-danger"> <strong>-</strong> </button> </td>
			      	</tr>
     		)
     }
}