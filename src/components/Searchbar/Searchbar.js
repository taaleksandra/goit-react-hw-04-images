import React from 'react';
import clsx from 'clsx';
import { PropTypes } from 'prop-types';

import css from '../Searchbar/Searchbar.module.css';

export const Searchbar = ({ onSubmit }) => {
  const handleSubmit = evt => {
    evt.preventDefault();
    const form = evt.currentTarget;
    const searchQuery = form.elements.search.value;
    form.reset();
    onSubmit(searchQuery);
  };

  return (
    <header className={clsx(css.Searchbar)}>
      <form onSubmit={handleSubmit} className={clsx(css.SearchForm)}>
        <button type="submit" className={clsx(css.SearchFormButton)}>
          <span className={clsx(css.SearchFormButtonLabel)}>Search</span>
        </button>

        <input
          className={clsx(css.SearchFormInput)}
          name="search"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </form>
    </header>
  );
};

Searchbar.propTypes = {
  onSubmit: PropTypes.func,
};
