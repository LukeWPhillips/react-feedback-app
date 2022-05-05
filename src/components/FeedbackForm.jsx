// (e) is the event parameter so we can get whatever is tyepd in
// using the state sop that whatever is being typed in is
// being set tothat state (look in inspect-components-state )

// btn disabled state is default set to true  (styling in css for disabled)

import Card from "./shared/Card";

import Button from "./shared/Button";
import RatingSelect from "./RatingSelect";
import { useState, useContext, useEffect } from "react";
import FeedbackContext from "../context/FeedbackContext";

function FeedbackForm() {
  const [text, setText] = useState("");
  const [rating, setRating] = useState(10);
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [message, setMessage] = useState("");

  const { addFeedback, feedbackEdit, updateFeedback } =
    useContext(FeedbackContext);

  useEffect(() => {
    if (feedbackEdit.edit === true) {
      setBtnDisabled(false);
      setText(feedbackEdit.item.text);
      setRating(feedbackEdit.item.rating);
    }
  }, [feedbackEdit]);

  const handleTextChange = (e) => {
    if (text === "") {
      setBtnDisabled(true);
      setMessage(null);
    } else if (text !== "" && text.trim().length <= 10) {
      setMessage("Text must be at least 10 characters");
      setBtnDisabled(true);
    } else {
      setMessage(null);
      setBtnDisabled(false);
    }

    setText(e.target.value);
    // console.log(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim().length > 10) {
      const newFeedback = {
        text,
        rating,
      };

      if (feedbackEdit.edit === true) {
        updateFeedback(feedbackEdit.item.id, newFeedback);
      } else {
        addFeedback(newFeedback);
      }
      addFeedback(newFeedback);
      setText("");
    }
  };

  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2>How would you rate your service with us?</h2>
        <RatingSelect select={(rating) => setRating(rating)} />
        <div className="input-group">
          <input
            onChange={handleTextChange}
            type="text"
            placeholder="Write a review"
            value={text}
          />
          <Button type="submit" isDisabled={btnDisabled}>
            Send
          </Button>
        </div>
        {message && <div className="message">{message}</div>}
      </form>
    </Card>
  );
}

export default FeedbackForm;

// CONDITIONALS EXPLAINED

// if theres a message then create a div with a classname of message
// with the actual message

// {message && <div className="message">{message}</div>}

// if the text is equal to nothing we want to call setbtdisabled to true
// and message null so show nothing
// else if the text is not equal to noithing and the text trim white space and less than or equal to 10
// else  the there at least ten caharacters then change button to true

// if (text === "") {
//     setBtnDisabled(true);
//     setMessage(null);
//   } else if (text !== "" && text.trim().length <= 10) {
//     setMessage("Text must be at least 10 characters");
//     setBtnDisabled(true);
//   } else {
//     setMessage(null);
//     setBtnDisabled(false);
//   }
