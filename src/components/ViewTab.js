import React from 'react';
import PropTypes from 'prop-types';
import IosPaper from 'react-ionicons/lib/IosPaper';
import IosPie from 'react-ionicons/lib/IosPie';
import {listView, chartView} from '../utility';
const generateActiveClass = (current, view) => {
  return current === view ? 'nav-link active' : 'nav-link';
};
export default function ViewTab({active, onTabChange}) {
  return (
    <ul className='nav nav-tabs'>
      <li className='nav-item col-6'>
        <a
          className={generateActiveClass(active, 'list')}
          href='#'
          onClick={e => {
            e.preventDefault();
            onTabChange(listView);
          }}>
          <IosPaper
            className='rounded-circle mr-2'
            font-size='30px'
            color={'#007bff'}
          />{' '}
          List Mode
        </a>
      </li>
      <li className='nav-item col-6'>
        <a
          className={generateActiveClass(active, 'chart')}
          href='#'
          onClick={e => {
            e.preventDefault();
            onTabChange(chartView);
          }}>
          <IosPie
            className='rounded-circle mr-2'
            font-size='25px'
            color={'#007bff'}
          />
          Chart Mode
        </a>
      </li>
    </ul>
  );
}
ViewTab.propTypes = {
  active: PropTypes.string.isRequired,
  onTabChange: PropTypes.func.isRequired
};
