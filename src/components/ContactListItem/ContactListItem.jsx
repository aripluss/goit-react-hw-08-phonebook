import PropTypes from 'prop-types';
import {
  StyledContact,
  StyledContactName,
  StyledContactNumber,
  StyledDeleteButton,
} from './ContactListItem.styled';
import { AiOutlineUserDelete } from 'react-icons/ai';

export const ContactListItem = ({
  name,
  number,
  id,
  deleteContact = () => {},
}) => {
  return (
    <>
      <StyledContact>
        <StyledContactName>
          {name}:{' '}
          <StyledContactNumber>
            <a href={'tel:' + number}>{number}</a>
          </StyledContactNumber>
        </StyledContactName>
        <StyledDeleteButton type="button" onClick={() => deleteContact(id)}>
          Delete contact
          <AiOutlineUserDelete size={25} color={'var(--red-color)'} />
        </StyledDeleteButton>
      </StyledContact>
    </>
  );
};

ContactListItem.propTypes = {
  deleteContact: PropTypes.func.isRequired,
  id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
