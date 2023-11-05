import React, {Component} from "react";
import PropTypes from 'prop-types';
import {toast} from "react-toastify";
import styles from "./Searchbar.module.css";


class Searchbar extends Component {
    state = {
        imageName: "",
    };

    handleChange = (e) => {
      this.setState({imageName: e.currentTarget.value.toLowerCase()});
    };

    handleSubmit = (e) => {
      e.preventDefault();

      if(this.state.imageName.trim() === "") {
        toast.error("please fill out the field");
        return;
      }

      this.props.onSubmit(this.state.imageName);
      this.setState({imageName: ""});
    };

    render(){
      return(
       <header className={styles.searchbar}>
  <form onSubmit = {this.handleSubmit} className={styles.SearchForm}>
    <button type="submit" className={styles.SearchForm_button}>
      <span className={styles.buttonLabel}>Search</span>
    </button>

    <input
      className={styles.SearchInput}
      type="text"
      autoComplete="off"
      autoFocus
      placeholder="Search images and photos"
      value={this.state.imageName}
      onChange={this.handleChange}
    />
  </form>
</header> 
      );
    }
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
}
export default Searchbar;