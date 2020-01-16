import React from 'react';
import './Welcome.css';

let props = {
    name: "Руслан"
}

function Welcome(props){
    return <h1> Привет, {props.name}</h1> 
}

export default Welcome;
