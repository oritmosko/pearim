import React from 'react';
import { useForm } from 'react-hook-form';
import { Button, TextField, Container, Typography, Box } from '@mui/material';

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
    <Container maxWidth="sm">
      <Box mt={4} p={3} boxShadow={3}>
        <Typography variant="h7" gutterBottom>
          השאירו פרטים של החברה עם קישור לדו"ח והוא יפורסם באתר בהקדם
        </Typography>
        <form onSubmit={handleSubmit(onSubmit)}>
          <TextField
            fullWidth
            label="Company name"
            variant="outlined"
            {...register('name', { required: true })}
            error={Boolean(errors.name)}
            helperText={errors.name && 'Name is required'}
            margin="normal"
          />
          <TextField
            fullWidth
            label="Link to report"
            variant="outlined"
            {...register('email', {
              required: true,
            })}
            error={Boolean(errors.email)}
            helperText={errors.email && 'Invalid link'}
            margin="normal"
          />
          <TextField
            fullWidth
            multiline
            label="Message"
            variant="outlined"
            rows={4}
            {...register('message', { required: false })}
            margin="normal"
          />
          <Button type="submit" variant="contained" color="primary">
            Submit
          </Button>
        </form>
      </Box>
    </Container>
  );
};

export default Missing;
