import React, { Component } from 'react';
import Person from './Person/Person'

class Persons extends Component {
  // CREATION METHODS
  constructor(props) {
    super(props)
    console.log('[Persons.js] Inside Constructor', props)
  }
  
  componentWillMount() {
    console.log('[Persons.js] Inside componentWillMount()')
  }

  componentDidMount() {
    console.log('[Persons.js] Inside componentDidMount()')
  }

  // UPDATE METHODS
  componentWillReceiveProps(nextProps) {
    console.log('[UPDATE Persons.js] Inside componentWillReceiveProps', nextProps)
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('[UPDATE Persons.js] inside shouldComponentUpdate', nextProps, nextState)
    // //Checks to see if nextprop is different from current prop
    return nextProps.persons !== this.props.persons || 
    nextProps.changed !== this.props.changed || 
    nextProps.clicked !== this.props.clicked;
    // return true;
  }

  componentWillUpdate(nextProps, nextState) {
    console.log('[Update Persons.js] inside componentWillUpdate', nextProps, nextState)
  }

  componentDidUpdate() {
    console.log('[Update Persons.js] inside componentDidUpdate')
  }

  render() {
    console.log('[Persons.js] Inside render()')
    return this.props.persons.map((person, index) => {
          return <Person
              click={() => this.props.clicked(index)} 
              name={person.name} 
              age={person.age}
              key={person.id}
              changed={(event) => this.props.changed(event, person.id)} />
        });
  }
} 

export default Persons;