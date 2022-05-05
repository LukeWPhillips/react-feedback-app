import { FaQuestion } from "react-icons/fa";
import { Link } from "react-router-dom";

// use link instead of <a> tag this links internally where as a tag
// reloads the page(good for going to external page)

function AboutIconLinks() {
  return (
    <div className="about-link">
      <Link to="/about">
        <FaQuestion size={30} />
      </Link>
    </div>
  );
}

export default AboutIconLinks;
