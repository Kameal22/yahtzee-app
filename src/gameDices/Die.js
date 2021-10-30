import '../gameStyles/Die.css'
import {Component} from 'react'

class Die extends Component{

  render(){
    return(
      <div className = "DieDiv">

        <i className = {`bi bi-dice-${this.props.face}`}></i>

      </div>
    )
  }
}

export default Die;