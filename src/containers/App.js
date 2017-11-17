import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../Cockpit/Cockpit'

class App extends Component {

  constructor(props) {
    super(props)
    console.log('[app.js] Inside Constructor', props)
    // this is the same as declaring state below, but an older method
    // this.state = {
    //   persons: [
    //     { id: '1213', name: 'Max', age: 28 },
    //     { id: 'awd', name: 'Manu', age: 29 },
    //     { id: 'awaa', name: 'Stephanie', age: 26 }
    //   ],
    //   otherState: 'some other value',
    //   showPersons: false
    // }
  }
  
  componentWillMount() {
    console.log('[app.js] Inside componentWillMount()')
  }

  componentDidMount() {
    console.log('[app.js] Inside componentDidMount()')
  }
  state = {
    persons: [
      { id: '1213', name: 'Max', age: 28 },
      { id: 'awd', name: 'Manu', age: 29 },
      { id: 'awaa', name: 'Stephanie', age: 26 }
    ],
    otherState: 'some other value',
    showPersons: false
  }

  deletePersonHandler = (personIndex) => {
    //.slice copies and returns a new array
    // const persons = this.state.persons.slice();
    //these are equivalent
    const persons = [...this.state.persons]
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });
    //DO NOT MUTATE ORIGINAL STATE, USE REST OPERATOR
    const person = {
      ...this.state.persons[personIndex]
    };
    
    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({    
      persons: persons
    })    
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow})
  }

  render() {
    console.log('[app.js] inside render()')
    let persons = null;
    if (this.state.showPersons) {
      persons = <Persons persons={this.state.persons}
                  clicked={this.deletePersonHandler}
                  changed={this.nameChangedHandler} />;
    }

    return (
        <div className={classes.App}>
          <Cockpit
            appTitle={this.props.title}
            persons={this.state.persons}
            showPersons={this.state.showPersons}
            clicked={this.togglePersonsHandler} />
          {persons}
        </div>
    );
  }
}

export default App;
