// CARD component used on across all

// have to use children to allow use of the component
// acroos multiple and different contents so thge children(components) can use card and insert the content
// basically a style component to be used over and over
// the className is styled in css

// below is a conditional className which allows style to be reversed
// card.reverse is the className  set in css
// or use a conditional styling
// just to show how it can have multiple styles, the classname would need to be altered

import PropTypes from "prop-types";

function Card({ children, reverse }) {
  //   return <div className={`card ${reverse && "reverse"}`}>{children}</div>;

  return (
    <div
      className="card"
      style={{
        backgroundColor: reverse ? "rgba(0,0,0,0.4)" : "#fff",
        color: reverse ? "#fff" : "#000",
      }}
    >
      {children}
    </div>
  );
}

Card.defaultProps = {
  reverse: false,
};

Card.propTypes = {
  children: PropTypes.node.isRequired,
  reverse: PropTypes.bool,
};

export default Card;

// so now if card reverse is passed into the card in feeedback item
// the style is changed
