import '../gameStyles/Rule.css'
import {Component} from 'react'

class Rule extends Component{

  handleClick = () =>{
    this.props.scoreBasic(this.props.id)
    this.props.resetOnScore(this.props.id)
  }
    
  render(){
    const notScored = {
      textDecoration : 'none'
    }
    const scored = {
      textDecoration : 'line-through'
    }
    return(
      <div
      style = {this.props.scored ? scored : notScored}
      onClick = {this.props.scored ? null : this.handleClick }
      className = "ruleDiv">

        <p className = "ruleDescr">{this.props.rule}</p>

        <p className = "rulePoints">{this.props.points}</p>

      </div>
    )
  }
}

export default Rule;