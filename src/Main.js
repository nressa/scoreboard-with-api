import React, { Component } from 'react'
import PlayerRow from './components/playersRow'

export default class Main extends Component {


	constructor(props) {
	    super(props)
	    this.state = {
	    	clouds: []
	    }
	}

	componentDidMount() {

		fetch('http://www.mocky.io/v2/5c73e9f82f00002a00963f62', {
		  method: 'GET'
		})
		.then((response) => response.json())
	        .then(response => {
	            this.setState({ clouds : response })
	        }).catch(error => {
	            console.log(error)
	        })
	}

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
			                {
			                    this.state.clouds.map(((item, i) =>
			                    	<PlayerRow key={i} name={item.name} score={item.score} />
			                    ))
			                }
					    </tbody>
          			</table>
          		</div>
        
        )
    }
}