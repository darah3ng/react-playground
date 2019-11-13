import React, { PureComponent } from 'react';

class SelectTest extends PureComponent {
  state = {
    value: 'orange'
  }

  handleChange = (event) => {
    this.setState({
      value: event.target.value
    });
  }

  handleClick = () => {
    alert('Your favourite fruit is: ' + this.state.value);
  }

  render() {
    return (
      <div>
      <select value={this.state.value} onChange={this.handleChange}>
        <option value='apple'>Apple</option>
        <option value='banana'>Banana</option>
        <option value='orange'>Orange</option>
        <option value='kiwi'>Kiwi</option>
      </select>
      <button onClick={this.handleClick}>Press</button>
      </div>
    );
  }
}

export default SelectTest;