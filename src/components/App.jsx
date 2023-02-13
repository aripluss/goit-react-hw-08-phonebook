import { Component } from 'react';
import { nanoid } from 'nanoid';
import ContactForm from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import { StyledDiv } from './ContactList/ContactList.styled';

export default class App extends Component {
  state = {
    contacts: [],
    // contacts: JSON.parse(localStorage.getItem('contacts')) ?? [], // without componentDidMount
    filter: '',
  };

  componentDidMount() {
    const contacts = JSON.parse(localStorage.getItem('contacts'));
    if (contacts) {
      this.setState({
        contacts,
      });
    }
  }

  componentDidUpdate(_, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

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

              {filteredContacts.length === 0 ? (
                <StyledDiv>
                  There are no matching contacts in your phone book.
                </StyledDiv>
              ) : (
                <ContactList
                  contacts={filteredContacts}
                  deleteContact={this.deleteContact}
                />
              )}
            </div>
          )}
        </div>
      </div>
    );
  }
}
