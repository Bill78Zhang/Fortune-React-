import React from 'react';
import ItemList from '../components/ItemList';
import ViewTab from '../components/ViewTab';
import MonthPicker from '../components/MonthPicker';
import {listView, chartView} from '../utility';
import TotalPrice from '../components/TotalPrice';
import CreateButton from '../components/CreateButton';

class Home extends React.Component {
  date = new Date();
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
  ];

  state = {
    Items: this.items,
    selectYear: this.date.getFullYear(),
    selectMonth: this.date.getMonth() + 1
  };

  onChangeSelectedYear = (e, year) => {
    e.preventDefault();
    this.setState({selectYear: year});
  };

  onChangeSelectedMonth = (e, month) => {
    e.preventDefault();
    this.setState({selectMonth: month});
  };

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
  newItem = {
    id: 5,
    title: 'Vodafone Bill',
    price: 40,
    date: '2019-4-1',
    category: {
      id: 5,
      type: 'phone',
      name: 'Gas',
      iconName: 'IosCafeOutline'
    }
  };
  onTabChange = view => {};

  onCreateItem = e => {
    e.preventDefault();
    this.setState({
      Items: [this.newItem, ...this.state.Items]
    });
  };
  onModifyItem = () => {
    alert('Mondify');
  };
  onDeleteItem = item => {
    const newItems = this.state.Items.filter(i => {
      if (item.id !== i.id) {
        return i;
      }
    });
    this.setState({
      Items: newItems
    });
  };
  render() {
    const {selectYear, selectMonth} = this.state;
    const newItems = this.state.Items.filter(item => {
      if (item.date.includes(`${selectYear}-${selectMonth}`)) {
        return item;
      }
    });
    return (
      <React.Fragment>
        <div
          className='row navbar navbar-dark bg-dark d-flex justify-content-end align-item-center'
          style={{textAlign: 'center', margin: '20px'}}>
          <div className='col-4'>
            <h2 style={{padding: '0.7rem', color: '#7f9cf5'}}>Fortune</h2>
          </div>
          <div className='col-2'>
            <MonthPicker
              onChangeSelectedMonth={this.onChangeSelectedMonth}
              onChangeSelectedYear={this.onChangeSelectedYear}
              selectMonth={this.state.selectMonth}
              selectYear={this.state.selectYear}
            />
          </div>
          <div className='col-4'>
            <TotalPrice totalMoney={this.calculateMoney()} />
          </div>
        </div>
        <React.Fragment>
          <CreateButton onClick={e => this.onCreateItem(e)} />
        </React.Fragment>
        <ViewTab active={listView} onTabChange={this.onTabChange} />
        <ItemList
          items={newItems}
          onModifyItem={this.onModifyItem}
          onDeleteItem={this.onDeleteItem}
        />
      </React.Fragment>
    );
  }
}

export default Home;
