import './gameStyles/Yahtzee.css'
import {Component} from 'react'
import Dices from './gameDices/Dices';
import Rules from './gameRules/Rules';

class Yahtzee extends Component{

  constructor(props){
    super(props)
    this.state = {
      importedDices : []
    }
  }

  importDices = (importedDices) =>{
      this.setState({
        importedDices : importedDices
      })
  }

  render(){
    // console.log(this.state.importedDices)
    return(
      <div className = "Yahtzee">

        <Dices exportChosen = {this.importDices} />

        <Rules />

      </div>
    )
  }
}

export default Yahtzee;