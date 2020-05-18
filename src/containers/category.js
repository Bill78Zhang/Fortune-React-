import React from 'react';
import NewCategory from '../components/NewCategory';
import FlightTakeoffIcon from '@material-ui/icons/FlightTakeoff';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import FastfoodIcon from '@material-ui/icons/Fastfood';
import PriceForm from '../components/PriceForm';
import Tab from '@material-ui/core/Tab';

const Category = props => {
  const style = {
    width: '80%',
    margin: '0 auto'
  };
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
    <div style={style}>
      <NewCategory categories={categories} />
      <PriceForm />
    </div>
  );
};
export default Category;
