import { Contactslist } from 'components/Contacts/ContactsList';
import { Form } from 'components/Form/Form';

import css from './App.module.css';
import { Filter } from 'components/Filter/Filter';

export const App = () => {
  return (
    <>
      <div className={css.container}>
        <h1>Phonebook</h1>
        <Form />
        <h2>Contacts</h2>
        <Filter />
        <Contactslist />
      </div>
    </>
  );
};
