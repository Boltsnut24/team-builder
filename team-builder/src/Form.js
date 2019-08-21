import React, { useState } from 'react';
import MemberCard from './MemberCard';

function Form(props) {
   const defaultState = [{
    name: '',
    email: '',
    role: '',
    id: ''
  }];
  const data = [
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
    
];
  const[state, setState] = useState(data)



  function handleChange(event){
    setState({
      ...state, 
      [event.target.name]:event.target.value
    })
  }

  function handleSubmit(event){
    event.preventDefault();
    props.setTeam([...props.team, state])
    setState(defaultState)
  }

  return (
    <div>
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" id="name" name='name' value={state.name} 
        onChange={handleChange} />
      </label>
      <label>
        Email:
        <input type="text" id="email" name='email' value={state.email} 
        onChange={handleChange} />
      </label>
      <label>
        Role:
        <input type="text" id="role" name='role' value={state.role} 
        onChange={handleChange} />
      </label>
      <button type="submit">Submit!</button>
    </form>
  </div>
  )
}

export default Form;