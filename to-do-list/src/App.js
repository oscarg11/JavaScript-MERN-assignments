import { useState } from 'react';
import './App.css';
import TaskCreator from './components/TaskCreator';
import Display from './components/Display';

function App() {
        //getter, setter
  const [task, setTask] = useState('')
  // (list of tasks) array of task objects
  const [todoList, setTodoList] = useState([])
  return (
    <div className="App">
      < TaskCreator todoList = { todoList} setTodoList = { setTodoList } task = { task} setTask = { setTask}/>
      < Display todoList={ todoList } setTodoList = { setTodoList } task = { task} setTask = { setTask}/>
    </div>
  );
}

export default App;
