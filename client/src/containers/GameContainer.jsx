import React from 'react'
import Candidates from '../components/Candidates.jsx'
import ColourSelector from '../components/ColourSelector.jsx'
import HeightSelector from '../components/HeightSelector.jsx'
import GenderSelector from '../components/GenderSelector.jsx'
import GuessWhichCandidateSelector from '../components/GuessWhichCandidateSelector.jsx'
import GameLogic from '../components/GameLogic.js'

class GameContainer extends React.Component{

  constructor (props) {
    super(props)
    this.state = {
      gameName: 'Guess Who!',
      candidates: [  {name: 'Bill', gender: 'male', hairColour: 'blue', height: 3}, 
      {name: 'Jo', gender: 'female', hairColour: 'green', height: 4},
      {name: 'Graham', gender: 'male', hairColour: 'yellow', height: 5},
      {name: 'Trixie', gender: 'female', hairColour: 'black', height: 6}
      ] }

      this.gameLogic = new GameLogic(this.state.candidates)
      this.candidate = this.gameLogic.getRandomCandidate();
      console.log(this.candidate)
    }


    setSelectedGender(gender){
      console.log(gender)
    }

    setSelectedHairColour(colour){
      console.log(colour)
    }

    setSelectedHeight(height){
      console.log(height)
    } 


    setSelectedCandidate(name){
      console.log(name)
    }

    render(){

      return (

        <div className = 'container'>
        <div className = 'title'>{this.state.gameName}</div>
        <div><Candidates candidates={this.state.candidates}/></div>

        <div><GenderSelector candidates={this.state.candidates} setSelectedGender={this.setSelectedGender.bind(this)}/></div>
        <div><ColourSelector candidates={this.state.candidates} setSelectedHairColour={this.setSelectedHairColour.bind(this)}/></div>
        <div><HeightSelector candidates={this.state.candidates} setSelectedHeight={this.setSelectedHeight.bind(this)}/></div>
        <div><GuessWhichCandidateSelector candidates={this.state.candidates} setSelectedCandidate={this.setSelectedCandidate.bind(this)}/></div>


        </div>

        )



    }





  }


  export default GameContainer