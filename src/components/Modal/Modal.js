import React from 'react';
import clsx from 'clsx';
import { PropTypes } from 'prop-types';

import css from '../Modal/Modal.module.css';

export const Modal = ({ modalImg, onModalClick }) => (
  <div onClick={onModalClick} className={clsx(css.Overlay)}>
    <div className={clsx(css.Modal)}>
      <img src={modalImg.largeImageURL} alt={modalImg.tags} />
    </div>
  </div>
);

Modal.propTypes = {
  modalImg: PropTypes.object,
  onModalClick: PropTypes.func,
};
