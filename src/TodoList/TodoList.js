import React, {Component} from 'react';
import Welcome from "./../Welcome"

// компонента на классах

class TodoList extends Component{
    render() {
        return(
            <div className="todoListMain">
                <Welcome name="Pavel" />
                    <div className="header">
                        <form onSubmit={this.props.addItem}>
                            <input placeholder="Task"/>
                            <button type="submit"> Add Task</button>
                        </form>
                    </div>
                </div>


        )
    }
}


export default TodoList
