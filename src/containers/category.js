import React from 'react';
import NewCategory from '../components/NewCategory';
import FlightTakeoffIcon from '@material-ui/icons/FlightTakeoff';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import FastfoodIcon from '@material-ui/icons/Fastfood';

const Category = props => {
  const categories = [
    {
      id: '0',
      name: 'Travel',
      type: 'outcome',
      icon: <FlightTakeoffIcon />
    },
    {
      id: '1',
      name: 'Finance',
      type: 'income',
      icon: <MonetizationOnIcon />
    },
    {
      id: '2',
      name: 'Food',
      type: 'outcome',
      icon: <FastfoodIcon />
    }
  ];

  return (
    <React.Fragment>
      <NewCategory categories={categories} />
    </React.Fragment>
  );
};
export default Category;
