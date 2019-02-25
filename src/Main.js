import React from 'react'
import ReactDOM from 'react-dom'

function userName(user) {
	return user.firstName  + " " + user.lastName;
}

const user = {
	firstName: "Syrel",
	lastName: "Molar"
};

const element = (
	<h1>
		Hello {userName(user)}!
	</h1>
);

const Main = () => element

export default Main