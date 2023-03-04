import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast, Toaster } from 'react-hot-toast';

import WithAuthRedirect from 'HOC/WithAuthRedirect';
import { selectIsLoggedIn } from 'redux/user/selectors';
import { selectContacts, selectError } from 'redux/contacts/selectors';
import { fetchContactsRequest } from 'redux/contacts/operations';
import ContactForm from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';

import { ContainerStyled } from 'components/Container/Container.styled';
import { StyledDiv } from 'components/ContactList/ContactList.styled';

function ContactsPage() {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const contacts = useSelector(selectContacts);
  const errorContacts = useSelector(selectError);

  const dispatch = useDispatch();

  useEffect(() => {
    if (!isLoggedIn) return;

    dispatch(fetchContactsRequest());
  }, [dispatch, isLoggedIn]);

  useEffect(() => {
    if (errorContacts) toast.error(errorContacts);
  }, [errorContacts]);

  return (
    <>
      <ContainerStyled>
        <h2 style={{ marginBottom: '40px', fontSize: '2em' }}>Contacts</h2>
        <div className="main-container">
          <ContactForm />
          {!contacts.length ? (
            <StyledDiv>There are no contacts in your phone book.</StyledDiv>
          ) : (
            <div className="sub-container">
              <Filter />
              <ContactList />
            </div>
          )}
        </div>
      </ContainerStyled>

      <Toaster />
    </>
  );
}

export default WithAuthRedirect(ContactsPage, '/');
