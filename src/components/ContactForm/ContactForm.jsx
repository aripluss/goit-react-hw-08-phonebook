import React, { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';

import { selectContacts } from 'redux/selectors';
import { addContact } from 'redux/contactsSlice';

import {
  StyledForm,
  StyledLabel,
  StyledInput,
  StyledFormButton,
} from './ContactForm.styled';

export default function ContactForm() {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const reset = () => {
    setName('');
    setNumber('');
  };

  const handleInputChange = event => {
    const { name, value } = event.target;

    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;

      default:
        break;
    }
  };

  const handleSubmit = event => {
    event.preventDefault();

    saveContact({
      name: name.trim(),
      number,
    });

    reset();
  };

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

    dispatch(addContact(newContact));
    // dispatch({ type: 'contacts/addContact', payload: [{}, {}, ..., {}] });

    // ActionCreator -> addContact;
    // Action -> { type: 'contacts/addContact', payload: [{}, {}, ..., {}] };

    // Self-written ActionCreator -> const addContact = payload => ({
    //   type: 'contacts/addContact',
    //   payload: payload,
    // });
  };

  return (
    <div>
      <StyledForm onSubmit={handleSubmit}>
        <StyledLabel className="label">
          Name
          <StyledInput
            className="input"
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            placeholder="Enter a contact name"
            value={name}
            onChange={handleInputChange}
          />
        </StyledLabel>
        <StyledLabel className="label">
          Number
          <StyledInput
            className="input"
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            placeholder="Enter a contact number"
            value={number}
            onChange={handleInputChange}
          />
        </StyledLabel>
        <StyledFormButton type="submit" className="button">
          Add contact
        </StyledFormButton>
      </StyledForm>

      <Toaster />
    </div>
  );
}
