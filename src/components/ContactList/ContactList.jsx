import PropTypes from 'prop-types';
import { ContactElement } from '../ContactElement/ContactElement';
import { ListContact } from './ContactList.styled';

export const ContactList = props => {
  const { contactsList, deleteContact } = props;

  return (
    <>
      {contactsList.length > 0 && (
        <ListContact>
          {contactsList.map(contact => {
            return (
              <ContactElement
                key={contact.id}
                deleteContact={deleteContact}
                {...contact}
              />
            );
          })}
        </ListContact>
      )}
    </>
  );
};

ContactList.propTypes = {
  contactsList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  deleteContact: PropTypes.func,
};
