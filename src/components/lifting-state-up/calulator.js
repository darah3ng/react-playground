import React, { PureComponent } from 'react';
import TemperatureInput from './temperatureInput';

function toCelsius(fahrenheit) {
  return (fahrenheit - 32) * 5 / 9;
}

function toFahrenheit(celsius) {
  return (celsius * 9 / 5) + 32;
}

function tryConvert(temperature, convert) {
  const input = parseFloat(temperature);
  if (Number.isNaN(input)) {
    return '';
  }
  const output = convert(input);
  const rounded = Math.round(output * 1000) / 1000;
  return rounded.toString();
}

function BoilingVerdict(props) {
  if (props.celsius >= 100) {
    return <p>The water would boil.</p>
  }
  return <p>The water would not boil.</p>
}

class Calculator extends PureComponent {
  state = {
    temperature: '', scale: 'c'
  }

  handleCelsiusChange = (temperature) => {
    this.setState({
      scale: 'c', temperature
    })
  }
  
  handleFahrenheitChange = (temperature) => {
    this.setState({
      scale: 'f', temperature
    })
  }

  render() {
    const { temperature, scale } = this.state;
    console.log(temperature, scale);
    const celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature;
    const fahrenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature;

    return (
      <div>
        <TemperatureInput onTemperatureChange={this.handleCelsiusChange} temperature={celsius} scale='c' />
        <TemperatureInput onTemperatureChange={this.handleFahrenheitChange} temperature={fahrenheit} scale='f' />
        <br />
        <BoilingVerdict celsius={temperature} />
      </div>
    )
  }
}

export default Calculator;