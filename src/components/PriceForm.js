import React, {useState} from 'react';

const PriceForm = () => {
  const [title, setTitle] = useState();
  const [price, setPrice] = useState();
  const [date, setDate] = useState();
  const handleTitleInput = e => {
    e.preventDefault();
    const value = e.target.value;
    setTitle(value);
  };
  const handlePriceInput = e => {
    e.preventDefault();
    const value = e.target.value;
    setPrice(value);
  };
  const handleDateInput = e => {
    e.preventDefault();
    const value = e.target.value;
    setDate(value);
  };
  console.log(date);
  return (
    <div>
      <form>
        <div class='form-group row'>
          <label for='inputTitle1' class='col-sm-1 col-form-label'>
            Title:
          </label>
          <div class='col-sm-10'>
            <input
              type='text'
              class='form-control'
              value={title}
              id='inputPrice'
              placeholder='Please enter the title'
              onChange={e => handleTitleInput(e)}
              required
            />
          </div>
        </div>
        <div class='form-group row'>
          <label for='inputPrice1' class='col-sm-1 col-form-label'>
            Price:
          </label>
          <div class='col-sm-10'>
            <input
              type='number'
              class='form-control'
              id='inputPrice'
              value={price}
              placeholder='Please enter the price'
              onChange={e => handlePriceInput(e)}
              required
            />
          </div>
        </div>
        <div class='form-group row'>
          <label for='inputDate1' class='col-sm-1 col-form-label'>
            Date:
          </label>
          <div class='col-sm-10'>
            <input
              type='date'
              class='form-control'
              date={date}
              id='inputPrice'
              placeholder='Please select the date'
              onChange={e => handleDateInput(e)}
              required
            />
          </div>
        </div>
        <div className='row'>
          <button
            type='submit'
            class='btn btn-primary col-md-1'
            style={{margin: '10px'}}>
            Save
          </button>
          <button
            type='submit'
            class='btn btn-secondary col-1'
            style={{margin: '10px'}}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default PriceForm;
