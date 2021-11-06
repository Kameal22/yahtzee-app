import '../gameStyles/Dices.css'
import {Component} from 'react'
import Die from './Die';

class Dices extends Component{

  render(){
    return(
      <div className = "DicesDiv">

          {this.props.dicesToExport.map(dice =>{
            return(
              <Die
              face = {dice.face}
              id = {dice.id}
              key = {dice.id}
              chooseDie = {this.props.chooseDie}
              isChosen = {dice.isChosen} />
            )
          })}

      </div>
    )
  }
}

export default Dices;