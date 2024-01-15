import { useDispatch, useSelector } from 'react-redux';
import css from './Form.module.css';
import { addContactsAction } from '../../redux/ContactSlice';
import { nanoid } from '@reduxjs/toolkit';

export const Form = () => {
  const contacts = useSelector(({ contacts }) => contacts.contacts);
  const dispatch = useDispatch();

  const nameInputId = nanoid();
  const numberInputId = nanoid();

  const formSubmit = e => {
    e.preventDefault();

    const contact = {
      id: nanoid(),
      name: e.target.name.value,
      number: e.target.number.value,
    };
    if (contacts.find(({ name }) => name === contact.name)) {
      alert('Oops!');
      return;
    }
    dispatch(addContactsAction(contact));
    e.target.reset();
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
            id={nameInputId}
          />
          <p className={css.title}>Number</p>
          <input
            className={css.input}
            type="tel"
            name="number"
            placeholder="123-45-67"
            required
            id={numberInputId}
          />
        </label>
        <button type="submit" className={css.btnSubmit}>
          Add contact
        </button>
      </form>
    </div>
  );
};
