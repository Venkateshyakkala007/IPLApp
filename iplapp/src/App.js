import { Component } from "react";
import { Routes, Route, Link } from "react-router-dom";

import TeamList from "./Components/team-list";
import AddList from "./Components/add-list";
import Team from "./Components/team";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand navbar-dark bg-dark">
          <Link to={"/team"} className="navbar-brand">
            IPL Matches
          </Link>
          <div className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to={"/team"} className="nav-link">
                Teams
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/add"} className="nav-link">
                Add
              </Link>
            </li>
          </div>
        </nav>

        {/*here we can define the routing here*/}
        <div className="container mt-3">
          <Routes>
            <Route path="/" element={<TeamList />} />
            <Route path="/team" element={<TeamList />} />
            <Route path="/add" element={<AddList />} />
            <Route path="/team/:id" element={<Team />} />
          </Routes>
        </div>
      </div>
    );
  }
}

export default App;
