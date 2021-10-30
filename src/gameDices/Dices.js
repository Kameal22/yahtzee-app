import '../gameStyles/Dices.css'
import {Component} from 'react'
import Die from './Die';

class Dices extends Component{

  static defaultProps = {
    dieFaces : [1,2,3,4,5,6]
  }

  generateRandDice = () =>{
    let randInt = Math.floor(Math.random() * this.props.dieFaces.length)
    return this.props.dieFaces[randInt]
  }

  render(){
    return(
      <div className = "DieDiv">

        {this.props.dieFaces.map(face =>{
          return(
            face = this.generateRandDice(),
            <Die face = {face} />
          )
        })}

      </div>
    )
  }
}

export default Dices;