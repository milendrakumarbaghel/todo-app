import React from 'react'
import { useState } from 'react';

const CreateTodo = () => {

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

  return (
    <div>
        <input type="text" onChange={function(e) {
            setTitle(e.target.value);
        }} placeholder="title" /> <br />
        <input type="text" onChange={function(e) {
            setDescription(e.target.value);
        }} placeholder="description" /> <br />

        <button onClick={() => {
            fetch('http://localhost:3030/todo', {
                method: 'POST',
                body: JSON.stringify({
                    title: title,
                    description: description
                }),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .then(async function(res) {
                const data = await res.json();
                console.log(data);
            })
        }}>Add a Todo</button>
    </div>
  )
}

export default CreateTodo
