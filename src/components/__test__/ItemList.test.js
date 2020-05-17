import {shallow} from 'enzyme';
import ItemList from '../ItemList';
import {items} from '../../containers/home';
import React from 'react';
const props = {
  items: items,
  onModifyItem: onModifyItem(jest.fn()),
  onDeleteItem: onDeleteItem(jest.fn())
};
