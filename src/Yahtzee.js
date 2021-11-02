import './gameStyles/Yahtzee.css'
import {Component} from 'react'
import Dices from './gameDices/Dices';
import Rules from './gameRules/Rules';

class Yahtzee extends Component{

  constructor(props){
    super(props)
    this.state = {
      chosenDices : []
    }
  }

  countPoints = (chosenDices) =>{
      this.setState(state =>({
        chosenDices : [...state, chosenDices]
      }))
  }

  render(){
    console.log(this.state.chosenDices)
    return(
      <div className = "Yahtzee">

        <Dices exportChosen = {this.chosenDices} />

        <Rules />

      </div>
    )
  }
}

export default Yahtzee;