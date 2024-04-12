import React, { useState } from 'react';

function GiveReviews() {
  const [showForm, setShowForm] = useState(false);
  const [submittedMessage, setSubmittedMessage] = useState('');
  const [showWarning, setShowWarning] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    review: '',
    rating: 0 // Assuming you have a rating field in your form
  });

  const handleButtonClick = () => {
    setShowForm(true);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.review && formData.rating > 0) {
      setSubmittedMessage(JSON.stringify(formData)); // Convert object to string
      setShowWarning(false);
    } else {
      setShowWarning(true);
    }
  };

  return (
    <div>
      <h2>Form with Message</h2>
      {!showForm ? (
        <button onClick={handleButtonClick}>Open Form</button>
      ) : (
        <form onSubmit={handleSubmit}>
          <h2>Give Your Feedback</h2>
          {showWarning && <p className="warning">Please fill out all fields.</p>}
          <div>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} />
          </div>
          <div>
            <label htmlFor="review">Review:</label>
            <textarea id="review" name="review" value={formData.review} onChange={handleChange} />
          </div>
          <button type="submit">Submit</button>
        </form>
      )}
      {submittedMessage && (
        <div>
          <h3>Submitted Message:</h3>
          <p>{submittedMessage}</p>
        </div>
      )}
    </div>
  );
}

export default GiveReviews;
