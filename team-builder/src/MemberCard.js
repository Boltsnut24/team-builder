import React from "react";

function MemberCard({member}){
  console.log({member})
  return(
    <div>
      <h2>{member.name}</h2>
      <h3>{member.email}</h3>
      <h3>{member.role}</h3>
    </div>
  )
}

export default MemberCard;