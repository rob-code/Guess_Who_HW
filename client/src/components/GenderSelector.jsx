import React from 'react'

class GenderSelector extends React.Component{

  constructor(props){
    super(props)
    this.genderChange = this.genderChange.bind(this)
    this.state = {
      gender: ['male', 'female'],
      selectedIndex: undefined
    }

  }

  genderChange(event){
    this.setState({selectedIndex: event.target.value})   
    const selectedGender = this.state.gender[event.target.value]  
    this.props.setSelectedGender(selectedGender)
  }


  render(){

    const gender = this.state.gender.map((gender, index) => {
      return <option value={index} key={index}>{gender}</option>
    })

    return (
      <select id='gender' value={this.state.selectedIndex} onChange={this.genderChange}>
      {gender}
      </select>
      );
  }

}
export default GenderSelector