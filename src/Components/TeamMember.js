import React from "react";

export default function TeamMember(props) {
  const { details } = props;

  if (!details) {
    return <h3>Details</h3>;
  }

  return (
    <div className="team-member">
      <h2>{details.username}</h2>
      <p>Email: {details.email}</p>
      <p>Role: {details.role}</p>
    </div>
  );
}
