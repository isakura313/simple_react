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
        <div className ="columns is-centered">
        <div className="column is-half">
            <h1 className="is-size-3 has-text-centered"> Настоящее время по Москве</h1>
            <h3 className="subtitle is-size-5 has-text-info has-text-centered"> {this.state.date.toLocaleTimeString()} </h3>
        </div>
        </div>
    )
    }
}

export default Watch;
