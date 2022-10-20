import PropTypes from 'prop-types';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { GalleryList } from './ImageGallery.styled';

export const ImageGallery = ({ gallery }) => {
  return (
    <GalleryList className="gallery">
      {gallery.map(galleryItem => (
        <ImageGalleryItem
          key={galleryItem.id}
          img={galleryItem.img}
          largeImg={galleryItem.largeImg}
          alt={galleryItem.tags}
        />
      ))}
    </GalleryList>
  );
};

ImageGallery.protoTypes = {
  gallery: PropTypes.array.isRequired,
};
