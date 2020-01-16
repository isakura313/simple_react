import React from 'react';
import './Welcome.css';
 // функциональный компонент
 // props = свойства объекта
function Welcome(props){
    return <h1> Привет, {props.name}</h1> 
}

export default Welcome;
