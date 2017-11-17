import React from 'react';
import classes from './Cockpit.css';
import Aux from '../HOC/Aux'

const Cockpit = (props) => {
    const assignedClasses = [];
    let btnClass = classes.Button;
    if (props.showPersons) {
      btnClass= [classes.Button, classes.Red].join(' ');
    }


    if (props.persons.length <= 2) {
      assignedClasses.push(classes.red);
    }
    if (props.persons.length <= 1) {
      assignedClasses.push(classes.bold);
    }


  return (
        <Aux>
          <h1>{props.appTitle}</h1>
          <p className={assignedClasses.join(' ')}>This is really working!</p>
          <button
            className = {btnClass} 
            onClick={props.clicked}>Toggle Persons</button>
        </Aux>
  )
}

export default Cockpit;