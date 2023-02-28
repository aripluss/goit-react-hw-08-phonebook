import { useSelector } from 'react-redux';
import { selectVisibleContacts } from 'redux/contacts/selectors';
import { ContactListItem } from 'components/ContactListItem/ContactListItem';

import { StyledContactList, StyledDiv } from './ContactList.styled';

export const ContactList = () => {
  const visibleContacts = useSelector(selectVisibleContacts);

  return (
    <>
      {visibleContacts.length === 0 ? (
        <StyledDiv>
          There are no matching contacts in your phone book.
        </StyledDiv>
      ) : (
        <StyledContactList>
          {visibleContacts.map(contact => (
            <ContactListItem key={contact.id} {...contact} />
          ))}
        </StyledContactList>
      )}
    </>
  );
};
