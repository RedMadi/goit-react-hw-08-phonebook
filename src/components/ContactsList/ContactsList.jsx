import { ContactListItem } from 'components/ContactItem/ContactItem';
import React, { useEffect } from 'react';
import { deleteContact } from 'redux/contacts/operations';
import { selectFilteredContacts } from 'redux/contacts/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/contacts/operations';

const ContactsList = () => {
  const contacts = useSelector(selectFilteredContacts);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  // console.log('Contacts:', contacts);

  return (
    <div>
      <ul>
        {contacts.map(contact => (
          <ContactListItem
            key={contact.id}
            contact={contact}
            onDeleteContact={() => dispatch(deleteContact(contact.id))}
          />
        ))}
      </ul>
    </div>
  );
};
export default ContactsList;
