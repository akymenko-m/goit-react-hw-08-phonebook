import PropTypes from 'prop-types';
import { ElContact, Name, Number, BtnDelete } from './ContactElement.styled';

export const ContactElement = props => {
  const { id, name, number, deleteContact = () => {} } = props;
  return (
    <>
      <ElContact key={name}>
        <Name>Name: {name}</Name>
        <Number>Phone-number: {number}</Number>
        <BtnDelete type="button" onClick={() => deleteContact(id)}>
          Delete
        </BtnDelete>
      </ElContact>
    </>
  );
};

ContactElement.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  deleteContact: PropTypes.func,
};
