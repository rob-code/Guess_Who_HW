import React from 'react'
import Candidates from '../components/Candidates.jsx'
import ColourSelector from '../components/ColourSelector.jsx'
import HeightSelector from '../components/HeightSelector.jsx'
import GameLogic from '../components/GameLogic.js'

class GameContainer extends React.Component{

  constructor (props) {
    super(props)
    this.state = {
      gameName: 'Guess Who!',
      candidates: [  {name: 'Bill', hairColour: 'blue', height: 3}, 
      {name: 'Jo', hairColour: 'green', height: 4},
      {name: 'Graham', hairColour: 'yellow', height: 5},
      {name: 'Trixie', hairColour: 'black', height: 6}
      ] }

      this.gameLogic = new GameLogic(this.state.candidates)
      this.candidate = this.gameLogic.getRandomCandidate();
      console.log(this.candidate)
    }

    setSelectedHairColour(colour){
      console.log(colour)
    }

    setSelectedHeight(height){
      console.log(height)
    } 


    render(){

      return (

        <div className = 'container'>
        <div className = 'title'>{this.state.gameName}</div>
        <div><Candidates candidates={this.state.candidates}/></div>
        <div><ColourSelector candidates={this.state.candidates} setSelectedHairColour={this.setSelectedHairColour.bind(this)}/></div>
        <div><HeightSelector candidates={this.state.candidates} setSelectedHeight={this.setSelectedHeight.bind(this)}/></div>
        </div>

        )



    }





  }


  export default GameContainer