import React from 'react'

/*
todos = [
    {
        title: "Go to gym",
        description: "You need to go to the gym",
    }
    ]
*/

const Todos = ({ todos }) => {
  return (
    <div>
        {
            todos.map(function(todo) {
                return (
                    <div>
                        <h1>{todo.title}</h1>
                        <p>{todo.description}</p>
                        <button>{todo.completed === true ? "Completed" : "Mark as Completed"}</button>
                    </div>
                )
            })
        }
    </div>
  )
}

export default Todos
