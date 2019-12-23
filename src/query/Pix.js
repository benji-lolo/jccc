import React,{Component} from "react"
import style from './style.css'
import vision from './images/vision.jpg'

class Pix extends Component{
	constructor(){
		super()
		this.state={
			topText :"",
			buttomText:"",
			randomImg:"http://ben.gif",
			allMemeImgs:[],
		}

		this.handleChange = this.handleChange.bind(this)
		this.handleSubmit = this.handleSubmit.bind(this)
	}

	componentDidMount(){
		fetch("http://localhost/script/confirm")
		.then(response => response.json())
		.then(response =>{
			const{memes} = response.data
			this.setState({allMemeImgs : memes})
		})
	}

	handleChange(event){
		const {name,value} = event.target
		this.setState({ [name] : value })
	}
	handleSubmit(event){
		event.preventDefault()
		const randNum = Math.floor(Math.random() * this.state.allMemeImgs.length)
		const randMemeImg = this.state.allMemeImgs[randNum].url
		this.setState({randomImg : randMemeImg})
	}

	render(){
		return(
		<div>
			<form className="meme-form" onSubmit={this.handleSubmit}>
				
				<input type="text" name="topText" placeholder="topText" 
				value={this.state.topText} onChange={this.handleChange}  
				/>


				<input type="text" name="bottomText" placeholder="bottomText" 
				value={this.state.bottomText} onChange={this.handleChange} 
				/>

				<button>Gen</button>
			</form>
			<div>
			<img src={this.state.randomImg} alt="" />
				<h2>{this.state.topText}</h2>
				<h2>{this.state.bottomText}</h2>
			</div>
		</div>
			)
	}
}

export default Pix