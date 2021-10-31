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
        {face : 6, id : 1, isChosen : false},
        {face : 6, id : 2, isChosen : false},
        {face : 6, id : 3, isChosen : false},
        {face : 6, id : 4, isChosen : false},
        {face : 6, id : 5, isChosen : false},
        {face : 6, id : 6, isChosen : false}
      ],
      numRolls : 3,
      countPointsTime : false
    }
  }

// RANDOMIZE ONLY DICES THAT AREN'T CHOSEN !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

  randomizeDices = () =>{

    if(this.state.countPointsTime !== true){

    const randDices = this.state.dices.map(dice =>{
      let randInt = Math.floor(Math.random() * this.props.dieFaces.length) +1
      return {...dice, face : randInt}
    })
    if(this.state.numRolls !== 0){
    this.setState(currLimit =>({
      dices : randDices,
      numRolls : currLimit.numRolls -1
    }))
  }}}

  //SET COUNTPOINTSTIME TO TRUE ELSE

  chooseDice = (id) =>{
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

  render(){
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
  }
}

export default Dices;