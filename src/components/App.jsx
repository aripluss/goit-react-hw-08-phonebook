import { useSelector } from 'react-redux';

import { selectContacts, selectFilter } from 'redux/selectors';
import ContactForm from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';

import { StyledDiv } from './ContactList/ContactList.styled';

export default function App() {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);

  const filterContacts = ({ contacts }) => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const filteredContacts = filterContacts({ contacts, filter });

  return (
    <div className="container">
      <h1 className="title">Phonebook</h1>

      <div className="main-container">
        <ContactForm />

        {contacts.length === 0 ? (
          <StyledDiv>There are no contacts in your phone book.</StyledDiv>
        ) : (
          <div className="sub-container">
            <h2>Contacts</h2>

            <Filter />

            {filteredContacts.length === 0 ? (
              <StyledDiv>
                There are no matching contacts in your phone book.
              </StyledDiv>
            ) : (
              <ContactList contacts={filteredContacts} />
            )}
          </div>
        )}
      </div>
    </div>
  );
}
