import React from 'react';
import ReactDOM from 'react-dom';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import {createStore} from "redux";
import ToDoApp from "./components/ToDoApp";
import todos from "./reducers/todos";


const store = createStore(todos);


ReactDOM.render(<ToDoApp store={store}/>, document.getElementById('root'));

