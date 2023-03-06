import React, { useState } from 'react';
import clsx from 'clsx';

import css from '../components/App.module.css';

import { fetchImg } from './PixabayApi/FetchImg';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { ImageGalleryItem } from './ImageGalleryItem/ImageGalleryItem';
import { Button } from './Button/Button';
import { Loader } from './Loader/Loader';
import { Modal } from './Modal/Modal';

export const App = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [images, setImages] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [modalImg, setModalImg] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleFetchImg = async searchQuery => {
    setIsLoading(true);
    setPageNumber(1);

    try {
      const images = await fetchImg(searchQuery, 1);
      setImages(images);
      setSearchQuery(searchQuery);
    } catch (err) {
      console.error(err);
    } finally {
      setPageNumber(pageNumber + 1);
      setIsLoading(false);
    }
  };

  const handleLoadMore = async () => {
    setIsLoading(true);

    try {
      const nextImages = await fetchImg(searchQuery, pageNumber);
      setImages(images.concat(nextImages));
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
      setPageNumber(pageNumber + 1);
    }
  };

  const handleModalOpen = evt => {
    const modalImgId = evt.currentTarget.id;

    const modalImg = images.find(image => image.id === Number(modalImgId));

    setModalImg(modalImg);
    setIsModalOpen(true);
  };

  const handleModalClose = evt => {
    if (evt.target.tagName.toLowerCase() !== 'img') {
      setIsModalOpen(false);
    }
    // this.setState({ isModalOpen: false });
  };

  return (
    <div className={clsx(css.App)}>
      <Searchbar onSubmit={handleFetchImg} />
      {isModalOpen && (
        <Modal modalImg={modalImg} onModalClick={handleModalClose} />
      )}
      <ImageGallery>
        <ImageGalleryItem images={images} onImgClick={handleModalOpen} />
      </ImageGallery>
      {isLoading && <Loader />}
      {images.length > 0 && <Button onClick={handleLoadMore} />}
    </div>
  );
};
