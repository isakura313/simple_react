import TodoList from './TodoList';
import React, {Component} from 'react';
class App extends Component{
    constructor(){
        super()
        this.state ={
            items: [],
            currentItem: {text:"", key:""}
        }
    }
    handleInput = e =>{
        console.log("It's input")
    }
    addItem = () =>{

        console.log("hello Add Item")
    }
    render(){
        return(
            <div className="App">
              <h1> Hello </h1>
              <TodoList addItem={this.addItem} />
            </div>
        )
    }
}
export default App