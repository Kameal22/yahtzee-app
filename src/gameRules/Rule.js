import '../gameStyles/Rule.css'
import {Component} from 'react'

class Rule extends Component{
    
  render(){
    return(
      <div className = "ruleDiv" onClick = {this.handleCount}>

        <p className = "ruleDescr">{this.props.rule}</p>

        <p className = "rulePoints">{this.props.points}</p>

      </div>
    )
  }
}

export default Rule;