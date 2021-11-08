import './gameStyles/Yahtzee.css'
import {Component} from 'react'
import Dices from './gameDices/Dices';
import Rules from './gameRules/BasicRules';
import AdvancedRules from './gameRules/AdvancedRules';

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
      basicRules : [
        {rule : 'ones', points : '1 point per 1', id : 1, scored : false},
        {rule : 'twos', points : '2 points per 2', id : 2, scored : false},
        {rule : 'threes', points : '3 points per 3', id : 3, scored : false},
        {rule : 'fours', points : '4 points per 4', id : 4, scored : false},
        {rule : 'fives', points : '5 points per 5', id : 5, scored : false},
        {rule : 'sixes', points : '6 points per 6', id : 6, scored : false}
      ],
      advancedRules : [
        {rule : 'Three of kind', points : 'Sum all dice if 3 are the same', id : 1, scored : false},
        {rule : 'Four of kind', points : 'Sum all dice if 4 are the same', id : 2, scored : false},
        {rule : 'Full house', points : ' 25 points for a full house', id : 3, scored : false},
        {rule : 'Small straight', points : '30 points for a small straight', id : 4, scored : false},
        {rule : 'Large straight', points : '40 points for a large straight', id : 5, scored : false},
        {rule : 'Yahtzee', points : '50 points for yahtzee', id : 6, scored : false},
        {rule : 'Chance', points : 'Sum all dice', id : 7, scored : false}
      ],
        gameStart : false,
        numRolls : 3,
        score : 0
      }
    }

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

  getRandomDice = () =>{
    return Math.floor(Math.random() * this.state.dices.length) +1
  }

  randomizeDice = () =>{
    const rolledDices = this.state.dices.map(dice => dice.isChosen ? dice : {...dice,
    face : this.getRandomDice()
  })
  const rollsLeft = this.state.numRolls -1;

  this.setState({
    dices : rolledDices,
    numRolls : rollsLeft
  })
}

scoreBasicRule = (id) =>{
  if(this.state.gameStart){
  let clickedRule = id

  const dieFaces = this.state.dices.map(dice =>{
    return(dice.face)
  })
  
  const matchingDices = dieFaces.filter(dice =>{
    return(dice === clickedRule)
  })

  let scoreSum = 0;

  for(let i = 0; i < matchingDices.length; i++){
    scoreSum += matchingDices[i]
  }

  this.setState(currentScore =>({
    score : currentScore.score + scoreSum,
  }))
}}

resetOnBasicScore = (id) =>{
  if(this.state.gameStart){
  let scoredRule = id

  const rulesAfterScoring = this.state.basicRules.map(rule =>{
    if(rule.id === scoredRule){
    return {...rule, scored : true}
  }
    return rule}
  )
  const dicesReset = this.state.dices.map(dice =>{
    return {...dice, face : this.getRandomDice(), isChosen : false}
  })
    this.setState({
      basicRules : rulesAfterScoring,
      numRolls : 2,
      dices : dicesReset,
    })  
}}

scoreAdvancedRule = (rule) =>{
  if(this.state.gameStart){
    let clickedRule = rule
    switch (rule){
      case 1 :
        const dieFaces = this.state.dices.map(dice =>{
          return(dice.face)
        })
        
        break
      case 2 : 
        console.log(rule)
        break
      case 3 : 
        console.log(rule)
        break
      case 4 : 
        console.log(rule)
        break
      case 5 : 
        console.log(rule)
        break
      case 6 : 
        console.log(rule)
        break
      case 7 : 
        console.log(rule)
        break
      default : console.log("test")            
    }
  }
}

  render(){
    const {dices} = this.state
    const {basicRules} = this.state
    const {advancedRules} = this.state
      return(
        <div className = "Yahtzee">
  
          <div className = "DieSection">
            <h1>Yahtzee!</h1>
            <Dices dicesToExport = {dices} chooseDie = {this.chooseDie} />
  
            <button disabled = {this.state.numRolls === 0}
            onClick = {() =>{this.setState({gameStart : true}); this.randomizeDice()}}>
            {this.state.gameStart ? `${this.state.numRolls} rolls left` : 'Start The game'} </button> 
          </div>
  
          <div className = "RulesSection">
            <h2>Game rules</h2>

            <Rules
            basicRules = {basicRules} 
            scoreBasicRule = {this.scoreBasicRule}
            resetOnScore = {this.resetOnBasicScore}/>

            <AdvancedRules
            advancedRules = {advancedRules}
            scoreAdvancedRule = {this.scoreAdvancedRule}/>
  
            <p className = "score">{`TOTAL SCORE: ${this.state.score}`}</p>
          </div>
  
        </div>
      )}
  }


export default Yahtzee;