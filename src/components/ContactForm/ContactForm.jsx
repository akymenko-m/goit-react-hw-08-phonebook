import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { getContacts } from 'redux/contacts/selectors';
import { Form, Label } from './ContactFofm.styled';
import { addContact } from 'redux/contacts/operations';
import { Button, Input } from '@chakra-ui/react';

export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const inputChange = event => {
    const { name, value } = event.target;

    if (name === 'name') {
      setName(value);
      return;
    }

    if (name === 'number') {
      setNumber(value);
      return;
    }
  };

  const handleSubmit = event => {
    event.preventDefault();

    if (
      contacts.some(
        el => el.name.toLowerCase().trim() === name.toLowerCase().trim()
      )
    ) {
      toast.info(`${name} is already in contacts!`);
      return;
    }
    reset();

    dispatch(addContact({ name, number }));
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <>
      <ToastContainer />
      <Form onSubmit={handleSubmit}>
        <Label htmlFor="name">Name</Label>
        <Input
          variant="filled"
          placeholder="Harry Bin"
          id="name"
          type="text"
          name="name"
          onChange={inputChange}
          value={name}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />

        <Label htmlFor="number">Number</Label>
        <Input
          variant="filled"
          placeholder="+380"
          id="number"
          type="tel"
          name="number"
          onChange={inputChange}
          value={number}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
        {/* <BtnAddContact type="submit">Add contact</BtnAddContact> */}
        <Button type="submit" colorScheme="teal" size="md">
          Add contact
        </Button>
      </Form>
    </>
  );
};
