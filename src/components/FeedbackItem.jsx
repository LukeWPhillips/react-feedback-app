// useState is a hook
// all hooks start with use

// State is essentially the data or information about a component
// 2 types= component level(individual component)
// or app lvele/global(multiple components)

// import {the font you want} from fontawesome
// which was installed in terminal npm i react-icons
// first exit server

import { FaTimes, FaEdit } from "react-icons/fa";
import PropTypes from "prop-types";
import Card from "./shared/Card";
import { useContext } from "react";
import FeedbackContext from "../context/FeedbackContext";

function FeedbackItem({ item }) {
  const { deleteFeedback, editFeedback } = useContext(FeedbackContext);

  return (
    <Card>
      <div className="num-display">{item.rating}</div>
      <button onClick={() => deleteFeedback(item.id)} className="close">
        <FaTimes color="purple" />
      </button>
      <button onClick={() => editFeedback(item)} className="edit">
        <FaEdit color="purple" />{" "}
      </button>
      <div className="text-display">{item.text}</div>
    </Card>
  );
}

FeedbackItem.propTypes = {
  item: PropTypes.object.isRequired,
};

export default FeedbackItem;

// EXAMPLE OF STATE
// STATE IS JUST A SET STATE OF SOMETHING
// if you want to change your state you have to call setrating or text
// and chabge what you want like the handle click event
// when clicked it changes the state to 10

// import { useState} from 'react'

// function FeedbackItem() {

// const [rating, setRating] = useState(7)
// const [text, setText] = useState ('This is an example of
// a feedback item')

// const handleClick = () => {
//   setRating(10)
// }

//   return (
//     <Card>
//       <div className="num-display">{rating}</div>
//       <button onClick={handleClick}> Click
//       </button>
//       <div className="text-display">{text}</div>
//     </Card>
//   );
// }
