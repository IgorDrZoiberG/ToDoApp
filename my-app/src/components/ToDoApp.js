import React from 'react';
import ToDoList from "../containers/ToDoList";
import AddToDo from "../containers/AddToDo";
import {addToDo, toggleFlag, deleteItem} from "../actions/todoAC";
import {connect} from "react-redux";


const ToDoApp = ({addToDo, toggleFlag, deleteItem, todos}) => {
    return (
        <div className='page'>
            <div className='body'>
                <ToDoList
                    todos={todos}
                    toggleFlag={toggleFlag}
                    deleteItem={deleteItem}
                />
                <AddToDo addToDo={addToDo}/>
            </div>
        </div>
    )

};

const mapStateToProps = state => {
    return {
        todos: state
    }
};

const mapDispatchToProps = dispatch => {
    return {
        addToDo: (name) => dispatch(addToDo(name)),
        toggleFlag: (id) => dispatch(toggleFlag(id)),
        deleteItem: (index) => dispatch(deleteItem(index)),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ToDoApp);