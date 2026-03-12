import React from 'react';
import { useNavigate } from 'react-router-dom';
import FoodSearch from './FoodSearch';

const WithNavigate = (props) => {
  const navigate = useNavigate();

  return <FoodSearch {...props} navigate={navigate} />;
};

export default WithNavigate;
