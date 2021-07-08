import PropTypes from "prop-types";

// react-router-dom
import { useHistory } from "react-router-dom";

// Components
import ButtonGoBack from "../ButtonGoBack/ButtonGoBack";

// Scss
import "./Character.scss";

const Character = ({ detailPersonaje }) => {
  const history = useHistory();

  const goBack = () => {
    history.goBack();
  };

  return (
    <div className="character">
      <div className="character__left">
        <img src={detailPersonaje.image} alt={detailPersonaje.name} />
      </div>

      <div className="character__right">
        <h2>{detailPersonaje.name}</h2>
        <p>{detailPersonaje.gender}</p>
        <p>{detailPersonaje.status}</p>
        <p>{detailPersonaje.species}</p>

        <ButtonGoBack label="Volver" action={goBack} />
      </div>
    </div>
  );
};

Character.propTypes = {
  detailPersonaje: PropTypes.object.isRequired,
};

Character.defaultProps = {
  detailPersonaje: {},
};

export default Character;
