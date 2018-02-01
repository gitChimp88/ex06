import React from 'react'


export default class Lastname extends React.Component {
	
   
	handleChange(e){
		const last = e.target.value;
		this.props.changeTextLast(last);
		
	}
	
	render(){
		
    	return (
			<div>
				<input onChange={this.handleChange.bind(this)}/>
			</div>
			
		)
	}
}