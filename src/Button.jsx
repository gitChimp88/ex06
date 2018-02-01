import React from 'react'


export default class Button extends React.Component {
	
	
	handleClick(e){
		
		var first = this.props.first
		var last = this.props.last
		
		alert(first + ' ' + last);
		
	}
	
	render(){
			
		return(
			<div>
				<button onClick={this.handleClick.bind(this)}>click</button>
			</div>
		)
			
	} 
}