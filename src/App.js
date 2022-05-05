//COMPONENTS

// JSX returned from react components
// basically allows to write html in components

// you cant have two or more elements (h1 and then a h2 etc)
// always have to have just one parent element
// eg

// this not allowed;
// return (
// <h1>Hello from the app component</h1>
// <p>Hello</p>
// )

// ALLOWED - ONE PARENT!
// return (

// <h1>Hello from the app component</h1>
// <p>Hello</p>
// </div>
// )

//<div> IF YOU DONT WANT A DIV HERE USE FRAGMENTS <> </>

// cant use class has to be className
// instead of <input - for use htmlFor

import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";

import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AboutPage from "./pages/AboutPage";
import { FeedbackProvider } from "./context/FeedbackContext";
import AboutIconLinks from "./components/AboutIconLinks";

function App() {
  // feedback is the prop and pass in the feedback array

  //   route allows you to navigate pages in url
  // Routes needs to be wrapped in Router
  //   Route needs to be wrapped in Routes

  // use exact otherwise it sees / as /about an loads /about

  return (
    <FeedbackProvider>
      <Router>
        <Header />
        <div className="container">
          <Routes>
            <Route
              exact
              path="/"
              element={
                <>
                  <FeedbackForm />
                  <FeedbackStats />
                  <FeedbackList />
                </>
              }
            ></Route>
            <Route path="/about" element={<AboutPage />} />
          </Routes>
          <AboutIconLinks />
        </div>
      </Router>
    </FeedbackProvider>
  );
}

// functional component example with javascript
// any js expressions in {}

// function App() {

//     const title = 'blog post'
//     const body = 'this is my blog post'
//     const comments = [
//         { id: 1, text: 'comment 1' },
//         { id: 2, text: 'comment 2' },
//         { id: 3, text: 'comment 3' },

//     ]

//     return (
//         <div className='container'>
//             <h1>{title}</h1>
//             <p>{body}</p>
//             {Math.random() * 5 + 5}

//             <div className='comments'>
//                 <h2>Comments ({comments.length})</h2>
//                 <ul>
//                     {comments.map((comment, index) => (
//                         <li key={index}>{comment.text}</li>
//                     ))}
//                 </ul>
//             </div>

//         </div>

//     )
// }

// when using a list using .map have to add a key to child element

export default App;
