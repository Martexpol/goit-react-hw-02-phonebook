import { Component } from "react";
import styles from "./App.module.scss";
import Contacts from "./Contacts/Contacts";
import Phonebook from "./Phonebook/Phonebook";

class App extends Component {
  constructor() {
    super();
    this.state = { contacts: [] };
  }

  addContact = (contact) => {
    this.setState((prevState) => ({
      contacts: [...prevState.contacts, contact],
    }));
  };

  render() {
    return (
      <>
        <div className={styles.main}>
          {" "}
          <h1 className={styles.mainHeader}>
            React Homework 3 Phonebook (Vite)
          </h1>
        </div>
        <div>
          <Phonebook addContact={this.addContact} />
          <Contacts contacts={this.state.contacts} />
        </div>
      </>
    );
  }
}

export default App;
