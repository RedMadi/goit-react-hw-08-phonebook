import React, { useState } from 'react';
import { FormContainer } from './Form.styled';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contacts/operations';
import { getContacts } from 'redux/contacts/selectors';

const Form = () => {
  const [name, setName] = useState('');
  const [phone, setNumber] = useState('');

  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  const handleChange = e => {
    const { name, value } = e.target;
    switch (name) {
      case 'name': {
        setName(value);
        return;
      }
      case 'phone': {
        setNumber(value);
        return;
      }
      default:
        return;
    }
  };
  const handleSubmit = e => {
    e.preventDefault();

    const contactName = name.toLowerCase();

    if (!/^[0-9-]+$/.test(phone)) {
      alert('Please enter a valid numeric phone number.');
      return;
    }
    if (contacts.some(contact => contact.name.toLowerCase() === contactName)) {
      alert(`Contact with the name ${name} already exists in the phonebook.`);
      return;
    }
    dispatch(addContact({ name, phone }));

    setName('');
    setNumber('');
  };

  return (
    <div>
      <FormContainer onSubmit={handleSubmit}>
        <label>Name</label>
        <input
          type="text"
          onChange={handleChange}
          name="name"
          value={name}
          required
        />
        <label>Number</label>
        <input
          type="tel"
          onChange={handleChange}
          name="phone"
          value={phone}
          required
        />
        <button type="submit">Add contact</button>
      </FormContainer>
    </div>
  );
};

export default Form;
