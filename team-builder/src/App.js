import React, { useState } from 'react';
import './App.css';
import Card from './components/Card.js';
import Form from './components/Form.js';
import { Route, Link } from 'react-router-dom';

function App() {
  const [team, setTeam] = useState([
      {
          name: 'Jeremy Brady',
          email: 'jeremy.brady702@gmail.com',
          role: 'TL',
          id: 1
      },
      {
          name: 'Benita',
          email: 'Benita@nomail.com',
          role: 'student',
          id: 2
      },
      {
          name: 'Brad',
          email: 'Brad@nomail.com',
          role: 'student',
          id: 3
      },
      {
          name: 'Ian',
          email: 'Ian@nomail.com',
          role: 'student',
          id: 4
      },
      {
          name: 'Julie',
          email: 'Julie@nomail.com',
          role: 'student',
          id: 5
      },
      {
          name: 'Nick',
          email: 'Nick@nomail.com',
          role: 'student',
          id: 6
      },
      {
          name: 'Rebecca',
          email: 'Rebecca@nomail.com',
          role: 'student',
          id: 7
      },
      {
          name: 'Zach',
          email: 'Zach@nomail.com',
          role: 'student',
          id: 8
      }
  ])
  const [memberToEdit, setMemberToEdit] = useState({})

  const addPerson = person => {
    setTeam([...team, {...person, id: Date.now()}]);
  };

  const editMember = event => {
    setMemberToEdit(event.target.value)
  }

  return (
    <div className="App">
      <Link to="/">Home</Link>
      <Link to="/add">Add Person</Link>
      <Route path="/add"
             render={props => <Form {...props}
                                    submitPerson={addPerson}
                                    buttonText="Add Person"
                              />}/>
      <Route exact path="/"
             render={props => team.map(person => <Card person={person} />) } />     
    </div>
  );
}


export default App;
