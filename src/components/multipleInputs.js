import React, { PureComponent } from 'react';

class MultipleInputs extends PureComponent {
  state = {
    isGoing: true,
    numberOfGuests: 0
  }
  
  handleInputChange = (event) => {
    console.log(event.target);
    const target = event.target;
    const value = event.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });

    this.handleClick();
  }

  handleClick = () => {
    this.setState({
      isGoing: !this.state.isGoing
    })
  }
  
  render() {
    console.log(this.state);
    return (
      <form>
        <label>Is going:
          <input 
            name='isGoing'
            type='checkbox'
            checked={this.state.isGoing}
            onChange={this.handleInputChange}
          />
        </label>
        <br />
        <label>Number of guests:
          <input
            name='numberOfGuests'
            type='number'
            value={this.state.numberOfGuests}
            onChange={this.handleInputChange}
          />
        </label>
      </form>
    );
  }
}

export default MultipleInputs;