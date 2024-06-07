import { Component } from "react";
import styles from "./SingleContact.module.scss";

export default class SingleContact extends Component {
  render() {
    const { contact } = this.props;
    return (
      <li key={contact.id} className={styles.contact}>
        {contact.name}: {contact.number}
      </li>
    );
  }
}
