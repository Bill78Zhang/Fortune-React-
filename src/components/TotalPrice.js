import React from 'react';

export default function TotalPrice({totalMoney}) {
  return (
    <div
      className='row md-5'
      style={{padding: '1rem', color: '#a3bffa', fontSize: '1.2em'}}>
      <div className='outcome col'>{`Total Expenses: ${totalMoney.totalOutcome}$`}</div>
      <div className='income col'>{`Total Income: ${totalMoney.totalIncome}$`}</div>
    </div>
  );
}
