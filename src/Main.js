import React, { Component } from 'react';

export default class Main extends Component {

     render() {
          return(
          		<div className="container">
          			<br/>
          			<h3 className="text-center">Scoreboard</h3>
          			<table className="table table-striped">
					    <thead>
					      	<tr>
					        	<th>Name</th>
					        	<th>Score</th>
					        	<th>Add</th>
					        	<th>Penalty</th>
					      	</tr>

					      	<tr>
					      		<td>James</td>
					      		<td>0</td>
					      		<td> <button className="btn btn-md btn-primary"> <strong>+</strong> </button> </td>
					      		<td> <button className="btn btn-md btn-danger"> <strong>-</strong> </button> </td>
					      	</tr>
					    </thead>
          			</table>
          		</div>
          );
     }
}