/**
 * Created by 1004w455 on 2016. 7. 26..
 */
import React, {Component} from 'react';

import List from './List';

import './style.css';

class Todo extends Component {
    constructor() {
        super();
        this.handleKeyUp = this.handleKeyUp.bind(this);
        this.removeTodo = this.removeTodo.bind(this);
        this.handleClear = this.handleClear.bind(this);
        this.state = {
            todoList: [],
            doneList: [],
            count: 0
        };
    }

    handleKeyUp(e) {
        const str = e.target.value;
        if (e.key === 'Enter' && str !== '') {
            this.addTodo(str);
            console.log(`${str} 입력하였습니다.`);
            e.target.value = '';
        }
    }

    addTodo(str) {
        this.state.todoList.push(
            <List key={this.state.count} name={str} idx={this.state.count} remove={this.removeTodo}/>
        );
        this.setState({
            todoList: this.state.todoList,
            count: this.state.count + 1
        });
    }

    removeTodo(idx) {
        let doneList = this.state.doneList;
        doneList.push(this.state.todoList.filter(e => e.props.idx === idx));
        this.setState({
            todoList: this.state.todoList.filter(e => e.props.idx !== idx),
            doneList: doneList
        });
    }

    handleClear() {
        this.setState({
            doneList: []
        });
    }

    render() {
        return (
            <div className="todo">
                <div className="wrap">
                    <p>TODO</p>
                    입력: <input type="text" onKeyUp={this.handleKeyUp}/>
                    <div>
                        {this.state.todoList}
                    </div>
                </div>
                <div className="wrap">
                    <p>DONE</p>
                    <button type="button" onClick={this.handleClear}>clear</button>
                    <div>
                        {this.state.doneList}
                    </div>
                </div>
            </div>
        )
    }
}

export default Todo;
