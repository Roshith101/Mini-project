import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './creatingfundraiser.css';

const CreateFundraiser = () => {
  const navigate = useNavigate();

  const [fundraiserData, setFundraiserData] = useState({
    image: null,
    title: '',
    description: '',
    goal: 0,
  });

  const handleChange = (e) => {
    setFundraiserData({
      ...fundraiserData,
      [e.target.name]: e.target.value,
    });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setFundraiserData({
      ...fundraiserData,
      image: file,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('title', fundraiserData.title);
    formData.append('description', fundraiserData.description);
    formData.append('goal', fundraiserData.goal);
    formData.append('image', fundraiserData.image); // No need to convert image to Blob
    

    // Convert the image to bytes before appending it to the formData
    if (fundraiserData.image) {
      const imageBlob = await getBlobFromImage(fundraiserData.image);
      formData.append('image', imageBlob, fundraiserData.image.name);
    }

    try {
      const response = await axios.post(('http://127.0.0.1:8080/fundraisers/createFundraiser'), formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      console.log('Fundraiser created:', response.data);
      setFundraiserData({
        title: '',
        description: '',
        goal: 0,
        image: null,
      });
      navigate.push('/');
    } catch (error) {
      console.error('Error creating fundraiser:', error);
    }
  };

  const getBlobFromImage = (image) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onloadend = () => {
        const blob = new Blob([reader.result], { type: image.type });
        resolve(blob);
      };
      reader.onerror = reject;
      reader.readAsArrayBuffer(image);
    });
  };
  
  return (
    <div className="create-fundraiser-container">
      <h1 className="create-fundraiser-title">Create Your Fundraiser</h1>
      <form className="create-fundraiser-form" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title" className="create-fundraiser-label">
            Title:
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={fundraiserData.title}
            onChange={handleChange}
            className="create-fundraiser-input"
          />
        </div>
        <div>
          <label htmlFor="description" className="create-fundraiser-label">
            Description:
          </label>
          <textarea
            id="description"
            name="description"
            value={fundraiserData.description}
            onChange={handleChange}
            className="create-fundraiser-textarea"
          />
        </div>
        <div>
          <label htmlFor="goal" className="create-fundraiser-label">
            Goal Amount:
          </label>
          <input
            type="number"
            id="goal"
            name="goal"
            value={fundraiserData.goal}
            onChange={handleChange}
            className="create-fundraiser-input"
          />
        </div>
        <div>
          <label htmlFor="image" className="create-fundraiser-label">
            Image:
          </label>
          <input
            type="file"
            id="image"
            name="image"
            onChange={handleImageChange}
            className="create-fundraiser-input"
          />
        </div>
        <button type="submit" className="create-fundraiser-button">
          Create Fundraiser
        </button>
      </form>
    </div>
  );
};

export default CreateFundraiser;
