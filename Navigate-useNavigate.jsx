import { Navigate, useNavigate, useParams } from "react-router-dom";
import Card from "../components/shared/Card";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  NavLink,
} from "react-router-dom";

// useParams hook- allows to display the url params on the screen
// http://localhost:3000/about/200 or whatever the param is. id, name, number etc

// Navigate is a component - has tio be used on return. redirects to page

// useNavigate hook - can be used on a button to redirect

// Navlink - used to add style attribute to the active routes
// activeClassname (is just the class in css)
// when either of links are pressed the styling is switched or added

function Post() {
  const status = 200;
  const params = useParams();
  const navigate = useNavigate();

  if (status === 404) {
    console.log("it is set to 400");
    return <Navigate to="/notfound"></Navigate>;
  }

  const handleClick = () => {
    console.log("handleClick called");
    navigate("/about");
  };

  return (
    <Card>
      {/* navlink */}
      <NavLink to="/about" activeClassName="active">
        About
      </NavLink>
      <NavLink to="/Home" activeClassName="active">
        Home
      </NavLink>

      {/* params */}
      <p>Post No {params.id}</p>

      {/* useNavigate */}
      <button onClick={() => handleClick()}>Redirect</button>
    </Card>
  );
}

export default Post;

// You'll want to use Link or NavLink in almost all use cases.
// Navigate comes in handy in specific situations though, an example is when
//  a 404 page is rendered when the user tries to access an undefined route.
//   The Redirect will redirect the user from the 404 route to a new route of
//    your choosing, and then
// replace the last entry in the history stack with the redirected route.
