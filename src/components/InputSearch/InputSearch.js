import PropTypes from "prop-types";

// Scss
import "./InputSearch.scss";

const InputSearch = ({ term = "", handleSearch }) => {
  const getSearchterm = (e) => {
    handleSearch(e.target.value);
  };

  return (
    <div className="input-search">
      <input
        type="text"
        className="input-search__input"
        placeholder="Buscar por Personaje..."
        value={term}
        onChange={getSearchterm}
      />
    </div>
  );
};

InputSearch.propTypes = {
  term: PropTypes.string.isRequired,
};

InputSearch.defaultProps = {
  handleSearch: () => null,
};

export default InputSearch;
