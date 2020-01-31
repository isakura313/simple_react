import React, {Component} from 'react'
import './TodoItem.css';


// работаю над view нашимх маленьких компонентов
let TodoItemCss = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
}


class TodoItem extends Component{
    createTasks = item => {
        return (
            <div style={TodoItemCss}>
            <li key={item.key} className="Todo_li" > 
                 {item.text}</li>
                 <button onClick={() =>
                    this.props.deleteItem(item.key)} className="button__todo" > Удали меня</button>
                 </div>
        )
    }
    render(){
        const todoEntries = this.props.entries
        const listItems = todoEntries.map(this.createTasks)

        return <ul> {listItems} </ul>
    }
}


export default TodoItem;