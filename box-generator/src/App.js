import { useState } from 'react';
import './App.css';
import BoxGen from './components/boxGenerator';
import Display from './components/Display';

function App() {
  // (box list) array of box objects
  const [boxList, setBoxList] = useState([])
  return (
    <div className="App">
      <BoxGen boxList = { boxList } setBoxList = { setBoxList }/>
      <Display boxList = { boxList }/>
    </div>
  );
}

export default App;
