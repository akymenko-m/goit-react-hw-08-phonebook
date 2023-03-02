import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getContacts, getIsloading } from 'redux/contacts/selectors';
import { fetchContacts } from 'redux/contacts/operations';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { Title, Notice } from './ContactsPage.styled';
import { Loader } from 'components/Loader/Loader';
import { Heading } from '@chakra-ui/react';

export const ContactsPage = () => {
  const contacts = useSelector(getContacts);
  const isLoading = useSelector(getIsloading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      {isLoading && <Loader />}

      <Title>Your phonebook</Title>

      <ContactForm />

      <Heading>Contacts</Heading>

      {contacts.length > 0 && <Filter />}

      {contacts.length === 0 ? (
        <Notice>You don't have contacts yet...</Notice>
      ) : (
        <ContactList />
      )}
    </div>
  );
};
