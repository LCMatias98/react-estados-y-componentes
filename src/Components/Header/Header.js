
import PropTypes from "prop-types";
import { memo } from "react";
//React.memo verifica que las propiedades no cambien 
//y no renderiza el component, se carga en memoria
const Header = memo(({ title }) => {
  return (
    <h1>{title} soy el Header 🔥🔥</h1>
  );
});

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
