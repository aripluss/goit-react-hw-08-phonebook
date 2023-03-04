import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast, Toaster } from 'react-hot-toast';

import { selectContacts, selectIsLoading } from 'redux/contacts/selectors';
import { saveContactRequest } from 'redux/contacts/operations';
import { Loader } from 'components/Loader/Loader';

import {
  FormStyled,
  InputStyled,
  LabelStyled,
} from 'components/Forms/Formik.styled';
import { ButtonStyled } from 'components/Button/Button.styled';

export default function ContactForm() {
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);

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

    addNewContact({
      name: name.trim(),
      number,
    });

    reset();
  };

  const addNewContact = newContact => {
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

    dispatch(saveContactRequest(newContact));
  };

  return (
    <div className="form-container">
      <FormStyled onSubmit={handleSubmit}>
        <LabelStyled className="label">
          Name
          <InputStyled
            className="input"
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces"
            required
            placeholder="Erin Gold"
            value={name}
            onChange={handleInputChange}
          />
        </LabelStyled>
        <LabelStyled className="label">
          Number
          <InputStyled
            className="input"
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            placeholder="+380990000000"
            value={number}
            onChange={handleInputChange}
          />
        </LabelStyled>
        <ButtonStyled
          type="submit"
          className="button"
          style={{ width: '100%' }}
        >
          {isLoading && <Loader isButtonLoader />}
          Add contact
        </ButtonStyled>
      </FormStyled>

      <Toaster />
    </div>
  );
}
