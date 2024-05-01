import React from 'react'
import { useState, useEffect } from 'react';

const details = ({toggleDetails}) => {
  const [saveData, setSavedData] = useState({});
  useEffect(() => {
    const savedFormData = localStorage.getItem('formData');
    if (savedFormData) {
      const parsedData = JSON.parse(savedFormData);
      setSavedData(parsedData);
    }
  }, []);
  return (
<main>
  <h1>Saved Data</h1>
  <div className="details">
    <p>
     <b>First Name:</b> <span>{saveData.Firstname}</span>
    </p>
    <p>
      <b>Last Name:</b> <span>{saveData.Lastname}</span>
    </p>
    <p>
     <b>Phone:</b> <span>{saveData.number}</span>
    </p>
    <p>
    <b>Email:</b> <span>{saveData.email}</span>
    </p>
    <p>
    <b>link:</b> <span>{saveData.link}</span>
    </p>
  </div>
  <div className="back" onClick={toggleDetails}>Back</div>
</main>
  )
}

export default details
