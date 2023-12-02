import React from 'react';
import { ListStyled } from './ContactItem.styled';
import { useDispatch } from 'react-redux';
import { deleteContactThunk } from 'redux/operations';

export const ContactListItem = ({ contact }) => {
  const dispatch = useDispatch();

  return (
    <ListStyled>
      <li>
        {contact.name}: {contact.phone}
      </li>
      <button
        type="button"
        onClick={() => dispatch(deleteContactThunk(contact.id))}
      >
        Delete
      </button>
    </ListStyled>
  );
};
