import '../gameStyles/Rules.css'
import {Component} from 'react'
import AdvancedRule from './AdvancedRule';
import { v4 as uuidv4 } from 'uuid';

class AdvancedRules extends Component{
    
  render(){
    return(
      <div>

        <div className = "rulesDiv">

            {this.props.advancedRules.map(rule =>{
                return <AdvancedRule
                rule = {rule.rule}
                points = {rule.points} 
                key = {uuidv4()} 
                id = {rule.id} 
                scored = {rule.scored}
                resetOnScore = {this.props.resetOnScore}
                scoreAdvanced = {this.props.scoreAdvancedRule}
                />
            })}

        </div>

      </div>
    )
  }
}

export default AdvancedRules;