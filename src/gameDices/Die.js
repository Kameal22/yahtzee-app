import './gameStyles/Die.css'
import {Component} from 'react'

class Die extends Component{

    //Select random number from values, asign it to dieFace and render a die.

    static defaultProps = {
        values = [1,2,3,4,5,6]
    }

    constructor(props){
        super(props)
        this.state = {
            dieFace : ''
        }
    }

  render(){
    return(
      <div className = "DieDiv">

        

      </div>
    )
  }
}

export default Die;