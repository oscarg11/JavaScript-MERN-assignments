import './App.css';
import { BrowserRouter, Routes, Route  } from 'react-router-dom'
import Home from './components/Home';
import DisplayNums from './components/DisplayParams';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Routes>
        {/* home page */}
        <Route path="/" element={<Home/>}/>

        {/* displays the number or word */}
        <Route path="/:numOrword" element={<DisplayNums/>}/>

        {/* displays a word with any text color and background color */}
        <Route path=":numOrword/:color/:backgroundCol" element={ <DisplayNums/> }/>
        
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
