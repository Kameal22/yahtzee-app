import './gameStyles/Yahtzee.css'
import {Component} from 'react'
import Dices from './gameDices/Dices';
import Rules from './gameRules/Rules';
import {findSameDices} from './Utills';

class Yahtzee extends Component{

  constructor(props){
    super(props)
    this.state = {
      dices : [
        {face : 1, id : 1, isChosen : false},
        {face : 2, id : 2, isChosen : false},
        {face : 3, id : 3, isChosen : false},
        {face : 4, id : 4, isChosen : false},
        {face : 5, id : 5, isChosen : false}
      ],
      rules : [
        {rule : 'ones', points : '1 point per 1', id : 1, scored : false},
        {rule : 'twos', points : '2 points per 2', id : 2, scored : false},
        {rule : 'threes', points : '3 points per 3', id : 3, scored : false},
        {rule : 'fours', points : '4 points per 4', id : 4, scored : false},
        {rule : 'fives', points : '5 points per 5', id : 5, scored : false},
        {rule : 'sixes', points : '6 points per 6', id : 6, scored : false},
        {rule : 'Three of kind', points : 'Sum all dice if 3 are the same', id : 7, scored : false},
        {rule : 'Four of kind', points : 'Sum all dice if 4 are the same', id : 8, scored : false},
        {rule : 'Full house', points : ' 25 points for a full house', id : 9, scored : false},
        {rule : 'Small straight', points : '30 points for a small straight', id : 10, scored : false},
        {rule : 'Large straight', points : '40 points for a large straight', id : 11, scored : false},
        {rule : 'Yahtzee', points : '50 points for yahtzee', id : 12, scored : false},
        {rule : 'Chance', points : 'Sum all dice', id : 13, scored : false}
      ],
        gameStart : false,
        numRolls : 3,
        score : 0,
        winner : false
      }
    }

  checkForWinner = () =>{
    console.log(Object.values(this.state.rules)
    .every(scored => scored === true))
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
    return Math.floor(Math.random() * 6) +1
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

resetOnScore = (id) =>{
  if(this.state.gameStart){
  let scoredRule = id

  const rulesAfterScoring = this.state.rules.map(rule =>{
    if(rule.id === scoredRule){
    return {...rule, scored : true}
  }
    return rule}
  )
  const dicesReset = this.state.dices.map(dice =>{
    return {...dice, face : this.getRandomDice(), isChosen : false}
  })
    this.setState({
      rules : rulesAfterScoring,
      numRolls : 2,
      dices : dicesReset,
    })  
}}

scoreAdvancedRule = (rule) =>{
  if(this.state.gameStart){
    const dieFaces = this.state.dices.map(dice =>{
      return(dice.face)
    })
    switch (rule){
      case 7 :
          const score = findSameDices(dieFaces, 3)
          this.setState(currentScore =>({
            score : currentScore.score + score
          }))
        break
      case 8 : 
      const fourScore = findSameDices(dieFaces, 4)
        this.setState(currentScore =>({
          score : currentScore.score + fourScore
        }))
        break
      case 9 :
      let fullHouseScore = 0;  
      const hasDuplicates = (array) => {
        return (new Set(array)).size !== array.length;
    }
      const find3s = (array) =>{
        const count = {}
        let contains = false

        array.forEach(item => {
            if (count[item]) {
              count[item] +=1
              return
            }
            count[item] = 1
        })

        for (let prop in count){
            if (count[prop] >=3){
                contains = true
            }
        }
        if(contains && hasDuplicates(dieFaces)){
          fullHouseScore = 25
        }
        }
        find3s(dieFaces)
        this.setState(currentScore =>({
          score : currentScore.score + fullHouseScore
        }))
      break
      case 10 : 
      dieFaces.sort();
      if (/1234|2345|3456/.test(dieFaces.join("").replace(/(.)\1/,"$1"))) {
        this.setState(currentScore =>({
          score : currentScore.score + 30
        }))
      }
        break
      case 11 : 
      const largeStraigth = !dieFaces.some((v, i) => dieFaces.indexOf(v) < i);
      if(largeStraigth && (dieFaces.indexOf(1) === -1 || dieFaces.indexOf(6) === -1)){
        this.setState(currentScore =>({
          score : currentScore.score + 40
        }))
      }
        break
      case 12 : 
      const allEqual = arr => arr.every( v => v === arr[0] )
        if(allEqual( dieFaces )){
          this.setState(currentScore =>({
            score : currentScore.score + 50
          }))
        }
        break
      case 13 :
        let chance = 0 
        for(let i = 0; i < dieFaces.length; i++){
          chance += dieFaces[i]
        }
        this.setState(currentScore =>({
          score : currentScore.score + chance
        }))
        break
      default : console.log("yahtzee!")            
    }
  }
}

  render(){
    const {dices} = this.state
    const {rules} = this.state
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
            rules = {rules} 
            scoreBasicRule = {this.scoreBasicRule}
            scoreAdvancedRule = {this.scoreAdvancedRule}
            resetOnScore = {this.resetOnScore}/>
  
            <p className = "score">{`TOTAL SCORE: ${this.state.score}`}</p>
          </div>
  
        </div>
      )}
  }


export default Yahtzee;