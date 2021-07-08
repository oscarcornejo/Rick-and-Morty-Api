import PropTypes from "prop-types";

// Scss
import "./CharacterCard.scss";

const CharacterCard = ({ item, handleDetallePersonaje }) => {
  return (
    <div className="character-card">
      <div className="character-card__header">
        <img src={item.image} alt={item.name} />
      </div>

      <div className="character-card__content">
        <h2>{item.name}</h2>
        <p>{item.species}</p>
      </div>

      <div className="character-card__action">
        <button type="button" onClick={() => handleDetallePersonaje(item.id)}>
          Ver Personaje
        </button>
      </div>
    </div>
  );
};

CharacterCard.propTypes = {
  item: PropTypes.object.isRequired,
};

CharacterCard.defaultProps = {
  item: {},
  handleDetallePersonaje: () => null,
};

export default CharacterCard;
