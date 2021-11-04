import './gameStyles/Yahtzee.css'
import {Component} from 'react'
import Dices from './gameDices/Dices';
import Rules from './gameRules/Rules';

class Yahtzee extends Component{

  constructor(props){
    super(props)
    this.state = {
      importedDices : [],
      importedBasicRules : [],
      score : 0
    }
  }

  importDices = (dices) =>{
    this.setState({
      importedDices : dices
    })
  }

  returnDices = () =>{
    return this.state.importedDices.filter(dice =>{
      console.log(dice >= 5)
    })
  }

  importClickedRule = (id) =>{
    if(this.state.importedDices.length === 6){
      console.log(id)
    }
  }

  countBasicRulesPoints = () =>{
    // When certain rule is clicked, check it's ID. If ID === 3, use filter function on importedDices and filter only dices of value 3.
    // Count them up and summarize the score.

  }

  render(){
    console.log(this.state.importedDices)
    console.log(this.importClickedRule())
    // const basicRules = Rules.defaultProps.gameRules

    //Need to check which rule was clicked, and based on it's.. Let's say ID (5) return only dices bigger than this ID and count them up.

    return(
      <div className = "Yahtzee">

        <Dices exportChosenDices = {this.importDices} />

        <Rules exportBasic = {this.importClickedRule}/>

        <p className = "score">{`TOTAL SCORE: ${this.state.score}`}</p>

      </div>
    )
  }
}

export default Yahtzee;