import React from 'react';
import Clock from './components/clock';
import FormTest from './components/formTest';
import SelectTest from './components/selectTest';
import MultipleInputs from './components/multipleInputs';
import Calculator from './components/lifting-state-up/calulator';

function App() {
  return (
    <div>
      <Clock /> <br/>
      <FormTest />
      <SelectTest />
      <MultipleInputs />
      <br />
      <Calculator />
    </div>
  );
}

export default App;
