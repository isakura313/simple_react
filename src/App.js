import TodoList from './TodoList';
import React, {Component} from 'react';
class App extends Component{
    constructor(){
        super()
        this.state ={
            items: [],
            currentItem: {text:" asd", key:""}
        }
    }
    handleInput = e =>{
        const itemText = e.target.value
        const currentItem = {text:itemText, key: Date.now() }
        this.setState({
            currentItem,
        })
    }
    addItem = e =>{
        e.preventDefault()
        const newItem = this.state.currentItem
        if(newItem.text !==''){
            console.log(newItem)
            const items = [...this.state.items, newItem]
            this.setState({
                items: items,
                currentItem: {text: '', key:''}
            })
        }
    }
    render(){
        return(
            <div className="App">
              <TodoList 
                    addItem={this.addItem}
                    inputElement={this.inputElement}
                    handleInput={this.handleInput}
                    currentItem={this.state.currentItem}
                    />
            </div>
        )
    }
}
export default App