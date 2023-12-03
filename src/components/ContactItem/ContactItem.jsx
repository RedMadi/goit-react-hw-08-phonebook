import React from 'react';
import { ListStyled } from './ContactItem.styled';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/operations';

// export const ContactListItem = ({ contact }) => {
//   const dispatch = useDispatch();

//   return (
//     <ListStyled>
//       <li>
//         {contact.name}: {contact.number}
//       </li>
//       <button type="button" onClick={() => dispatch(deleteContact(contact.id))}>
//         Delete
//       </button>
//     </ListStyled>
//   );
// };
import { toast } from 'react-toastify';

export const ContactListItem = ({ contact }) => {
  const dispatch = useDispatch();

  const handleDelete = async () => {
    try {
      console.log('Deleting contact with ID:', contact.id);
      await dispatch(deleteContact(contact.id));
      toast.info(`${contact.name} removed from contacts.`);
    } catch (error) {
      toast.error('Oops.... something went wrong');
    }
  };

  return (
    <ListStyled>
      <li>
        {contact.name}: {contact.number}
      </li>
      <button type="button" onClick={handleDelete}>
        Delete
      </button>
    </ListStyled>
  );
};
