import TodoList from './TodoList/TodoList';
import React, {Component} from 'react';
class App extends Component{
    render(){
        return(
            <div className="App">
              <h1> Hello </h1>
              <TodoList />
            </div>
        )
    }
}
export default App