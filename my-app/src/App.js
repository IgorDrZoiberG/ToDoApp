import React from 'react';
import NewTask from "./components/NewTask";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tasks: [
                {name: 'buy bread', flag: true},
                {name: 'buy milk', flag: false},
                {name: 'buy sugar', flag: true}
            ],
            newTaskText: ''
        };
    }

    onToggleHandler = (i) => {
        const tasks = this.state.tasks.map((task, index) => {
            if (i === index) {
                return {
                    name: task.name,
                    flag: !task.flag
                }
            }
            else return task
        });
        this.setState({tasks})
    };
    addTaskHandler = () => {
        const tasks = this.state.tasks;
        tasks.push({
            name: this.state.newTaskText,
            flag: false
        });
        this.setState({
            tasks,
            newTaskText: ''
        })
    };

    render() {
        return (
            <>
                <h1>Todo List</h1>
            <ol>
                {this.state.tasks.map((task, index) => {
                    return (
                     <NewTask
                     key = {index}
                     name = {task.name}
                     flag = {task.flag}
                     onToggleHandler = {this.onToggleHandler.bind(this,index)}
                     />
                    )
                })
                }
            </ol>
                <input
                    type='text'
                    placeholder='new task'
                    onChange = {ev=>this.setState({newTaskText: ev.target.value })}
                    value = {this.state.newTaskText}
                    onKeyUp={ev=>{
                        if (ev.keyCode === 13) {
                            this.addTaskHandler();
                        }
                    }}
                />
                </>

        )
    }
}

export default App;