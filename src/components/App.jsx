import { Component } from "react";
import styles from "./App.module.scss";
import Contacts from "./Contacts/Contacts";
import Phonebook from "./Phonebook/Phonebook";
import Filter from "./Filter/Filter";

class App extends Component {
  constructor() {
    super();
    this.state = { contacts: [], filter: "" };
  }

  addContact = (contact) => {
    this.setState((prevState) => ({
      contacts: [...prevState.contacts, contact],
    }));
  };

  handleDelete = (contactId) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter(
        (contact) => contact.id !== contactId,
      ),
    }));
  };

  handleFilterChange = (event) => {
    this.setState({ filter: event.target.value });
  };

  render() {
    const { filter, contacts } = this.state;
    return (
      <>
        <div className={styles.main}>
          {" "}
          <h1 className={styles.mainHeader}>
            React Homework 3 Phonebook (Vite)
          </h1>
        </div>
        <div className={styles.container}>
          <h1>Phonebook</h1>
          <Phonebook addContact={this.addContact} contacts={contacts} />
        </div>
        <div className={styles.container}>
          <h2>Contacts</h2>
          <Filter filter={filter} onFilterChange={this.handleFilterChange} />
          <Contacts
            contacts={contacts}
            filter={filter}
            onDelete={this.handleDelete}
          />
        </div>
      </>
    );
  }
}

export default App;
