import React from 'react'

class ColourSelector extends React.Component{

  constructor(props){
    super(props)
    this.hairChange = this.hairChange.bind(this)
    this.state = {
      selectedIndex: undefined
    }

  }

  hairChange(event){
    this.setState({selectedIndex: event.target.value})
    const selectedHairColour = this.props.candidates[event.target.value].hairColour  
    this.props.setSelectedHairColour(selectedHairColour)
  }


  render(){

    const hairColour = this.props.candidates.map((candidate, index) => {
      return <option value={index} key={index}>{candidate.hairColour}</option>
    })

    return (
      <select id='hairColour' value={this.state.selectedIndex} onChange={this.hairChange}>
      {hairColour}
      </select>
      );
  }

}
export default ColourSelector