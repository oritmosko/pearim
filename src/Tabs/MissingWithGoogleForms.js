import React from 'react';
import { useForm } from 'react-hook-form';
import { Button, TextField, Container, Typography, Box } from '@mui/material';

import './Missing.css';

const Missing = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data); // Form data is available here
  };

  return (
    <div>
      <iframe
        src="https://docs.google.com/forms/d/1Uo0TdrhR-HAqJgzIZbeqeMGV-QODjT7Q34b2HpNxFNU/viewform?embedded=true"
        className="google-form"
        frameBorder="0"
        // marginheight="0"
        // marginwidth="0"
      >
        Loading...
      </iframe>
    </div>
  );
};

export default Missing;
