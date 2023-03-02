import { Button, Input } from '@chakra-ui/react';
import { useRef } from 'react';
import { Form, Label } from './RegisterForm.styled';

export const RegisterForm = ({ onSubmit }) => {
  const nameInputRef = useRef();
  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  const handelSubmit = event => {
    event.preventDefault();

    const formData = {
      name: nameInputRef.current.value,
      email: emailInputRef.current.value,
      password: passwordInputRef.current.value,
    };
    console.log(formData);
    onSubmit(formData);

    event.target.reset();
  };

  return (
    <Form onSubmit={handelSubmit}>
      <Label htmlFor="name">Name</Label>
      <Input
        variant="filled"
        ref={nameInputRef}
        type="text"
        name="name"
        required
        id="name"
        placeholder="Harry Bin"
      />

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
        Sign Up
      </Button>
    </Form>
  );
};
