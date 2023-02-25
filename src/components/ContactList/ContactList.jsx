import PropTypes from 'prop-types';

import { ContactListItem } from 'components/ContactListItem/ContactListItem';

import { StyledContactList } from './ContactList.styled';

export const ContactList = ({ contacts }) => {
  return (
    <StyledContactList>
      {contacts.map(contact => (
        <ContactListItem key={contact.id} {...contact} />
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
};
