import { Component } from 'react';
import storage from '../helpers/storage';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { nanoid } from 'nanoid';
import { Main, Title, SubTitle, Notice } from './App.styled';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  componentDidMount() {
    const savedContacts = storage.load('contacts-list') ?? [];
    this.setState({ contacts: savedContacts });
    console.log('yes');
  }
  componentDidUpdate(_, prevState) {
    const { contacts } = this.state;
    if (prevState.contacts !== contacts) {
      storage.save('contacts-list', contacts);
      // console.log(contacts);
    }
  }

  addFfiend = contact => {
    if (
      this.state.contacts.some(
        el => el.name.toLowerCase().trim() === contact.name.toLowerCase().trim()
      )
    ) {
      alert(`${contact.name} is already in contacts!`);
      return;
    }

    this.setState(prevState => {
      return {
        contacts: [...prevState.contacts, { ...contact, id: nanoid() }],
      };
    });
  };

  handleFilter = ({ target: { value } }) => {
    this.setState({ filter: value });
  };

  filteredContacts = () => {
    return this.state.contacts.filter(contact =>
      contact.name
        .toLowerCase()
        .trim()
        .includes(this.state.filter.toLowerCase())
    );
  };

  deleteContact = contactId => {
    this.setState({
      contacts: this.state.contacts.filter(contact => contact.id !== contactId),
    });
  };

  render() {
    const filteredContacts = this.filteredContacts();
    return (
      <Main>
        <Title>Phonebook</Title>
        <ContactForm onSubmit={this.addFfiend} />

        <SubTitle>Contacts</SubTitle>
        {this.state.contacts.length > 0 ? (
          <Filter onChange={this.handleFilter} value={this.state.filter} />
        ) : (
          <Notice>You don't have contacts yet...</Notice>
        )}
        <ContactList
          contactsList={filteredContacts}
          deleteContact={this.deleteContact}
        />
      </Main>
    );
  }
}
