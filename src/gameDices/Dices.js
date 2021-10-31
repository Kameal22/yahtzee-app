import '../gameStyles/Dices.css'
import {Component} from 'react'
import Die from './Die';

class Dices extends Component{

  static defaultProps = {
    numDices : 6,
    dieFaces : [1,2,3,4,5,6]
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
      ]
    }
  }

  randomizeDices = () =>{
    const randDices = this.state.dices.map(dice =>{
      let randInt = Math.floor(Math.random() * this.props.dieFaces.length) +1
      return {...dice, face : randInt}
    })
    this.setState({
      dices : randDices
    })
  }

  chooseDice = (id) =>{
    const dicesAfterChose = this.state.dices.map(dice =>{
      if(dice.id === id){
        return {...dice, isChosen : !this.state.dices.isChosen}
      }
      return dice
    })

    this.setState({
      dices : dicesAfterChose
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
            choose = {this.chooseDice} />
        })}

        </div>
        <h3 onClick = {this.randomizeDices}>Roll the die!</h3>
      </div>
    )
  }
}

export default Dices;