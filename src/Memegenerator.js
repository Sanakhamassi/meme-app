import React, { Component } from 'react';  
 import './style.css'
class Meme extends Component {
   constructor(){
    super()
     this.state = { 
        toptext:"", 
        bottomtext:"",
        img:"" ,
        allmemeimgs:["https://i.imgflip.com/1bij.jpg","https://i.imgflip.com/26am.jpg"]
     } 
     this.handlechange=this.handlechange.bind(this) 
     this.handlesubmit=this.handlesubmit.bind(this)
    }
 componentDidMount()
 { 
 fetch("https://api.imgflip.com/get_memes")
 .then(res=>res.json())
 .then(res=>{
     const meme =res.data.memes
     console.log(meme[0])
     this.setState({allmemeimgs : meme})
 }) 
 } 
 handlechange(event)
 {
     const {name,value}=event.target
this.setState({[name]:value})
    } 
    handlesubmit(e)
    { 
        const ranid=Math.floor(Math.random()*this.state.allmemeimgs.length) 
        const memeid=this.state.allmemeimgs[ranid].url 
        this.setState({img:memeid})

  
e.preventDefault()
    }
 render() { 
        return (<div>
            <form className="meme-form" onSubmit={this.handlesubmit}>
                <input type="text" name="toptext" value={this.state.toptext} onChange={this.handlechange}/> 
                <input type="text" name="bottomtext" value={this.state.bottomtext} onChange={this.handlechange}/> 
                <button >Gen</button>
            </form> 
            <div className="meme">
                <img src={this.state.img} /> 
        <h2 className="top">{this.state.toptext}</h2> 
        <h2 className="bottom">{this.state.bottomtext}</h2>
            </div> 
            <h1> </h1>
        </div>);
    }
}

export default Meme;