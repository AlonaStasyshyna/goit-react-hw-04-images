import { Component } from 'react';
import { fetchApi } from 'fetchApi/fetchApi';
import { mapper } from 'utils/mapper';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';
import { Loader } from './Loader/Loader';
import { Container } from './App.styled';

export class App extends Component {
  state = {
    gallery: [],
    q: '',
    page: 1,
    perPage: 12,
    totalHits: null,
    isLoading: false,
    error: null,
  };

  componentDidUpdate(_, prevState) {
    const { page, q, perPage } = this.state;

    if (q !== prevState.q || page !== prevState.page) {
      this.fetchGallery(q, page, perPage);
    }
  }

  fetchGallery = async (q, page, perPage) => {
    const message = 'Nothing to show! Please, change yor request.';

    try {
      this.setState({ isLoading: true });
      const resp = await fetchApi(q, page, perPage);

      if (!resp.data.hits.length) {
        throw new Error(message);
      }

      const { hits, totalHits } = resp.data;

      this.setState(prevState => ({
        gallery: [...prevState.gallery, ...mapper(hits)],
        totalHits,
      }));
    } catch {
      this.setState({ error: message });
    } finally {
      this.setState({ isLoading: false });
    }
  };

  onSubmit = e => {
    e.preventDefault();
    this.setState({
      q: e.target.elements.q.value.toLowerCase().trim(),
      gallery: [],
      page: 1,
      totalHits: null,
      error: null,
    });
  };

  loadMore = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  getTotalPages = () => Math.ceil(this.state.totalHits / this.state.perPage);

  render() {
    const { onSubmit, loadMore, getTotalPages } = this;
    const { gallery, page, totalHits, isLoading, error } = this.state;

    return (
      <Container>
        <Searchbar onSubmit={onSubmit} />
        <ImageGallery gallery={gallery} />
        {isLoading && <Loader />}
        {error && <h2>{error}</h2>}
        {totalHits && page < getTotalPages() && <Button onClick={loadMore} />}
      </Container>
    );
  }
}
