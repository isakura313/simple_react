import React, {Component} from 'react';

import Welcome from "./../Welcome"
import './TodoList.css';
// компонента на классах

class TodoList extends Component{
    render() {
        return(
            <div className="todoList">
                <Welcome name="Pavel" />
                    <div className="todoList">
                        <form onSubmit={this.props.addItem} className="todoList__form">
                            <input placeholder="Task" className="todoList__input"
                                    ref={this.props.inputElement}
                                    value = {this.props.currentItem.text}
                                    onChange = {this.props.handleInput}
                                    />
                            <button type="submit" className="todoList__submit"> Add Task</button>
                        </form>
                    </div>
                   
                </div>
        )
    }
}


export default TodoList
