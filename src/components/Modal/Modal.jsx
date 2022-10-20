import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Overlay, ModalWindow, ModalImg } from './Modal.styled';

export const Modal = ({ img, alt, closeByEsc, closeByBackdrop }) => {
  useEffect(() => {
    window.addEventListener('keydown', closeByEsc);

    return () => {
      window.removeEventListener('keydown', closeByEsc);
    };
  }, [closeByEsc]);

  return (
    <Overlay className="overlay" onClick={closeByBackdrop}>
      <ModalWindow className="modal">
        <ModalImg src={img} alt={alt} />
      </ModalWindow>
    </Overlay>
  );
};

Modal.propTypes = {
  img: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  closeByEsc: PropTypes.func.isRequired,
  closeByBackdrop: PropTypes.func.isRequired,
};
