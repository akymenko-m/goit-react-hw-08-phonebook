import { EditContact } from 'components/EditContact/EditContact';
import { Button } from '@chakra-ui/react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact, updateContact } from 'redux/contacts/operations';
import { BtnBlock, ElContact, Name, Number } from './ContactElement.styled';

export const ContactElement = ({ id, name, number }) => {
  const dispatch = useDispatch();

  const handleDelete = id => {
    dispatch(deleteContact(id));
  };

  const handleEdit = formData => {
    dispatch(updateContact({ id, formData }));
  };

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

          <EditContact onSubmit={handleEdit} />
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
