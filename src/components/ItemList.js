import React from 'react';
import IosCafeOutline from 'react-ionicons/lib/IosCafeOutline';
import IosAdd from 'react-ionicons/lib/IosAdd';
import IosClose from 'react-ionicons/lib/IosClose';
import PropTypes from 'prop-types';

export default function ItemList({items, onModifyItem, onDeleteItem}) {
  return (
    <div>
      <ul className='list-group list-group-flush'>
        {items.map(item => {
          return (
            <li
              className='list-group-item  d-flex justify-content-between align-item-center'
              key={item.id}>
              <span className='col-1'>
                <IosCafeOutline
                  className='rounded-circle'
                  font-size='100px'
                  style={{background: '#007bff', padding: '2px'}}
                  color={'#fff'}
                />
              </span>
              <span className='col-5'>{item.title}</span>
              <span className='col-2 font-weight-bold'>
                {item.category.type === 'outcome'
                  ? `-${item.price}`
                  : item.price}
                $
              </span>
              <span className='col-2'>{item.date}</span>
              <IosAdd
                className='rounded-cycle'
                font-size='100px'
                style={{background: '#28a745', padding: '2px'}}
                color={'#fff'}
                onClick={onModifyItem}
              />
              <IosClose
                className='rounded'
                font-size='100px'
                style={{background: '#dc3545', padding: '2px'}}
                color={'#fff'}
                onClick={() => onDeleteItem(item)}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
}

ItemList.propTypes = {
  items: PropTypes.array.isRequired,
  onModifyItem: PropTypes.func.isRequired,
  onDeleteItem: PropTypes.func.isRequired
};

ItemList.defaultProps = {
  onModifyItem: () => {}
};
