import React, { Component } from 'react';

export default class playersRow extends Component {

     render() {
          	return(
  					<tr>
			      		<td>James</td>
			      		<td>0</td>
			      		<td> <button className="btn btn-md btn-primary"> <strong>+</strong> </button> </td>
			      		<td> <button className="btn btn-md btn-danger"> <strong>-</strong> </button> </td>
			      	</tr>
     		)
     }
}