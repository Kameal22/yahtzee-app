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
  
  importClickedRule = (id) =>{
    let clickedRule = id

    if(this.state.importedDices.length === 6){
      const dicesMatchingRule = this.state.importedDices.filter(dice =>{
        return(dice === clickedRule)
      })
      
      this.setState({
        score : dicesMatchingRule.length
      })

      //Add multiplier for 2,3,4,5,6 !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    }
  }

  render(){
    console.log(this.state.score)
    // const basicRules = Rules.defaultProps.gameRules

    //Need to check which rule was clicked, and based on it's.. Let's say ID (5) return only dices bigger than this ID and count them up.

    return(
      <div className = "Yahtzee">

        <Dices exportChosenDices = {this.importDices} />

        <Rules exportBasic = {this.importClickedRule} />

        <p className = "score">{`TOTAL SCORE: ${this.state.score}`}</p>

      </div>
    )
  }
}

export default Yahtzee;