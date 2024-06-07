import { Component } from "react";
import styles from "./Filter.module.scss";

export default class Filter extends Component {
  state = {
    contacts: [],
    filter: "",
    name: "",
    number: "",
  };

  render() {
    return (
      <div className={styles.filterContainer}>
        <label className={styles.label}>Find contacts by name</label>
        <input
          className={styles.input}
          type="text"
          value={this.props.filter}
          onChange={this.props.onFilterChange}
        />
      </div>
    );
  }
}
