import {shallow} from 'enzyme';
import TotalPrice from '../TotalPrice';
import React from 'react';

const props = {
  totalMoney: {
    totalOutcome: 1000,
    totalIncome: 2000
  }
};

describe('test TotalPrice Component', () => {
  it('the component should render the correct value of income and outcome', () => {
    const wrapper = shallow(<TotalPrice {...props} />);
    expect(wrapper.find('.income').text()).toEqual(`Total Income: 2000$`);
    expect(wrapper.find('.outcome').text()).toEqual(`Total Expenses: 1000$`);
  });
});
