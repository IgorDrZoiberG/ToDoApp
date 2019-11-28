import React from 'react';


const ToDoList = ({todos, toggleFlag, deleteItem}) => {

    return (
        <>
             <div className= 'title'><h1>Задачи на сегодня</h1></div>
            {
                todos.map((todos, index) => {
                    const toggleCheck = todos.checked ? 'check' : null;
                    return (
                        <div
                            className='list'
                            key={todos.id}>
                            <div className= 'list__item'>
                            <li
                                className={toggleCheck}
                                onClick={() => toggleFlag(todos.id)}
                            >
                                {todos.name}
                            </li>
                            </div>

                            <i
                                className='fa fa-trash-o list__deleteItem'
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