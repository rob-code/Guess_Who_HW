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
      gameName: 'Who am I thinking of?',
      candidates: [  {name: 'Bill', gender: 'male', hairColour: 'blue', height: 3}, 
      {name: 'Jo', gender: 'female', hairColour: 'green', height: 4},
      {name: 'Graham', gender: 'male', hairColour: 'yellow', height: 5},
      {name: 'Trixie', gender: 'female', hairColour: 'black', height: 6}
      ],
      genderGuessResponse: '',
      hairColourGuessResponse: '',
      heightGuessResponse:'',
      candidateGuessResponse: ''
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
      this.setState({candidateGuessResponse: this.gameLogic.candidateGuess(name)})


    }

    resetGuesses(event){
      console.log('reset guesses')
      this.setState({genderGuessResponse: ''})
      this.setState({hairColourGuessResponse: ''})
      this.setState({heightGuessResponse: ''})
      this.setState({candidateGuessResponse: ''})
    }

    render(){

      return (

        <div className = 'container'>
        <div className = 'title'>{this.state.gameName}</div>
        <div><Candidates candidates={this.state.candidates}/></div>

<div className="guess-feature-title">Guess Which Feature!</div>

        <div className="guess">
        <div className="guess-title">Guess their gender</div>
        <div className="guess-select"><GenderSelector candidates={this.state.candidates} setSelectedGender={this.setSelectedGender.bind(this)}/></div>
        <div className="guess-response">{this.state.genderGuessResponse}</div>
        </div>
        
        <div className="guess">
        <div className="guess-title">Guess their hair colour</div>
        <div className="guess-select"><ColourSelector candidates={this.state.candidates} setSelectedHairColour={this.setSelectedHairColour.bind(this)}/></div>
        <div className="guess-response">{this.state.hairColourGuessResponse}</div>
        </div>

        <div className="guess">
        <div className="guess-title">Guess their height</div>
        <div className="guess-select"><HeightSelector candidates={this.state.candidates} setSelectedHeight={this.setSelectedHeight.bind(this)}/></div>
        <div className="guess-response">{this.state.heightGuessResponse}</div>
        </div>

        <div className="reset-button"><button onClick={this.resetGuesses.bind(this)}>Reset Guesses</button></div>


        <div className="title">Guess who I'm thinking of!</div>
        <div className="guess-select"><GuessWhichCandidateSelector candidates={this.state.candidates} setSelectedCandidate={this.setSelectedCandidate.bind(this)}/></div>
        <div className="guess-response">{this.state.candidateGuessResponse}</div>

        </div>

        )



    }





  }


  export default GameContainer