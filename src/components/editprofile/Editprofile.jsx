import React, { useState } from 'react';
import './editprofile.scss';

const EditProfileBox = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [user, setUser] = useState({
    profilePhoto: 'https://via.placeholder.com/150',
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@example.com',
    phone: '123-456-7890',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prev) => ({ ...prev, [name]: value }));
  };

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setUser((prev) => ({ ...prev, profilePhoto: reader.result }));
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="profile-box">
      <div className="header">
        <h2>Account Info</h2>
        <button onClick={() => setIsEditing((prev) => !prev)}>
          {isEditing ? 'Cancel' : 'Edit'}
        </button>
      </div>

      <div className="photo-section">
        <div className="photo-circle">
          <img src={user.profilePhoto} alt="Profile" />
        </div>
        {isEditing && (
          <input type="file" accept="image/*" onChange={handlePhotoChange} />
        )}
      </div>

      <div className="info-section">
        <label>
          First Name:
          <input
            type="text"
            name="firstName"
            value={user.firstName}
            onChange={handleChange}
            disabled={!isEditing}
          />
        </label>
        <label>
          Last Name:
          <input
            type="text"
            name="lastName"
            value={user.lastName}
            onChange={handleChange}
            disabled={!isEditing}
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={user.email}
            onChange={handleChange}
            disabled={!isEditing}
          />
        </label>
        <label>
          Phone:
          <input
            type="text"
            name="phone"
            value={user.phone}
            onChange={handleChange}
            disabled={!isEditing}
          />
        </label>
      </div>
    </div>
  );
};

export default EditProfileBox;