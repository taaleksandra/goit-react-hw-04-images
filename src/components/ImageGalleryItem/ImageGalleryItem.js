import React from 'react';
import clsx from 'clsx';
import { PropTypes } from 'prop-types';

import css from '../ImageGalleryItem/ImageGalleryItem.module.css';

export const ImageGalleryItem = ({ images, onImgClick }) => (
  <>
    {images.map(image => (
      <li key={image.id} className={clsx(css.ImageGalleryItem)}>
        <img
          id={image.id}
          onClick={onImgClick}
          className={clsx(css.ImageGalleryItemImage)}
          src={image.webformatURL}
          alt={image.tags}
        />
      </li>
    ))}
  </>
);

ImageGalleryItem.propTypes = {
  images: PropTypes.array,
  onImgClick: PropTypes.func,
};
