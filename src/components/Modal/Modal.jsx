import { Component } from 'react';
import PropTypes from 'prop-types';
import { Overlay, ModalWindow, ModalImg } from './Modal.styled';

export class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.closeByEsc);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.closeByEsc);
  }

  closeByEsc = e => {
    if (e.code === 'Escape') {
      this.props.closeModal();
    }
  };

  closeByBackdrop = e => {
    if (e.target === e.currentTarget) {
      this.props.closeModal();
    }
  };

  render() {
    const { img, alt } = this.props;

    return (
      <Overlay className="overlay" onClick={this.closeByBackdrop}>
        <ModalWindow className="modal">
          <ModalImg src={img} alt={alt} />
        </ModalWindow>
      </Overlay>
    );
  }
}

Modal.propTypes = {
  img: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  closeModal: PropTypes.func.isRequired,
};
