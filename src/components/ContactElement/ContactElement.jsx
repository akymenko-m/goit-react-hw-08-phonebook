import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/operations';
import { ElContact, Name, Number, BtnDelete } from './ContactElement.styled';

export const ContactElement = ({ id, name, phone }) => {
  const dispatch = useDispatch();

  const handleDelete = id => {
    dispatch(deleteContact(id));
  };

  return (
    <>
      <ElContact key={name}>
        <Name>Name: {name}</Name>
        <Number>Phone-number: {phone}</Number>

        <BtnDelete type="button" onClick={() => handleDelete(id)}>
          Delete
        </BtnDelete>
      </ElContact>
    </>
  );
};

ContactElement.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
};
