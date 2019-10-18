import React from 'react';
import checked from '../App.css'


const NewTask = (props) => {
    const className = props.flag ? 'checked' : '';
    return (
        <li
            className={className}
            onClick={props.onToggleHandler}
        >
            {props.name}
        </li>

    )
};

export default NewTask