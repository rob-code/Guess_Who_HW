import React from 'react'

class HeightSelector extends React.Component{

  constructor(props){
    super(props)
    this.heightChange = this.heightChange.bind(this)
    this.state = {
      selectedIndex: undefined
    }
  }

  heightChange(event){
    this.setState({selectedIndex: event.target.value})
    const selectedHeight = this.props.candidates[event.target.value].height
    this.props.setSelectedHeight(selectedHeight)
  }


  render(){

    const height = this.props.candidates.map((candidate, index) => {
      return <option value={index} key={index}>{candidate.height}</option>
    })

    return (
      <select id='height' value={this.state.selectedIndex} onChange={this.heightChange}>
      {height}
      </select>
      );
  }

}
export default HeightSelector













