import './gameStyles/Yahtzee.css'
import {Component} from 'react'
import Dices from './gameDices/Dices';

class Yahtzee extends Component{

  render(){
    return(
      <div className = "Yahtzee">

        <Dices />

      </div>
    )
  }
}

export default Yahtzee;