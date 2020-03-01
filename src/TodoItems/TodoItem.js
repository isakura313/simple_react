import React, {Component} from 'react'

// работаю над view нашимх маленьких компонентов


class TodoItem extends Component{
    createTasks = item => {
        return (
            <div className="panel-block">
            <button key={item.key} className="button" > 
                 {item.text}</button>
                 <button onClick={() =>
                    this.props.deleteItem(item.key)} className="button is-danger" > Удали меня</button>
                    </div>
            
        )
    }
    render(){
        const todoEntries = this.props.entries
        const listItems = todoEntries.map(this.createTasks)
        return <div className="columns is-centered">
        <ul className="menu-list column is-half"> {listItems} </ul></div>
    }
}


export default TodoItem;