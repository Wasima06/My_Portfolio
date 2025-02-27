import React, { useEffect, useState } from 'react';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Stack from '@mui/material/Stack';
import './Alert.css'

const DescriptionAlerts = () => {
  const [showAlert, setShowAlert] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowAlert(false);
    }, 2000); // Hides the alert after 2 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className='alert-container'>
      {showAlert && (
        <Alert severity="info">
          <AlertTitle></AlertTitle>
          Welcome to my Portfolio.
        </Alert>
      )}
      </div>
  );
};

export default DescriptionAlerts;
