import '../gameStyles/Rule.css'
import {Component} from 'react'

class Rule extends Component{

  handleClick = () =>{
    this.props.countPoints(this.props.rule)
  }
    
  render(){
    return(
      <div className = "ruleDiv" onClick = {this.handleClick}>

        <p className = "ruleDescr">{this.props.rule}</p>

        <p className = "rulePoints">{this.props.points}</p>

      </div>
    )
  }
}

export default Rule;