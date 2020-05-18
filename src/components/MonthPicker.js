import React from 'react';
import {numberGenerator} from '../utility';
import {number} from 'prop-types';

class MonthPicker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
  }

  onHandleToggleOpen = e => {
    e.preventDefault();
    this.setState({isOpen: !this.state.isOpen});
  };

  // handleClick = e => {
  //   if (e.target !== document.getElementById('btn-open')) {
  //     this.setState({isOpen: false});
  //   }
  // };
  // componentDidMount() {
  //   document.addEventListener('click', this.handleClick, false);
  // }

  // componentWillUnmount() {
  //   document.removeEventListener('click', this.handleClick, false);
  // }

  render() {
    const {isOpen} = this.state;
    const {
      onChangeSelectedMonth,
      onChangeSelectedYear,
      selectMonth,
      selectYear
    } = this.props;
    return (
      <div
        className='dropdown month-picker-component'
        style={{padding: '0.5rem'}}>
        <button
          className='btn btn-lg btn-light dropdown-toggle '
          id='btn-open'
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
                          ? 'dropdown-item btn-year active text-white'
                          : 'dropdown-item btn-year'
                      }
                      key={index}
                      onClick={e => onChangeSelectedYear(e, 2000 + number)}>
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
                      onClick={e => onChangeSelectedMonth(e, number)}>
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
