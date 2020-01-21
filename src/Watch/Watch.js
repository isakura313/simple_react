import React from 'react';

 // функциональный компонент
 // props = свойства объекта

 
class Watch extends React.Component{
    constructor(props) {
        super(props);
        this.state = {date: new Date()};
      }

      componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000);
    }
  
    componentWillUnmount() {
        clearInterval(this.timerID);
    }
    tick() {
        this.setState({
          date: new Date()
        });
      }
  

    render(){
    return (
        <div>
            <h1> Настоящее время по Москве</h1>
            <h3> {this.state.date.toLocaleTimeString()} </h3>
        </div>
    )
    }
}

export default Watch;
