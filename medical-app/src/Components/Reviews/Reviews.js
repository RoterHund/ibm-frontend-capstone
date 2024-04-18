// Reviews.js
import React, { useState, useEffect } from 'react';
import Popup from 'reactjs-popup';
import GiveReviews from './GiveReviews/ReviewForm';
import './Reviews.css';

const Reviews = () => {
  // Sample data array
  const data = [
    { name: 'John', age: 30 },
    { name: 'Jane', age: 25 },
    { name: 'Doe', age: 40 }
  ];

  const [showModal, setShowModal] = useState(false);
  const [selectedDoctor, setSelectedDoctor] = useState(null);

  const [reviews, setReviews] = useState([]);
      // Check if appointment data exists in localStorage
      useEffect(() => {
        const storedReviews = {};
        data.forEach(doctor => {
          const storedReview = JSON.parse(localStorage.getItem(`ratingsData_${doctor.name}`));
          if (storedReview) {
            storedReviews[doctor.name] = storedReview;
          }
        });
        setReviews(storedReviews);
      }, []); // Empty dependency array to run the effect only once on component mount
    
      console.log("stored reviews: ", reviews);

  const handleFormSubmit = (formData) => {
    localStorage.setItem(`ratingsData_${selectedDoctor.name}`, JSON.stringify(formData));
    setShowModal(false);
    window.location.reload();
  };

  const handleFeedbackClick = (doctor) => {
    setSelectedDoctor(doctor);
    setShowModal(true);
  };

  return (
    <div className="reviews">
      <table>
        <thead>
          <tr>
            <th>Serial Number</th>
            <th>Doctor Name</th>
            <th>Doctor Age</th>
            <th>Provide Feedback</th>
            <th>Review</th>
          </tr>
        </thead>
        <tbody>
          {data.map((doctor, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{doctor.name}</td>
              <td>{doctor.age}</td>
              <td>
                <button onClick={() => handleFeedbackClick(doctor)}>Click Here</button>
              </td>
              <td>storedReviews[doctor.name].review</td>
            </tr>
          ))}
        </tbody>
      </table>
      <Popup
        trigger={null}
        modal
        open={showModal}
        onClose={() => setShowModal(false)}
      >
        {(close) => <GiveReviews doctor={selectedDoctor} onSubmit={handleFormSubmit} closeModal={close} />}
      </Popup>
    </div>
  );
};

export default Reviews;
