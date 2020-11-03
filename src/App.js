import React, { Component } from 'react'; 
import Header from "./Header";  
 // eslint-disable-next-line
import Meme from "./Memegenerator"


class App extends Component
{
  constructor()
  {
    super() 
    this.state ={}

  } 
  render() { 
    return(<div> 

      <Header />  
      <Meme />
      </div>)
  }
} 

export default App;