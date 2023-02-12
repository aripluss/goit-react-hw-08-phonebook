import { Component } from 'react';
import { nanoid } from 'nanoid';
import ContactForm from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import { StyledDiv } from './ContactList/ContactList.styled';

export default class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  saveContact = newContact => {
    if (
      this.state.contacts.some(
        existingContact =>
          // existingContact.name.toLowerCase().includes(newContact.name.toLowerCase())
          existingContact.name.toLowerCase() === newContact.name.toLowerCase()
      )
    ) {
      alert(`${newContact.name} is already in contacts.`);
      return;
    }
    if (
      this.state.contacts.some(
        existingContact => existingContact.number === newContact.number
      )
    ) {
      alert(
        `There is already a contact with number ${newContact.number} in your phone book.`
      );
      return;
    }

    const finalContact = {
      id: nanoid(),
      ...newContact,
    };

    this.setState(prevState => ({
      contacts: [finalContact, ...prevState.contacts],
    }));

    // this.setState({
    //   contacts: [finalContact, ...this.state.contacts],
    // });
  };

  deleteContact = contactId => {
    this.setState({
      contacts: this.state.contacts.filter(contact => contact.id !== contactId),
    });
  };

  handleFilter = event => {
    this.setState({
      filter: event.target.value,
    });
  };

  filterContacts = ({ contacts }) => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(this.state.filter.toLowerCase())
    );
  };

  render() {
    const filteredContacts = this.filterContacts(this.state);

    return (
      <div className="container">
        <h1 className="title">Phonebook</h1>

        <div className="main-container">
          <ContactForm onSubmit={this.saveContact} />

          {this.state.contacts.length === 0 ? (
            <StyledDiv>There are no contacts in your phone book.</StyledDiv>
          ) : (
            <div className="sub-container">
              <h2>Contacts</h2>
              <Filter
                value={this.state.filter}
                onFilterChange={this.handleFilter}
              />
              <ContactList
                contacts={filteredContacts}
                deleteContact={this.deleteContact}
              />
            </div>
          )}
        </div>
      </div>
    );
  }
}
