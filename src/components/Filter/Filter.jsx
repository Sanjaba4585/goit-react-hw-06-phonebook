import React from 'react';
import { useDispatch } from 'react-redux';
import css from './Filter.module.css';
import { filterContacts } from '../../redux/FilterSlice';

export const Filter = () => {
  const dispatch = useDispatch();

  const handleFilterChange = e => {
    dispatch(filterContacts(e.target.value));
  };

  return (
    <>
      <p className={css.text}>Find contacts by name</p>
      <input
        className={css.input}
        type="text"
        name="filter"
        onChange={handleFilterChange}
      />
    </>
  );
};
