import React from 'react'

class Candidate extends React.Component{

  constructor(props){
    super(props)
}

  render(){

    return(

      <div className="single-candidate-wrapper">
      {this.props.candidate.name}
      </div>


      )


  }

}

export default Candidate
