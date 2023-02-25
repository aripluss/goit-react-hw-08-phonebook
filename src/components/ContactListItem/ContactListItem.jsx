import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { AiOutlineUserDelete } from 'react-icons/ai';

import { deleteContact } from 'redux/contactsSlice';

import {
  StyledContact,
  StyledContactName,
  StyledContactNumber,
  StyledDeleteButton,
} from './ContactListItem.styled';

export const ContactListItem = ({ name, number, id }) => {
  const dispatch = useDispatch();

  const deleteExistingContact = contactId => {
    dispatch(deleteContact(contactId));
  };

  return (
    <>
      <StyledContact>
        <StyledContactName>
          {name}:{' '}
          <StyledContactNumber>
            <a href={'tel:' + number.split('-').join('').split(' ').join('')}>
              {number}
            </a>
          </StyledContactNumber>
        </StyledContactName>
        <StyledDeleteButton
          type="button"
          onClick={() => deleteExistingContact(id)}
        >
          Delete contact
          <AiOutlineUserDelete size={25} color={'var(--red-color)'} />
        </StyledDeleteButton>
      </StyledContact>
    </>
  );
};

ContactListItem.propTypes = {
  id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
