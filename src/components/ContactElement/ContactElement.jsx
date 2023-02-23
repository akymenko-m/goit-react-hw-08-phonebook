import PropTypes from 'prop-types';
import { deleteContact } from 'redux/contactsSlice';
import { useDispatch } from 'react-redux';
import { ElContact, Name, Number, BtnDelete } from './ContactElement.styled';

export const ContactElement = ({ id, name, number }) => {
  const dispatch = useDispatch();
  return (
    <>
      <ElContact key={name}>
        <Name>Name: {name}</Name>
        <Number>Phone-number: {number}</Number>

        <BtnDelete type="button" onClick={() => dispatch(deleteContact(id))}>
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
};
