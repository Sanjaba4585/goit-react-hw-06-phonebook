import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import css from './Contacts.module.css';
import { removeContactsAction } from '../../redux/ContactSlice';

export const Contactslist = () => {
  const contacts = useSelector(state => state.contacts);
  console.log(contacts);
  const filter = useSelector(state => state.filter);
  console.log(filter);
  const dispatch = useDispatch();

  const dellContact = id => {
    dispatch(removeContactsAction(id));
  };
  const getFilterContact = (contacts, filter) => {
    return contacts.contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const filterContact = getFilterContact(contacts, filter);
  return (
    <ul className={css.list}>
      {filterContact.map(contact => (
        <li className={css.item} key={contact.id}>
          <p className={css.text}>
            {contact.name}: {contact.number}
          </p>
          <button
            className={css.btnDell}
            type="button"
            onClick={() => dellContact(contact.id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};
