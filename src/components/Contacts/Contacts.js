import React, { useEffect } from 'react';
import Form from '../Form/Form';
import { Filter } from 'components/Filter/Filter';
import css from '../Contacts/Contacts.module.css';
import ContactsList from 'components/ContactsList/ContactsList';
import { useDispatch, useSelector } from 'react-redux';
import { selectFilteredContacts } from 'redux/contacts/selectors';
import { getContactsThunk } from 'redux/operations';

const ContactsView = () => {
  const contacts = useSelector(selectFilteredContacts);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getContactsThunk());
  }, [dispatch]);

  return (
    <div className={css.ContactsList__style}>
      <h1 className={css.ContactsList__titleBlue}>Your phonebook</h1>
      <Form />

      <h2 className={css.ContactsList__titleBlue}>Contacts</h2>
      <Filter />
      <ContactsList />
    </div>
  );
};

export default ContactsView;
