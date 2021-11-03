import '../gameStyles/Rule.css'
import {Component} from 'react'

class Rule extends Component{

  handleClick = () =>{
    this.props.exportClickedRule(this.props.id)
  }
    
  render(){
    return(
      <div onClick = {this.handleClick} className = "ruleDiv">

        <p className = "ruleDescr">{this.props.rule}</p>

        <p className = "rulePoints">{this.props.points}</p>

      </div>
    )
  }
}

export default Rule;