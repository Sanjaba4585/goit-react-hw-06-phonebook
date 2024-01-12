import { useDispatch } from 'react-redux';
import css from './Form.module.css';
import { useState } from 'react';
import { addContactsAction } from '../../redux/ContactSlice';
import { nanoid } from '@reduxjs/toolkit';

export const Form = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const formSubmit = e => {
    e.preventDefault();
    dispatch(addContactsAction({ id: nanoid(), name, number }));
    setName('');
    setNumber('');
  };

  // const { name, number } = form;

  return (
    <div className={css.container}>
      <form onSubmit={formSubmit}>
        <label>
          <p className={css.title}>Name</p>
          <input
            className={css.input}
            type="text"
            name="name"
            placeholder="Oleksandr Korniichuk"
            required
            onChange={e => setName(e.target.value)}
          />
          <p className={css.title}>Number</p>
          <input
            className={css.input}
            type="tel"
            name="number"
            placeholder="123-45-67"
            required
            onChange={e => setNumber(e.target.value)}
          />
        </label>
        <button type="submit" className={css.btnSubmit}>
          Add contact
        </button>
      </form>
    </div>
  );
};
