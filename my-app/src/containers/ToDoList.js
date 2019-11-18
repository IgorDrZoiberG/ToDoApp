import React from 'react';


const ToDoList = ({todos, toggleFlag, deleteItem}) => {

    return (
        <>
            <h1>Задачи на сегодня</h1>
            {
                todos.map((todos, index) => {

                    const classes = todos.checked ? 'check' : null;
                    return (
                        <div
                            className='todoList'
                            key={todos.id}>
                            <li
                                className={classes}
                                onClick={() => toggleFlag(todos.id)}

                            >
                                {todos.name}
                            </li>

                            <i
                                className='fa fa-trash-o delete'
                                aria-hidden='true'
                                onClick={() => deleteItem(index)}
                            >

                            </i>

                        </div>
                    )
                })}
        </>


    )

};

export default ToDoList;