import React from 'react'
import Firstname from './Firstname'
import Lastname from './Lastname'
import Button from './Button'

export default class App extends React.Component {
	
	constructor(){
		super()
		this.state = {
			first: '',
			last: ''
		}
		
	}
	
	changeTextFirst(first){
		this.setState({first: first})
		console.log(this.state)
	}
	
	changeTextLast(last){
		this.setState({last: last})
		console.log(this.state)
	}
	
	
	render(){
		return(
		 <div>
			<Firstname changeTextFirst={this.changeTextFirst.bind(this)} first={this.state.first}/>
			<Lastname changeTextLast={this.changeTextLast.bind(this)} last={this.state.last}/>
			<Button first={this.state.first} last={this.state.last}/>
		</div>
		)
	}
	
 }
