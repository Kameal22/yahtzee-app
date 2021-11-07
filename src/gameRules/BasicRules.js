import '../gameStyles/Rules.css'
import {Component} from 'react'
import Rule from './BasicRule';
import { v4 as uuidv4 } from 'uuid';

class BasicRules extends Component{
    
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

      </div>
    )
  }
}

export default BasicRules;