import React from 'react';
import './App.css';
import NewTask from "./components/NewTask";


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
        const todo = this.state.todos.filter((item, index) => index !== id);
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


    createToDoItemHandler = (e) => {
        const todos = this.state.todos;
        todos.push({
            name: this.state.value,
            checked: false
        });
        e.target.value = null;
        this.setState({todos})
    };


    render() {
        return (
            <div className='main'>
                <div className='tasks'>
                    <h1>Задачи на сегодня</h1>
                    {this.state.todos.map((item, index) => {

                        return (
                            <NewTask
                                key={index}
                                name={item.name}
                                toggleFlagHandler={this.toggleFlagHandler.bind(this, index)}
                                deleteItemHandler={this.deleteItemHandler.bind(this, index)}
                                checked={item.checked}

                            />
                        )
                    })}
                    <input type="text"
                           placeholder='Введите новую задачу'
                           onChange={(e) => this.setState({value: e.target.value})}
                           onKeyDown={(e) => {
                               if (e.keyCode === 13 && e.target.value.length !== 0) {
                                   this.createToDoItemHandler(e)
                               }
                           }}
                    />
                </div>
            </div>
        )
    }
}


export default App;