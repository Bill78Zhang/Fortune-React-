import {shallow} from 'enzyme';
import ItemList from '../ItemList';
import React from 'react';
import {exportAllDeclaration} from '@babel/types';
const props = {
  items: [
    {
      id: 1,
      title: 'Buy Milk',
      price: 40,
      date: '2020-5-20',
      category: {
        id: 1,
        type: 'outcome',
        name: 'shopping',
        iconName: 'IosCafeOutline'
      }
    },
    {
      id: 2,
      title: 'Electrity',
      price: 130,
      date: '2020-5-1',
      category: {
        id: 2,
        type: 'income',
        name: 'Gas',
        iconName: 'IosCafeOutline'
      }
    },
    {
      id: 3,
      title: 'Electrity',
      price: 130,
      date: '2020-5-1',
      category: {
        id: 3,
        type: 'income',
        name: 'Gas',
        iconName: 'IosCafeOutline'
      }
    },
    {
      id: 4,
      title: 'Electrity',
      price: 130,
      date: '2018-4-1',
      category: {
        id: 4,
        type: 'income',
        name: 'Gas',
        iconName: 'IosCafeOutline'
      }
    }
  ],
  onModifyItem: jest.fn(),
  onDeleteItem: jest.fn()
};

let wrapper;
describe('test ItemList Component', () => {
  beforeEach(() => {
    wrapper = shallow(<ItemList {...props} />);
  });
  it('should render the component to match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
  it('render correct items length', () => {
    expect(wrapper.find('.list-group-item').length).toEqual(props.items.length);
  });
  it('shoule trigger the correct function callback', () => {
    const firstItem = wrapper.find('.list-group-item').first();
    firstItem.find('.rounded-cycle').simulate('click');
    expect(props.onModifyItem).toHaveBeenCalled();
    firstItem.find('.rounded').simulate('click');
    expect(props.onDeleteItem).toHaveBeenCalledWith(props.items[0]);
  });
});
