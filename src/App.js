import './gameStyles/App.css'
import {Component} from 'react'
import Yahtzee from './Yahtzee';

class App extends Component{

  render(){
    return(
      <div className = "mainDiv">
        <Yahtzee />
      </div>
    )
  }
}

export default App;
