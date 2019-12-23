import React from 'react'

function FormComponent(props){
	return(
<div>
	<form>
	<label> FirstName  
		 <input 
		type="text" 
		name="firstname" 
		value={props.firstname} 
		onChange={props.handle} /> 

	</label><br/> 	

	<label> LastName  
		 <input 
		type="text" 
		name="lastname" 
		value={props.lastname}
		onChange={props.handle}/> 

	</label><br/> 	

	<label> PhoneNum 
		 <input 
		type="text" 
		name="number" 
		value={props.number}
		onChange={props.handle}/> 

	</label><br/> 	

	<label> Thick
		<input 
		type="checkbox" 
		name="check" 
		checked={props.check}
		onChange={props.handle}/>

	</label><br/>

	<select value={props.dropdown} name="dropdown" onChange={props.handle}>
		<option value>Choose Your Country</option>
		<option value="Ghana">Ghana</option>
		<option value="Nigeria">Nigeria</option>
		<option value="Burkina">Burkina</option>
		<option value="Sudan">Sudan</option>
	</select > 	<br/>
	
	<label>Select Any
		<input value="Female" checked={props.gender === "Female"} type="radio" name="gender" onChange={props.handle}/>
		<input value="Male"  checked={props.gender === "Male"} type="radio" name="gender" onChange={props.handle} />
	
	</label>
	<h3>I am {props.firstname}  {props.lastname}</h3>
	<h3>I come from {props.dropdown} </h3>
	<h3>You can reach me on this number {props.number}</h3>
	<h3>I am a {props.gender}</h3>
	<h3>{props.check ? 'Yes' : 'No'}</h3>
	</form>
</div>
		)
}
export default FormComponent