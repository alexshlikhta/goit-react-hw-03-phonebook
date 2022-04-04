import "./App.scss";
import React, { Component } from "react";
import { nanoid } from "nanoid";
import Filter from "./components/Filter";
import ContactForm from "./components/ContactForm";
import ContactList from "./components/ContactList";
import Container from "./components/Container";

export default class App extends Component {
  state = {
    contacts: [
      { id: nanoid(), name: "eddy", number: "1291251" },
      { id: nanoid(), name: "charly", number: "4338912" },
      { id: nanoid(), name: "sven", number: "6781779" },
      { id: nanoid(), name: "ranger", number: "1289126" },
    ],
    filter: "",
  };

  handleSubmit = (state) => {
    if (
      !this.state.contacts.filter(
        (el) => el.name.toLowerCase() === state.name.toLowerCase()
      ).length > 0
    ) {
      this.setState((prevState) => ({
        contacts: [
          ...prevState.contacts,
          { name: state.name, number: state.number, id: nanoid() },
        ],
      }));
    } else {
      alert(`${state.name} is already in contacts`);
    }
  };

  handleDeleteItem = (id) => {
    this.setState(({ contacts }) => ({
      contacts: contacts.filter((contact) => contact.id !== id),
    }));
  };

  searchContact = (e) => {
    this.setState({ filter: e.currentTarget.value });
  };

  filteredContacts = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();
    const filteredContacts = contacts.filter((contact) =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
    return filteredContacts;
  };

  componentDidMount() {
    const storage = JSON.parse(localStorage.getItem("contacts"));
    if (storage) this.setState(() => ({ contacts: storage }));
  }

  componentDidUpdate() {
    localStorage.setItem("contacts", JSON.stringify(this.state.contacts));
  }

  render() {
    const { filter } = this.state.filter;

    return (
      <>
        <Container>
          <h1>Phonebook</h1>

          <ContactForm onSubmit={this.handleSubmit} />
        </Container>

        <Container>
          <h1>Contacts</h1>

          <Filter filter={filter} onChange={this.searchContact} />

          <ContactList
            filteredContacts={this.filteredContacts()}
            handleClick={this.handleDeleteItem}
          />
        </Container>
      </>
    );
  }
}
