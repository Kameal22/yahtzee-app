import '../gameStyles/Die.css'
import {Component} from 'react'

class Die extends Component{

  handleChoice = () =>{
    this.props.chooseDie(this.props.id)
  }

  render(){
    const dieColor = {
      color : 'ivory'
    }
    const chosenDieColor = {
      color : 'rgb(44, 44, 44)'
    }

    return(
      <div className = "DieDiv">

        <i
          style = {this.props.isChosen ? chosenDieColor : dieColor}
          onClick = {this.handleChoice}
          className = {`bi bi-dice-${this.props.face}`}>
        </i>

      </div>
    )
  }
}

export default Die;