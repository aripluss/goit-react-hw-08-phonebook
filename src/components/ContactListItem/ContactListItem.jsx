import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { AiOutlineUserDelete } from 'react-icons/ai';

import { removeContactRequest } from 'redux/contacts/operations';

import {
  StyledContact,
  StyledContactName,
  StyledContactNumber,
} from './ContactListItem.styled';
import { ButtonCancelStyled } from 'components/Button/Button.styled';

export const ContactListItem = ({ name, number, id }) => {
  const dispatch = useDispatch();

  const deleteExistingContact = contactId => {
    dispatch(removeContactRequest(contactId));
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
        <ButtonCancelStyled
          type="button"
          onClick={() => deleteExistingContact(id)}
        >
          Delete contact
          <AiOutlineUserDelete size={25} color={'var(--red-color)'} />
        </ButtonCancelStyled>
      </StyledContact>
    </>
  );
};

ContactListItem.propTypes = {
  id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
