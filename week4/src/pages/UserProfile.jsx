import React from "react";
import { useParams } from "react-router-dom";

function UserProfile() {
  const { id } = useParams();

  return (
    <div>
      <h1>User Profile</h1>
      <p>User ID: {21}</p>
    </div>
  );
}

export default UserProfile;
