import React from 'react'
//import Pix from './query/Pix'
//import Header from './query/Header'
import Default from './myproject/default'

/*import FormContainer from './comp/FormContainer'

class App extends Component{
  constructor(){
      super()     
      this.state = {
         first: "",
         second: "",
         isgood: true,
         gender: ""
      }
      this.handlechange = this.handlechange.bind(this)
  }

    handlechange(event){

    const{name,value,type,checked} = event.target

  type == "checkbox" ? this.setState({ [name]:checked }) : this.setState({ [name] : value })
      
  }

render(){
    let button = this.state.isloggedin ? "log out" : "log in"
    let text = this.state.isloggedin ? "you have logged in" : "you have logged log out"

  return(
<div>


</div>

      )
   }
}*/

function App(){
  return(
    <div>
    
     <Default />
       
    </div>)
}
 
export default App
