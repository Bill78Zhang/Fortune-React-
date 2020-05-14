import React from 'react';
import {numberGenerator} from '../utility';
import {number} from 'prop-types';

class MonthPicker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      selectYear: 2010,
      selectMonth: 8
    };
  }

  onChangeSelectedYear = (e, year) => {
    e.preventDefault();
    this.setState({selectYear: year});
  };

  onChangeSelectedMonth = (e, month) => {
    e.preventDefault();
    this.setState({selectMonth: month});
  };
  onHandleToggleOpen = e => {
    e.preventDefault();
    this.setState({isOpen: !this.state.isOpen});
  };

  render() {
    const {isOpen, selectYear, selectMonth} = this.state;
    return (
      <div
        className='dropdown month-picker-component'
        style={{padding: '0.5rem'}}>
        <button
          className='btn btn-lg btn-light dropdown-toggle'
          onClick={this.onHandleToggleOpen}>
          {`${selectYear}年${selectMonth}月`}
        </button>
        {isOpen && (
          <div
            className='dropdown-menu dropdown-menu-right'
            style={{display: 'block'}}>
            <div className='row'>
              <div className='col border-right border-light'>
                <p style={{textAlign: 'center'}}>Year</p>
                {numberGenerator(20, 10).map((number, index) => {
                  return (
                    <a
                      className={
                        selectYear === 2000 + number
                          ? 'dropdown-item active text-white'
                          : 'dropdown-item'
                      }
                      key={index}
                      onClick={e =>
                        this.onChangeSelectedYear(e, 2000 + number)
                      }>
                      {2000 + number}
                    </a>
                  );
                })}
              </div>
              <div className='col '>
                <p style={{textAlign: 'center'}}>Month</p>
                {numberGenerator(12, 1).map((number, index) => {
                  return (
                    <a
                      className={
                        selectMonth === number
                          ? 'dropdown-item active'
                          : 'dropdown-item'
                      }
                      key={index}
                      onClick={e => this.onChangeSelectedMonth(e, number)}>
                      {number}
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default MonthPicker;
