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
      ],
      genderGuessResponse: '',
      hairColourGuessResponse: '',
      heightGuessReponse:''
    }

      this.gameLogic = new GameLogic(this.state.candidates)
      this.candidate = this.gameLogic.getRandomCandidate();
      console.log(this.candidate)
    }


    setSelectedGender(gender){
      console.log(gender)
      console.log(this.gameLogic.genderGuess(gender))
      this.setState({genderGuessResponse: this.gameLogic.genderGuess(gender)})
    }

    setSelectedHairColour(colour){
      console.log(colour)
      this.setState({hairColourGuessResponse: this.gameLogic.hairColourGuess(colour)})
    }

    setSelectedHeight(height){
      console.log(height)
      this.setState({heightGuessResponse: this.gameLogic.heightGuess(height)})
    } 


    setSelectedCandidate(name){
      console.log(name)
    }

    resetGuesses(event){
      console.log('reset guesses')
      this.setState({genderGuessResponse: ''})
      this.setState({hairColourGuessResponse: ''})
      this.setState({heightGuessResponse: ''})
    }

    render(){

      return (

        <div className = 'container'>
        <div className = 'title'>{this.state.gameName}</div>
        <div><Candidates candidates={this.state.candidates}/></div>

<div>Guess Which Feature!</div>

        <div>Guess their gender</div>
        <div><GenderSelector candidates={this.state.candidates} setSelectedGender={this.setSelectedGender.bind(this)}/></div>
        <div className="guess-response">{this.state.genderGuessResponse}</div>
        
        <div>Guess their hair colour</div>
        <div><ColourSelector candidates={this.state.candidates} setSelectedHairColour={this.setSelectedHairColour.bind(this)}/></div>
        <div className="guess-response">{this.state.hairColourGuessResponse}</div>


        <div>Guess their height</div>
        <div><HeightSelector candidates={this.state.candidates} setSelectedHeight={this.setSelectedHeight.bind(this)}/></div>
        <div className="guess-response">{this.state.heightGuessResponse}</div>


        <div><button onClick={this.resetGuesses.bind(this)}>Reset Guesses</button></div>


        <div>Guess who I'm thinking of!</div>
        <div><GuessWhichCandidateSelector candidates={this.state.candidates} setSelectedCandidate={this.setSelectedCandidate.bind(this)}/></div>


        </div>

        )



    }





  }


  export default GameContainer