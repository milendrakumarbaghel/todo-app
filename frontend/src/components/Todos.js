import React from 'react';

const Todos = ({ todos }) => {
    return (
        <div>
            {todos.map(todo => (
                <div key={todo._id}>
                    <h1>{todo.title}</h1>
                    <p>{todo.description}</p>
                    <button onClick={async () => {
                        try {
                            const res = await fetch('http://localhost:3030/completed', {
                                method: 'PUT',
                                body: JSON.stringify({ id: todo._id }),
                                headers: { 'Content-Type': 'application/json' }
                            });

                            if (!res.ok) throw new Error('Network response was not ok');

                            const data = await res.json();
                            alert(JSON.stringify(data));
                            console.log(data);
                        } catch (error) {
                            console.error('Fetch error:', error);
                            alert('Failed to mark as completed. Please try again later.');
                        }
                    }}>
                        {todo.completed === true ? "Completed" : "Mark as Completed"}
                    </button>
                </div>
            ))}
        </div>
    );
};

export default Todos;
