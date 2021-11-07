import '../gameStyles/Rules.css'
import {Component} from 'react'
import Rule from './Rule';
import { v4 as uuidv4 } from 'uuid';

class Rules extends Component{
    
  render(){
    return(
      <div>

        <div className = "rulesDiv">

            {this.props.basicRules.map(rule =>{
                return <Rule
                rule = {rule.rule}
                points = {rule.points} 
                key = {uuidv4()} 
                id = {rule.id} 
                scored = {rule.scored}
                scoreBasic = {this.props.scoreBasicRule}
                resetOnScore = {this.props.resetOnScore}
                />
            })}

        </div>

        <div className = "moreRulesDiv">

            {this.props.advancedRules.map(rule =>{
                return <Rule rule = {rule.rule} points = {rule.points} key = {uuidv4()}/>
            })}

        </div>

      </div>
    )
  }
}

export default Rules;