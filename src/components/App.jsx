import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast, Toaster } from 'react-hot-toast';

import {
  selectContacts,
  selectError,
  selectIsLoading,
} from 'redux/contacts/selectors';
import { fetchContacts } from 'redux/contacts/operations';
import ContactForm from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { Loader } from './Loader/Loader';

import { StyledDiv } from './ContactList/ContactList.styled';

export default function App() {
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  useEffect(() => {
    if (error) toast.error(error);
  }, [dispatch, error]);

  return (
    <>
      {isLoading && <Loader />}

      <div className="container">
        <h1 className="title">Phonebook</h1>

        <div className="main-container">
          <ContactForm />

          {!contacts.length ? (
            <StyledDiv>There are no contacts in your phone book.</StyledDiv>
          ) : (
            <div className="sub-container">
              <h2>Contacts</h2>

              <Filter />

              <ContactList />
            </div>
          )}
        </div>
      </div>

      <Toaster />
    </>
  );
}
