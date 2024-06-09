import { Component } from "react";
import styles from "./SingleContact.module.scss";

export default class SingleContact extends Component {
  handleDelete = () => {
    const { contact, onDelete } = this.props;
    onDelete(contact.id);
  };

  render() {
    const { contact } = this.props;
    return (
      <li key={contact.id} className={styles.contact}>
        <span className={styles.contactName}> {contact.name}:</span>
        <span className={styles.contactNumber}>{contact.number}</span>
        <button
          type="button"
          className={styles.deleteBtn}
          onClick={this.handleDelete}>
          Delete
        </button>
      </li>
    );
  }
}
