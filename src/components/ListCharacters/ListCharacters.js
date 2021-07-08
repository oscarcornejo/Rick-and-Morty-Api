import PropTypes from "prop-types";

//  react-router-dom
import { useHistory } from "react-router-dom";

// Components
import CharacterCard from "../CharacterCard/CharacterCard";

// scss
import "./ListCharacters.scss";

const ListCharacters = ({ personajes, loading = false }) => {
  const history = useHistory();

  const handleDetallePersonaje = (id) => {
    history.push(`/personaje/${id}`);
  };

  return (
    <div className="list-characters">
      {personajes?.map((item) => (
        <CharacterCard key={item.id} item={item} handleDetallePersonaje={handleDetallePersonaje} />
      ))}
    </div>
  );
};

ListCharacters.propTypes = {
  personajes: PropTypes.array.isRequired,
};

export default ListCharacters;
