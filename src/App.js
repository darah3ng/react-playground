import React from 'react';
import Clock from './components/clock';
import FormTest from './components/formTest';
import SelectTest from './components/selectTest';
import MultipleInputs from './components/multipleInputs';
import Calculator from './components/lifting-state-up/calulator';

const numbers = [1, 2, 3, 4, 5];
const listItems = numbers.map((number, index) =>
<li key={number.toString()}>{number} {index}</li>
);

function App() {
  return (
    <div>
      <Clock /> <br/>
      <ul>{listItems}</ul>
      <FormTest />
      <SelectTest />
      <MultipleInputs />
      <br />
      <Calculator />
    </div>
  );
}

export default App;
