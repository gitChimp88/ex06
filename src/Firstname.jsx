import React from 'react'


export default class Firstname extends React.Component {
	
   
	handleChange(e){
		const first = e.target.value;
		this.props.changeTextFirst(first);
		
	}
	
	render(){
		
    	return (
			<div>
				<input onChange={this.handleChange.bind(this)}/>
			</div>
			
		)
	}
}