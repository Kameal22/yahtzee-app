import './gameStyles/Yahtzee.css'
import {Component} from 'react'
import Dices from './gameDices/Dices';
import Rules from './gameRules/Rules';

class Yahtzee extends Component{

  render(){
    return(
      <div className = "Yahtzee">

        <Dices />

        <Rules />

      </div>
    )
  }
}

export default Yahtzee;