import React, { PureComponent } from 'react';

class Clock extends PureComponent {
  state = {
    date: new Date()
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(), 1000
    )
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    })
  }

  render () {
    const { date } = this.state;
    return (
      <div>
        <h2>It is { date.toLocaleTimeString() }</h2>
      </div>
    );
  }
}

export default Clock;