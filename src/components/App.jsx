import { useState } from 'react';
import { nanoid } from 'nanoid';
import toast, { Toaster } from 'react-hot-toast';

import { useLocalStorage } from 'hooks/useLocalStorage';
import ContactForm from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';

import { StyledDiv } from './ContactList/ContactList.styled';

export default function App() {
  // const [contacts, setContacts] = useState(() => JSON.parse(localStorage.getItem('contacts')) ?? []); // without useLocalStorage
  const [contacts, setContacts] = useLocalStorage('contacts', []);
  const [filter, setFilter] = useState('');

//   const firstRender = useRef(true);

//   useEffect(() => {
//     if (firstRender.current) {
//       firstRender.current = false;
//       return;
//     }

//     localStorage.setItem('contacts', JSON.stringify(contacts));
//   }, [contacts]); // without useLocalStorage

  const saveContact = newContact => {
    const repeatedContactName = contacts.some(
      existingContact =>
        existingContact.name.toLowerCase() === newContact.name.toLowerCase()
    );

    const repeatedContactNumber = contacts.some(
      existingContact => existingContact.number === newContact.number
    );

    if (repeatedContactName) {
      toast.error(`${newContact.name} is already in contacts.`);
      return;
    }

    if (repeatedContactNumber) {
      toast.error(
        `There is already a contact with number ${newContact.number} in your phone book.`
      );
      return;
    }

    const finalContact = {
      id: nanoid(),
      ...newContact,
    };

    setContacts(prevContacts => [finalContact, ...prevContacts]);
  };

  const deleteContact = contactId => {
    setContacts(prevContacts =>
      prevContacts.filter(contact => contact.id !== contactId)
    );
  };

  const handleFilter = event => {
    setFilter(event.target.value);
  };

  const filterContacts = ({ contacts }) => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const filteredContacts = filterContacts({ contacts, filter });

  return (
    <div className="container">
      <Toaster />

      <h1 className="title">Phonebook</h1>

      <div className="main-container">
        <ContactForm onSubmit={saveContact} />

        {contacts.length === 0 ? (
          <StyledDiv>There are no contacts in your phone book.</StyledDiv>
        ) : (
          <div className="sub-container">
            <h2>Contacts</h2>

            <Filter value={filter} onFilterChange={handleFilter} />

            {filteredContacts.length === 0 ? (
              <StyledDiv>
                There are no matching contacts in your phone book.
              </StyledDiv>
            ) : (
              <ContactList
                contacts={filteredContacts}
                deleteContact={deleteContact}
              />
            )}
          </div>
        )}
      </div>
    </div>
  );
}
