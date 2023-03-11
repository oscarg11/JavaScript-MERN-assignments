import React from 'react'

const Display = ({todoList, setTodoList}) => {

  console.log("TODO LIST",todoList)

  //( DELETE A TASK) - filters out the task id that matches the selected input
  // and keeps the rest of the task items in a new array
  const deleteTask = (deletedTaskByID) => {
    console.log(deletedTaskByID)
    const filteredTasks = todoList.filter((taskItem) => taskItem.id !== deletedTaskByID)
    console.log("NEW LIST ===>", filteredTasks)
    setTodoList(filteredTasks)
  }

  // ( CHECK OFF TASK FUNCTIONALITY ) - only the selcted index of our task list is set to true(checked off)
  const handleCheckBox = (checkedIdx) => { 
    const newTaskList = todoList.map((oneTask, i) => {
      // if true the task's completed property is reversed and set to true
      if (checkedIdx === i){
        oneTask.completed = !oneTask.completed
      }
      return oneTask //returns all unchanged task objects
    })
    setTodoList(newTaskList)
  }

  // (DISPLAY TASKS)
  return (
    <div>
    {
    todoList.map((oneTask, i) => (
        <div key={i}>
          <h1 style={ //if task is completed line-through style is applied
            oneTask.completed?
            {textDecorationLine: 'line-through',display:"inline-block", marginRight: "10px"}
            :{display:"inline-block", marginRight: "10px" } //if false (not checked)
          }>
            { oneTask.taskName}
          </h1>
            <input style={{marginRight: "10px"}} checked={oneTask.completed} type="checkbox" onChange={(e) => handleCheckBox(i)}/>
          {/* delete task */}
            <button style={{marginBottom: "20px"}}className="btn btn-danger mt-3" onClick={(e) => deleteTask(oneTask.id)}>Delete</button>
        </div>

        )
      )
    }
  </div>
  )
}

export default Display