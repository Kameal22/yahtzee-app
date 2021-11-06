import './gameStyles/Yahtzee.css'
import {Component} from 'react'
import Dices from './gameDices/Dices';
import Rules from './gameRules/Rules';

class Yahtzee extends Component{

  constructor(props){
    super(props)
    this.state = {
      dices : [
        {face : 1, id : 1, isChosen : false},
        {face : 2, id : 2, isChosen : false},
        {face : 3, id : 3, isChosen : false},
        {face : 4, id : 4, isChosen : false},
        {face : 5, id : 5, isChosen : false},
        {face : 6, id : 6, isChosen : false}
      ],
      numRolls : 2,
      gameStart : false,
      numRolls : 2,
      score : 0
    }
  }

  getRandomDice = () =>{
    return Math.floor(Math.random() * this.state.dices.length) +1
  }

  gameStart = () =>{
    const randomizedDices = this.state.dices.map(dice => dice.isChosen ? dice : {...dice,
    face : this.getRandomDice()})
    this.setState({
      dices : randomizedDices,
    })
  }

  //Set num Rolls to 2 after initial start-game Roll

  chooseDie = (id) =>{
    if(this.state.gameStart){
    const dicesAfterChose = this.state.dices.map(dice =>{
      if(dice.id === id){
        return {...dice, isChosen : !dice.isChosen}
      }
      return dice
    })

    this.setState({
      dices : dicesAfterChose,
    })
  }}

  render(){
    const {dices} = this.state

    return(
      <div className = "Yahtzee">

        <div className = "DieSection">
          <h1>Yahtzee!</h1>

          <Dices dicesToExport = {dices} chooseDie = {this.chooseDie} />

          <button onClick = {() =>{this.setState({gameStart : true}); this.gameStart()}}>Start the game</button>
          
        </div>

        <div className = "RulesSection">
          <h2>Game rules</h2>
          <Rules exportBasic = {this.importClickedRule} />

          <p className = "score">{`TOTAL SCORE: ${this.state.score}`}</p>
        </div>

      </div>
    )
  }
}

export default Yahtzee;