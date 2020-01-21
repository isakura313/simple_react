import React, {Component} from 'react'


// работаю над view нашимх маленьких компонентов
class TodoItem extends Component{
    createTasks(item){
        return <li key={item.key}> {item.text}</li>
    }
    render(){
        const todoEntries = this.props.entries
        const listItems = todoEntries.map(this.createTasks)

        return <ul> {listItems} </ul>
    }
}


export default TodoItem;