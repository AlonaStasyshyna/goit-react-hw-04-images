import { useState, useEffect } from 'react';
import { fetchApi } from 'fetchApi/fetchApi';
import { mapper } from 'utils/mapper';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';
import { Loader } from './Loader/Loader';
import { Container } from './App.styled';

export const App = () => {
  const [gallery, setGallery] = useState([]);
  const [q, setQ] = useState('');
  const [page, setPage] = useState(1);
  const [totalHits, setTotalHits] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchGallery = async (q, page) => {
      const message = 'Nothing to show! Please, change yor request.';

      try {
        const {
          data: { hits, totalHits },
        } = await fetchApi(q, page);
        if (!hits.length) {
          throw new Error(message);
        }
        setGallery(prevState => [...prevState, ...mapper(hits)]);
        setTotalHits(totalHits);
      } catch (error) {
        setError(message);
      } finally {
        setIsLoading(false);
      }
    };

    if (q) {
      fetchGallery(q, page);
    }
  }, [q, page]);

  const onSubmit = e => {
    e.preventDefault();

    setQ(e.target.elements.q.value.toLowerCase().trim());
    setGallery([]);
    setPage(1);
    setTotalHits(null);
    setError(null);
  };

  const loadMore = () => {
    setPage(prevState => prevState + 1);
  };

  const getTotalPages = () => Math.ceil(totalHits / 12);

  return (
    <Container>
      <Searchbar onSubmit={onSubmit} />
      <ImageGallery gallery={gallery} />
      {isLoading && <Loader />}
      {error && <h2>{error}</h2>}
      {totalHits && page < getTotalPages() && <Button onClick={loadMore} />}
    </Container>
  );
};
