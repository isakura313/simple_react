import React from 'react';
import './Welcome.css';
 // функциональный компонент
 // props = свойства объекта
 let cssProperty = {
     color: "red",
     fontSize: "60px",
     textTransform: "uppercase"
 }
 
function Welcome(props){
    return <h1 style={cssProperty} > Привет, {props.name}</h1> 
}

export default Welcome;
