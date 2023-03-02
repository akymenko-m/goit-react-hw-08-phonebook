import { EditContact } from 'components/EditContact/EditContact';
import { Button } from '@chakra-ui/react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/operations';
import { BtnBlock, ElContact, Name, Number } from './ContactElement.styled';

export const ContactElement = ({ id, name, number }) => {
  const dispatch = useDispatch();

  const handleDelete = id => {
    dispatch(deleteContact(id));
  };

  // const handleEdit = id => {
  //   // console.log(id);
  //   dispatch(updateContact(id));
  // };

  return (
    <>
      <ElContact key={name}>
        <Name>Name: {name}</Name>
        <Number>Phone-number: {number}</Number>

        <BtnBlock>
          <Button
            type="button"
            onClick={() => handleDelete(id)}
            colorScheme="teal"
            variant="outline"
            size="xs"
          >
            Delete
          </Button>

          {/* <button type="button" onClick={() => handleEdit(id)}>
          Edit
        </button> */}
          <EditContact id={id} />
        </BtnBlock>
      </ElContact>
    </>
  );
};

ContactElement.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
