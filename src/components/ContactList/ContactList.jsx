import { useSelector } from 'react-redux';
import { getFilteredContacts } from 'redux/selectors';
import { ContactElement } from '../ContactElement/ContactElement';
import { ListContact } from './ContactList.styled';

export const ContactList = () => {
  const contacts = useSelector(getFilteredContacts);

  return (
    <>
      {contacts.length > 0 ? (
        <ListContact>
          {contacts.map(contact => {
            return <ContactElement key={contact.id} {...contact} />;
          })}
        </ListContact>
      ) : (
        <p>You don't have this contact.</p>
      )}
    </>
  );
};
