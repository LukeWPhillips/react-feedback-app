import PropTypes from "prop-types";

// setting styling for all headers

function Header({ text, bgColor, textColor }) {
  const headerStyles = {
    backgroundColor: bgColor,
    color: textColor,
  };

  // below is twoi ways of styling the header
  // one using the above styling function the other inline

  // example of inline styles below {{double curly braces needed}}
  /* // <header style={{ backgroundColor: 'blue', color: 'red' }}> */

  return (
    <header style={headerStyles}>
      <div className="container">
        <h2>{text}</h2>
      </div>
    </header>
  );
}

// SET props defaults for the Header component
Header.defaultProps = {
  text: "Feedback UI",
  bgColor: "rgba(0,0,0,0.4)",
  textColor: "#ff6a95",
};

// proptypes you can specify a property typecheck the header has to be
// bolean, string, number etc a menu appears of options when we put propTypes.
// make sure to import proptypes at top

Header.propTypes = {
  text: PropTypes.string,
  bgColor: PropTypes.string,
  textColor: PropTypes.string,
};

export default Header;
