import React, { PureComponent } from 'react';

class FormTest extends PureComponent {
  
  state = {
    value: ''
  }

  handleChange = (event) => {
    this.setState({ value: event.target.value });
  }

  handleSubmit = (event) => {
    alert('The value was submitted: ' + this.state.value);
    event.preventDefault();
  }

  handleDoubleClick = (e) => {
    alert('Ahh.. you clicked me twice!');
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} onDoubleClick={this.handleDoubleClick}>
        <label>Name: <input type='text' value={this.state.value} onChange={this.handleChange} /></label>
        <input type='submit' value='Submit' />
      </form>
    );
  }
}

export default FormTest;