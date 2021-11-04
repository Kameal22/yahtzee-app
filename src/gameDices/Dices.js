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
      gameStart : false,
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

  getRandomDice = () =>{
    return Math.floor(Math.random() * this.props.dieFaces.length) +1
  }

  randomizeDice = () =>{
      const rolledDices = this.state.dices.map(dice => dice.isChosen ? dice : {...dice,
      face : this.getRandomDice()
    })
    const rollsLeft = this.state.numRolls -1;

    if(rollsLeft === 0){
      this.props.exportChosenDices(rolledDices.map(dice => dice.face));
    }

    this.setState({
      dices : rolledDices,
      numRolls : rollsLeft
    })
  }

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
    if(this.state.gameStart){
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
        <button disabled = {this.state.numRolls === 0}
                onClick = {this.randomizeDice}>
                {`${this.state.numRolls} rolls left`} </button>
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