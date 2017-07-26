import React, { Component } from 'react';

class ContactList extends React.Component{

  render() {
    const people = this.props.contacts

    //creates Element with JSX
    return <ol>
      {people.map(person => (
        <li key={person.name}>{person.name}</li>
      ))}
    </ol>
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <ContactList contacts={[
          { name : 'Michael'},
          { name : 'Moon'},
          { name : 'Nelson'}
        ]}/>
        <ContactList contacts={[
          { name : 'Amanda'},
          { name : 'Jeff'},
          { name : 'Mariane'}
        ]}/>
      </div>
    );
  }
}

export default App;
