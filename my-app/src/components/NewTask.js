import React from 'react';
import checked from '../App.css'


const NewTask = (props) => {
    const classes = props.checked ? 'check' : null;
  return (
      <div className='todoList' >
          <li
              className={classes}
              onClick={ props.toggleFlagHandler}
          >
              {props.name}
          </li>

          <i
              className="fa fa-trash-o delete"
              aria-hidden="true"
              onClick={ props.deleteItemHandler}
          >

          </i>

      </div>
  )
};

export default NewTask