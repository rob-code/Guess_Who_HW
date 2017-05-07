import React from 'react'

class Candidate extends React.Component{

  constructor(props){
    super(props)
}

  render(){

    return(

      <div className="single-candidate-wrapper">
      {this.props.candidate.name}
      {this.props.candidate.hairColour}
      {this.props.candidate.height}
      </div>


      )


  }

}

export default Candidate
