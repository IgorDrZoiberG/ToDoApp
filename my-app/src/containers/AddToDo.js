import React from 'react';
import '../App.css'

const AddToDo = ({addToDo}) => {
    return (
        <input type="text"
               placeholder='Введите новую задачу'
               onKeyDown={e => {
                   if (e.keyCode === 13 && e.target.value.length !== 0) {
                       addToDo(e.target.value);
                       e.target.value = '';
                   }
               }}
        />
    )

};

export default AddToDo;