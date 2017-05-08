import React from 'react'

class GuessWhichCandidateSelector extends React.Component{

  constructor(props){
    super(props)
    this.candidateChange = this.candidateChange.bind(this)
    this.state = {
      selectedIndex: undefined
    }

  }

  candidateChange(event){
    this.setState({selectedIndex: event.target.value})
    const selectedCandidate = this.props.candidates[event.target.value].name  
    this.props.setSelectedCandidate(selectedCandidate)
  }


  render(){

    const selectedCandidate = this.props.candidates.map((candidate, index) => {
      return <option value={index} key={index}>{candidate.name}</option>
    })

    return (
      <select id='guess-candidate' value={this.state.selectedIndex} onChange={this.candidateChange}>
      {selectedCandidate}
      </select>
      );
  }

}
export default GuessWhichCandidateSelector