import { v4 as uuidv4 } from 'uuid'; // generates a random id 

const TaskCreator= ({task, setTask,todoList, setTodoList}) => {
  let taskId = uuidv4();
  
//  Create a new todo object
  const onSubmitHandler = (e) => {
    // prevent the default refresh of the browser to keep our state from being reset
    e.preventDefault();
    console.log(`TaskCreator: ${JSON.stringify(task)}`)
    let newTaskObj = {
      id : taskId,
      taskName: task,
      completed: false
    }
    console.log("NEW TASK ===>", newTaskObj)
    // setTodoList and pass in a new array containing all current tasks plus a new one(task)
    setTodoList([...todoList, newTaskObj])
    // clears state and input field value
    setTask('')
  }

  return (
    // new task form
    <div>
      <form action="" className="form col-md-4 mx-auto" onSubmit={ onSubmitHandler}>
          <div className='mb-3'>
            <label htmlFor="" className="form-label">Add a Task</label>
            <input type="text" className="form-control" name="task" onChange={(e) => setTask(e.target.value)} value={task} />
            <div>
                {/* button */}
                <button className="btn btn-primary mt-3">Add</button>
            </div>
          </div>
      </form>
    </div>
  )

}

export default TaskCreator