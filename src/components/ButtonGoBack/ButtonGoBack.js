import PropTypes from "prop-types";

//  Scss
import "./ButtonGoBack.scss";

const ButtonGoBack = ({ label = "", action }) => {
  const handleAction = () => {
    action();
  };

  return (
    <button className="go-back" onClick={handleAction}>
      {label}
    </button>
  );
};

ButtonGoBack.propTypes = {
  label: PropTypes.string.isRequired,
};

ButtonGoBack.defaultProps = {
  action: () => null,
};

export default ButtonGoBack;
