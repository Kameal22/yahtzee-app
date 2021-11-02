import '../gameStyles/Rules.css'
import {Component} from 'react'
import Rule from './Rule';
import { v4 as uuidv4 } from 'uuid';

class Rules extends Component{

    static defaultProps = {
        gameRules : [
            {rule : 'ones', points : '1 point per 1', id : 1},
            {rule : 'twos', points : '2 points per 2', id : 2},
            {rule : 'threes', points : '3 points per 3', id : 3},
            {rule : 'fours', points : '4 points per 4', id : 4},
            {rule : 'fives', points : '5 points per 5', id : 5},
            {rule : 'sixes', points : '6 points per 6', id : 6}
        ],
        moreRules : [
            {rule : 'Three of kind', points : 'Sum all dice if 3 are the same'},
            {rule : 'Four of kind', points : 'Sum all dice if 4 are the same'},
            {rule : 'Full house', points : ' 25 points for a full house'},
            {rule : 'Small straight', points : '30 points for a small straight'},
            {rule : 'Large straight', points : '40 points for a large straight'},
            {rule : 'Yahtzee', points : '50 points for yahtzee'},
            {rule : 'Chance', points : 'Sum all dice'}
        ]
    }

    RulesFunc = (rule, points) =>{
        //which basic rule was clicked, and how many points should be added.


        //RULE - ones, POINTS - map over dices after last roll and check if any of rule apply to them
    }

    constructor(props){
        super(props)
        this.state = {
            score : 0
        }
    }

  render(){
    return(
      <div>

        <div className = "rulesDiv">

            {this.props.gameRules.map(rule =>{
                return <Rule rule = {rule.rule} points = {rule.points} key = {uuidv4()} countPoints = {this.RulesFunc}/>
            })}

        </div>

        <div className = "moreRulesDiv">

            {this.props.moreRules.map(rule =>{
                return <Rule rule = {rule.rule} points = {rule.points} key = {uuidv4()} countPoints = {this.RulesFunc}/>
            })}

        </div>

        <p className = "score">{`TOTAL SCORE: ${this.state.score}`}</p>

      </div>
    )
  }
}

export default Rules;