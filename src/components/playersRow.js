import React, { Component } from 'react';

export default class playersRow extends Component {
      state = { currScore: this.props.score }

      addScore = () => {
        this.setState((prevState, props) => ({
          currScore: prevState.currScore + 1
        }));
      }

      minusScore = () => {
          if(this.state.currScore >= 1){
            this.setState((prevState, props) => ({
              currScore: prevState.currScore - 1
            }));
          }

          else{
            alert("You lose!")
          }
      }

      render() {
        	return(
					<tr>
		      		<td>{this.props.name}</td>
		      		<td>{this.state.currScore}</td>
		      		<td> <button className="btn btn-md btn-primary" onClick={this.addScore}> <strong>+</strong> </button> </td>
		      		<td> <button className="btn btn-md btn-danger" onClick={this.minusScore}> <strong>-</strong> </button> </td>
		      	</tr>
     		)
     }
}
