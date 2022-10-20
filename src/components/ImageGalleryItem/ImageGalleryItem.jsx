import { useState } from 'react';
import PropTypes from 'prop-types';
import { Modal } from 'components/Modal/Modal';
import { GallaryItem, GallaryImg } from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({ img, largeImg, alt }) => {
  const [currentImage, setCurrentImage] = useState(null);

  const openModal = () => {
    setCurrentImage(largeImg);
  };

  const closeModal = () => {
    setCurrentImage(null);
  };

  const closeByEsc = e => {
    if (e.code === 'Escape') {
      closeModal();
    }
  };

  const closeByBackdrop = e => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  return (
    <>
      <GallaryItem className="gallery-item">
        <GallaryImg src={img} alt={alt} onClick={openModal} />
      </GallaryItem>

      {currentImage && (
        <Modal
          img={largeImg}
          alt={alt}
          closeByEsc={closeByEsc}
          closeByBackdrop={closeByBackdrop}
        />
      )}
    </>
  );
};

ImageGalleryItem.protoTypes = {
  key: PropTypes.number.isRequired,
  img: PropTypes.string.isRequired,
  largeImg: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};
