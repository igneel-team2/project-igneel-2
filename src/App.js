import React from "react";
// import logo from './logo.svg';
import "./App.css";
import { BrowserRouter, Route, Link } from "react-router-dom";
import Membership from "./components/membership";
import Homepage from "./components/homepage";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <h1>Judul-Judulan</h1>
        <button>
          <Link to='/components/homepage'>Homepage</Link>
        </button>
        <button>
          <Link to='/components/membership'>
          Membership
          </Link>
        </button>
          <Route path="/components/homepage" component={Homepage} />
          <Route path="/components/membership" component={Membership} />
      </BrowserRouter>
    );
  }
}
// function App() {
//   return <BrowserRouter />;
// }

export default App;
