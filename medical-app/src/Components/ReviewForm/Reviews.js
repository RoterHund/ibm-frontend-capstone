import React, { useState } from 'react';
import Popup from 'reactjs-popup';
import GiveReviews from './GiveReviews';
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

  const handleFeedbackClick = (doctor) => {
    setSelectedDoctor(doctor);
    setShowModal(true);
  };

  return (
    <div className="reviews">
      <table>
        <thead>
          <tr>
            <th>Serial Number</th> {/* Table header for row number */}
            <th>Doctor Name</th>
            <th>Doctor Age</th>
            <th>Provide Feedback</th>
          </tr>
        </thead>
        <tbody>
          {data.map((doctor, index) => (
            <tr key={index}>
              <td>{index + 1}</td> {/* Display row number */}
              <td>{doctor.name}</td>
              <td>{doctor.age}</td>
              <td>
                <button onClick={() => handleFeedbackClick(doctor)}>Click Here</button>
              </td>
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
        {(close) => <GiveReviews doctor={selectedDoctor} closeModal={close} />}
      </Popup>
    </div>
  );
};

export default Reviews;
