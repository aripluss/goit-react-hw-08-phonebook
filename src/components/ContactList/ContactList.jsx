import PropTypes from 'prop-types';
import { ContactListItem } from 'components/ContactListItem/ContactListItem';
import { StyledContactList } from './ContactList.styled';

export const ContactList = ({ contacts, deleteContact = () => {} }) => {
  return (
    <StyledContactList>
      {contacts.map(contact => (
        <ContactListItem
          key={contact.id}
          deleteContact={deleteContact}
          {...contact}
        />
      ))}
    </StyledContactList>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  deleteContact: PropTypes.func.isRequired,
};
