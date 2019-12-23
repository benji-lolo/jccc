import React,  {Component } from 'react' 
import FormComponent from './FormComponent'

class FormContainer extends Component{

constructor(){
	super()
	this.state = {
	firstname:"",
	lastname:"",
	number:"",
	ischeck:true,
	gender:"",
	dropdown:""

	}

	this.handle=this.handle.bind(this)
}

handle(event){

const {name,value,type,checked} = event.target

type === "checkbox" ? this.setState({ [name] : checked }) : this.setState({ [name] : value })


}
	render(){
		return(
<div>
	<FormComponent handle={this.handle} 
					firstname={this.state.firstname} 
					lastname={this.state.lastname}
					number={this.state.number}
					check={this.state.ischeck}
					gender={this.state.gender}
					dropdown={this.state.dropdown}
					{...this.state}
	/>
</div>
			)
	}
}
export default FormContainer
