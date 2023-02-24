import { useState } from 'react';
import './App.css';
import Form from './components/Form';
import Display from './components/Display';
function App() {
  // store instances of person objects in array
  const [personList, setPersonList] = useState([])
  return (
    <div className="App">
      <Form personList ={personList} setPersonList = {setPersonList}/>
      <Display personList = {personList}/>
    </div>
  );
}

export default App;
