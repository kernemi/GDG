import React from 'react';
import PropTypes from 'prop-types';
import './index.css';

function UserCard({ name, email, age, color }) {
  return (
    <div className="user-card" style={{ background: color || '' }}>
      <h2>{name}</h2>
      <p><strong>Email:</strong> {email}</p>
      <p><strong>Age:</strong> {age}</p>
    </div>
  );
}

UserCard.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  age: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  color: PropTypes.string,
};

export default UserCard;
