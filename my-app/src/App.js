import React from 'react';
import './App.css'

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            todos: [
                {name: 'Полететь на Марс', checked: false},
                {name: 'Полететь на Луну', checked: true},
                {name: 'Полететь на Солнце', checked: false},
            ],
            value: null
        };
    }
    deleteItemHandler = (id) => {
        console.log(id)
        const todo = this.state.todos.filter(( item ,index) => index !== id);
        this.setState({todos: [...todo]});
        console.log(todo)


    };

    toggleFlagHandler = (id) => {
        const todos = this.state.todos.map((item, index) => {
            if (id === index) {
                return {
                    name: item.name,
                    checked: !item.checked
                }
            } else return item
        });
        this.setState({todos})
    };


    createToDoItem = (e) => {
        const todos = this.state.todos;
        todos.push({
            name: this.state.value,
            checked: false
        });
        e.target.value = null;
        this.setState({todos})
    };

    addToDoItem = () => {

    };

    render() {
        return (
            <div className='main'>
                <div className='tasks'>
                    <h1>ToDo List</h1>
                    {this.state.todos.map((item, index) => {
                       const classes = item.checked ? 'check' : null;
                        return (
                            <div className='qwerty'>
                            <li
                                key={index}
                                className={classes}
                                // onClick={()=> this.toggleFlagHandler(index)}
                            >

                                {item.name}



                            </li>
                            <span
                        className='delete'
                        onClick={()=>this.deleteItemHandler(index)}
                    >
                        x</span>
                            </div>

                        )
                    })}
                    <input type="text"
                           placeholder='Введите новую задачу'
                           onChange={(e) => this.setState({value: e.target.value})}
                           onKeyDown={(e) => {
                               if (e.keyCode === 13 && e.target.value.length !== 0) {
                                   this.createToDoItem(e)
                               }
                           }}
                    />
                    <button className='btn'
                            onClick={() => this.addToDoItem()}
                    >
                        Добавить
                    </button>


                </div>

            </div>
        )
    }
}


export default App;