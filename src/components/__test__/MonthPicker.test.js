import React from 'react';
import {shallow} from 'enzyme';
import MonthPicker from '../MonthPicker';
import {jsxEmptyExpression, exportAllDeclaration} from '@babel/types';
import ItemList from '../ItemList';

const props = {
  selectMonth: 7,
  selectYear: 2020,
  onChangeSelectedMonth: jest.fn(),
  onChangeSelectedYear: jest.fn()
};

describe('test MonthPicker Component', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<MonthPicker {...props} />);
  });
  it('test the display of cureent time and state', () => {
    expect(
      wrapper
        .find('.btn')
        .first()
        .text()
    ).toEqual('2020年7月');
    expect(wrapper.state('isOpen')).toEqual(false);
  });
  it('test the list length of month and year', () => {
    expect(wrapper.find('.btn-year').length).toEqual(10);
  });
});
