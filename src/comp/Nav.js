import React from 'react'



 class Nav extends React.Component{
render(){
	return(
	         
		<header>{this.props.heading}</header>            
		<div className="paragraphs">                
		{this.props.children}            
		</div>        
		
	)           	
}}

export default Nav