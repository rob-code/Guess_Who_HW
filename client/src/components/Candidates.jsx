import React from 'react'
import Candidate from './Candidate.jsx'

class Candidates extends React.Component {

  render(){

    const candidateNodes = this.props.candidates.map((candidate, index) => {

      const candidateNumber = index + 1

      return (
        <Candidate candidate={candidate} key={index} candidateNumber={candidateNumber}/>
        )
    })

    return(
      <div>
      <div className="candidates-title">Who Am I Thinking Of? Is it:</div>

      <div className="candidates-wrapper">
      {candidateNodes}
      </div>
      </div>

      )

  }

}
export default Candidates