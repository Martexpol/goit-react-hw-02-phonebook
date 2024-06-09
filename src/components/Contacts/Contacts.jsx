import { Component } from "react";
import styles from "./Contacts.module.scss";
import SingleContact from "../SingleContact/SingleContact";

export default class Contacts extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     contacts: [],
  //     filter: "",
  //   };
  // }
  handleFilterChange = (event) => {
    this.setState({ filter: event.target.value });
  };
  render() {
    const { contacts, filter, onDelete } = this.props;

    const filteredContacts = contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase()),
    );
    return (
      <div>
        <ul>
          {filteredContacts.map((contact) => (
            <SingleContact
              key={contact.id}
              contact={contact}
              onDelete={onDelete}
            />
          ))}
        </ul>
      </div>
    );
  }
}
