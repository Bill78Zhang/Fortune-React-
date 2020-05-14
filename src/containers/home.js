import React from 'react';
import ItemList from '../components/ItemList';
import ViewTab from '../components/ViewTab';
import MonthPicker from '../components/MonthPicker';
import {listView, chartView} from '../utility';
import TotalPrice from '../components/TotalPrice';
import {tsThisType} from '@babel/types';

class Home extends React.Component {
  items = [
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
    }
  ];

  calculateMoney = () => {
    let totalIncome = 0,
      totalOutcome = 0;
    this.items.forEach(item => {
      if (item.category.type === 'outcome') {
        totalOutcome = totalOutcome + item.price;
      } else {
        totalIncome = totalIncome + item.price;
      }
    });
    return {totalIncome, totalOutcome};
  };

  onTabChange = view => {};

  onModifyItem = () => {
    alert('Mondify');
  };
  onDeleteItem = () => {
    alert('Delete');
  };
  render() {
    return (
      <React.Fragment className='container-md '>
        <div
          className='row navbar navbar-dark bg-dark d-flex justify-content-end align-item-center'
          style={{textAlign: 'center', margin: '20px'}}>
          <div className='col-4'>
            <h2 style={{padding: '0.7rem', color: '#7f9cf5'}}>Fortune</h2>
          </div>
          <div className='col-2'>
            <MonthPicker />
          </div>
          <div className='col-4'>
            <TotalPrice totalMoney={this.calculateMoney()} />
          </div>
        </div>
        <ViewTab active={listView} onTabChange={this.onTabChange} />
        <ItemList
          items={this.items}
          onModifyItem={this.onModifyItem}
          onDeleteItem={this.onDeleteItem}
        />
      </React.Fragment>
    );
  }
}

export default Home;
