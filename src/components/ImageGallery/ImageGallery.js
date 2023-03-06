import React from 'react';
import clsx from 'clsx';

import css from '../ImageGallery/ImageGallery.module.css';

export const ImageGallery = ({ children }) => (
  <ul className={clsx(css.ImageGallery)}>{children}</ul>
);
