import PropTypes from 'prop-types';
import { Header, SearchForm, SearchFormButton, SearchFormInput } from './Searchbar.styled';

export const Searchbar = ({ onSubmit }) => {
  return (
    <Header className="searchbar">
      <SearchForm className="form" onSubmit={onSubmit}>
        <SearchFormButton className="button" type="submit">
          Search
        </SearchFormButton>

        <SearchFormInput
          className="input"
          type="text"
          name="q"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </SearchForm>
    </Header>
  );
};

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
