import React, { useState } from 'react';
import './App.css';
import MemberCard from './MemberCard.js';
import Form from './Form.js';

function App() {
  const [team, setTeam] = useState([])
  const [memberToEdit, setMemberToEdit] = useState({})

  const editMember = event => {
    setMemberToEdit(event.target.value)
  }

  return (
    <div>
      {
        team.map((member, index) => {
          return (
            <div>
              <MemberCard key={index} member={member} />
              <button onClick={editMember}>Edit</button>
            </div>
          )
        })
      }
      <Form setTeam={setTeam} team={team}/>
    </div>
  );
}

export default App;
