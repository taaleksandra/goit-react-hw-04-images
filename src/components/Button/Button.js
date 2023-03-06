import React from 'react';
import clsx from 'clsx';
import { PropTypes } from 'prop-types';

import css from '../Button/Button.module.css';

export const Button = ({ onClick }) => (
  <button onClick={onClick} className={clsx(css.Button)}>
    Load more
  </button>
);

Button.propTypes = {
  onClick: PropTypes.func,
};
