
import React from 'react';
import { Navigate } from 'react-router-dom';

const Index = () => {
  // Redirect to offers page which is our main page
  return <Navigate to="/offers" replace />;
};

export default Index;
