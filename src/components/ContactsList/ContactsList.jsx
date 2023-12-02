import { ContactListItem } from 'components/ContactItem/ContactItem';
import React, { useEffect } from 'react';
import { deleteContactThunk } from 'redux/operations';
import { selectFilteredContacts } from 'redux/contacts/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { getContactsThunk } from 'redux/operations';

const ContactsList = () => {
  const contacts = useSelector(selectFilteredContacts);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getContactsThunk());
  }, [dispatch]);
  return (
    <div>
      <ul>
        {contacts.map(contact => (
          <ContactListItem
            key={contact.id}
            contact={contact}
            onDeleteContact={() => deleteContactThunk(contact.id)}
          />
        ))}
      </ul>
    </div>
  );
};
export default ContactsList;
