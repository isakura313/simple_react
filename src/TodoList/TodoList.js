import React, {Component} from 'react';

import Welcome from "./../Welcome"


class TodoList extends Component{
    render() {
        return(
            <div className="сolumns is-centered">
                <Welcome name="UserName" />
                    <div className="columns is-centered">
                        <form onSubmit={this.props.addItem} className="column is-half">
                            <div class="field">
                            <div class="control">
                            <input placeholder="Task" className="input is-primary"
                                    ref={this.props.inputElement}
                                    value = {this.props.currentItem.text}
                                    onChange = {this.props.handleInput}
                                    /></div>
                                    </div>
                            <button type="submit" className="button button-info"> Add Task</button>
                        </form>
                    </div>
                   
                </div>
        )
    }
}


export default TodoList
