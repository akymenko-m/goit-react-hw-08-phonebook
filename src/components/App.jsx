import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getContacts, getIsloading } from 'redux/selectors';
import { fetchContacts } from 'redux/operations';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { Main, Title, SubTitle, Notice } from './App.styled';
import { Loader } from 'components/Loader/Loader';

export const App = () => {
  const contacts = useSelector(getContacts);
  const isLoading = useSelector(getIsloading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Main>
      {isLoading && <Loader />}

      <Title>Phonebook</Title>
      <ContactForm />

      <SubTitle>Contacts</SubTitle>

      {contacts.length > 0 && <Filter />}

      {contacts.length === 0 ? (
        <Notice>You don't have contacts yet...</Notice>
      ) : (
        <ContactList />
      )}
    </Main>
  );
};
