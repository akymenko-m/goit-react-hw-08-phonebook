import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { Main, Title, SubTitle, Notice } from './App.styled';
import { getContacts } from 'redux/selectors';
import { useSelector } from 'react-redux';

export const App = () => {
  const contacts = useSelector(getContacts);

  return (
    <Main>
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
