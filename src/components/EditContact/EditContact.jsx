import PropTypes from 'prop-types';
import { Box, Button, Input, useDisclosure } from '@chakra-ui/react';
import { useRef } from 'react';
import { ChangeContactForm, CollapseStyled } from './EditContact.styled';

export const EditContact = ({ onSubmit }) => {
  const numberInputRef = useRef();
  const nameInputRef = useRef();

  const handelSubmit = event => {
    event.preventDefault();

    const formData = {
      number: numberInputRef.current.value,
      name: nameInputRef.current.value,
    };

    onSubmit(formData);
    event.target.reset();
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

EditContact.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
