import React, { useState } from 'react';
import MemberCard from './MemberCard';

function Form({props}) {

  const changeHandlerName = event => {
    props.setTeam({ ...props.team, [event.target.name]: event.target.value });
  };

  const changeHandlerEmail = event => {
    props.setTeam({ ...props.team, [event.target.email]: event.target.value });
  };

  const changeHandlerRole = event => {
    props.setTeam({ ...props.team, [event.target.role]: event.target.value });
  };

  const handleSubmit = event => {
    event.preventDefault();
    console.log(props.name);
  };

  return (
    <div>
    <form onSubmit={event => handleSubmit(event)}>
      <label>
        Name:
        <input type="text" id="name" value={props.team.name} 
        onChange={changeHandlerName} />
      </label>
      <label>
        Email:
        <input type="text" id="email" value={props.team.email} 
        onChange={changeHandlerEmail} />
      </label>
      <label>
        Role:
        <input type="text" id="role" value={props.team.role} 
        onChange={changeHandlerRole} />
      </label>
      <button>Submit!</button>
    </form>
  </div>
  )
}

export default Form;