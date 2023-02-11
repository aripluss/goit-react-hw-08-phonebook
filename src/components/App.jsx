import { Component } from 'react';
import { nanoid } from 'nanoid';
import ContactForm from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';

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
          // existingContact.name.includes(newContact.name)
          existingContact.name === newContact.name
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

  render() {
    const filteredContacts = this.state.contacts.filter(contact =>
      contact.name
        .toLowerCase()
        .trim()
        .includes(this.state.filter.toLowerCase())
    );

    return (
      <div className="container">
        <h1 className="title">Phonebook</h1>

        <div className="main-container">
          <ContactForm onSubmit={this.saveContact} />

          <div className="sub-container">
            <h2 className="subtitle">Contacts</h2>
            <Filter
              value={this.state.filter}
              onFilterChange={this.handleFilter}
            />

            <ContactList
              contacts={filteredContacts}
              deleteContact={this.deleteContact}
            />
          </div>
        </div>
      </div>
    );
  }
}
