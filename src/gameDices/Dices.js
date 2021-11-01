import '../gameStyles/Dices.css'
import {Component} from 'react'
import Die from './Die';

class Dices extends Component{

  static defaultProps = {
    numDices : 6,
    dieFaces : [1,2,3,4,5,6],
    maxRolls : 3
  }

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
      countPointsTime : false,
      gameStart : false,
      chosenDices : [
        
      ]
    }
  }

  entryRandomize = () =>{
    const randDices = this.state.dices.map(dice =>{
      let randInt = Math.floor(Math.random() * this.props.dieFaces.length) +1
      if(dice.isChosen === false){
        return {...dice, face : randInt}
      }
      return dice
    })
    this.setState({
      dices : randDices,
    })
  }

  randomizeDices = () =>{
    if(this.state.numRolls !== 0){
    const randDices = this.state.dices.map(dice =>{
      let randInt = Math.floor(Math.random() * this.props.dieFaces.length) +1
      if(dice.isChosen === false){
        return {...dice, face : randInt}
      }
      // Create scd array of chosen dices to summarize their score values
      return dice
    })
    this.setState(currLimit =>({
      dices : randDices,
      numRolls : currLimit.numRolls -1
    }))
    if(this.state.numRolls === 1){
      this.setState({
        countPointsTime : true
      })
    }
  }}

  chooseDice = (id) =>{
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
  }
  }

  render(){
    if(this.state.gameStart === true){
    return(
      <div className = "DieSection">
        <h1>Yahtzee!</h1>
        <div className = "DieDiv">
          
        {this.state.dices.map(dice =>{
          return <Die
            face = {dice.face}
            key = {dice.id}
            id = {dice.id}
            isChosen = {dice.isChosen}
            choose = {this.chooseDice}
            rollLimit = {this.setRollLimit}
            />
        })}

        </div>
        <button onClick = {this.randomizeDices} >{`${this.state.numRolls} Roll left!`}</button>
      </div>
    )
    }else{
      return(
        <div className = "DieSection">
        <h1>Yahtzee!</h1>
        <div className = "DieDiv">
          
        {this.state.dices.map(dice =>{
          return <Die
            face = {dice.face}
            key = {dice.id}
            id = {dice.id}
            isChosen = {dice.isChosen}
            choose = {this.chooseDice}
            rollLimit = {this.setRollLimit}
            />
        })}

        </div>
        <button onClick = {() =>{this.setState({gameStart : true}); this.entryRandomize();}}
         >Start the game!</button>
      </div>
      )
    }
  }
}

export default Dices;