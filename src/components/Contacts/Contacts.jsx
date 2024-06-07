import { Component } from "react";
import styles from "./Contacts.module.scss";
import SingleContact from "../SingleContact/SingleContact";
import Filter from "../Filter/Filter";

export default class Contacts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filter: "",
    };
  }
  handleFilterChange = (event) => {
    this.setState({ filter: event.target.value });
  };

  render() {
    const { contacts } = this.props;
    const { filter } = this.state;

    const filteredContacts = contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase()),
    );
    return (
      <div className={styles.contactsContainer}>
        <h2>Contacts</h2>
        <Filter filter={filter} onFilterChange={this.handleFilterChange} />
        <ul>
          {filteredContacts.map((contact) => (
            <SingleContact key={contact.id} contact={contact} />
          ))}
        </ul>
      </div>
    );
  }
}
