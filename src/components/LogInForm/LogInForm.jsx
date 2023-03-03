import PropTypes from 'prop-types';
import { Button, Input } from '@chakra-ui/react';
import { useRef } from 'react';
import { Form, Label } from './LogInForm.styled';

export const LogInForm = ({ onSubmit }) => {
  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  const handelSubmit = event => {
    event.preventDefault();

    const formData = {
      email: emailInputRef.current.value,
      password: passwordInputRef.current.value,
    };

    onSubmit(formData);
    event.target.reset();
  };

  return (
    <Form onSubmit={handelSubmit}>
      <Label htmlFor="email">Email</Label>
      <Input
        variant="filled"
        ref={emailInputRef}
        type="email"
        name="email"
        required
        id="email"
        placeholder="email@mail.com"
      />

      <Label htmlFor="password">Password</Label>
      <Input
        variant="filled"
        ref={passwordInputRef}
        type="password"
        name="password"
        required
        id="password"
        placeholder="Enter password"
      />

      <Button type="submit" colorScheme="teal" variant="solid">
        Log In
      </Button>
    </Form>
  );
};

LogInForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
