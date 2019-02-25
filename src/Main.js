import React, { Component } from 'react'
import PlayerRow from './components/playersRow'

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
					    </thead>

					    <tbody>
					    	<PlayerRow/>
					    </tbody>
          			</table>
          		</div>
        
        )
    }
}