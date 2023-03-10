import React from 'react'

const Display = ({task, setTask,todoList, setTodoList}) => {

  console.log("TODO LIST",todoList)

  // DELETE A TASK - filters out the task id that matches the selected input
  // and keeps the rest of the task items in a new array
  const deleteTask = (deletedTaskByID) => {
    console.log(deletedTaskByID)
    const filteredTasks = todoList.filter((taskItem) => taskItem.id !== deletedTaskByID)
    console.log("NEW LIST ===>", filteredTasks)
    setTodoList(filteredTasks)
  }
  return (
    <div>
    {
      todoList.map((oneTask, i) => (
        <div key={i}>
          <p>{ oneTask.taskName}</p>
          {/* delete task */}
          <button className="btn btn-danger mt-3" onClick={(e) => deleteTask(oneTask.id)}>Delete</button>
        </div>

        )
      )
    }
  </div>
  )
}

export default Display