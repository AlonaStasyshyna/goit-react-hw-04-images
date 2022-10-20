export const mapper = gallery => {
  return gallery.map(({ id, webformatURL: img, largeImageURL: largeImg, tags }) => ({
    id,
    img,
    largeImg,
    tags,
  }));
};
