import { Box, Button, Input, useDisclosure } from '@chakra-ui/react';
import { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { updateContact } from 'redux/contacts/operations';
import { ChangeContactForm, CollapseStyled } from './EditContact.styled';

export const EditContact = ({ id }) => {
  console.log(id);
  const numberInputRef = useRef();
  const nameInputRef = useRef();
  const dispatch = useDispatch();

  const handelSubmit = event => {
    event.preventDefault();

    const formData = {
      number: numberInputRef.current.value,
      name: nameInputRef.current.value,
    };
    console.log(id, formData);
    // onSubmit(formData);
    dispatch(updateContact(id, formData));
    // event.target.reset();
  };

  function CollapseEx() {
    const { isOpen, onToggle } = useDisclosure();

    return (
      <>
        <Button
          type="button"
          onClick={onToggle}
          colorScheme="teal"
          variant="outline"
          size="xs"
        >
          Edit
        </Button>

        <CollapseStyled in={isOpen} animateOpacity>
          <Box p="20px" mt="4" bg="#86cfcf" rounded="md" shadow="md">
            <ChangeContactForm onSubmit={handelSubmit}>
              <Input
                ref={nameInputRef}
                type="text"
                name="name"
                required
                placeholder="Change name"
                bg="white"
              />

              <Input
                ref={numberInputRef}
                bg="white"
                type="tel"
                name="number"
                required
                placeholder="Change number"
              />

              <Button
                onClick={onToggle}
                type="submit"
                colorScheme="teal"
                variant="outline"
                bg="white"
              >
                Change contact
              </Button>
            </ChangeContactForm>
          </Box>
        </CollapseStyled>
      </>
    );
  }

  return CollapseEx();
};
