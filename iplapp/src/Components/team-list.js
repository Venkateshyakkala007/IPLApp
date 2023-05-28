import { Component } from "react";
import TeamDataServices from "../services/team.services";
import { Link } from "react-router-dom";

// import { Card, ListGroup } from "bootstrap";

export default class TeamList extends Component {
  constructor(props) {
    super(props);
    this.retriveTeams = this.retriveTeams.bind(this);

    this.state = {
      teams: [],
    };
  }

  componentDidMount() {
    this.retriveTeams();
  }

  retriveTeams() {
    TeamDataServices.getAll()
      .then((response) => {
        this.setState({
          teams: response.data,
        });
        console.log(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return (
      <div>
        <h2>Team Members List</h2>

        {this.state.teams &&
          this.state.teams.map((team, index) => {
            return (
              <div className="card" key={team.id}>
                <div className="card-header">
                  <h2>{team.teamname}</h2>
                </div>
                <div className="card-body">
                  <h3>{team.playername}</h3>
                  <p>{team.score}</p>
                </div>
                <div className="card-footer">
                  <Link to={"/team/" + team.id}>
                    <button type="button" className="btn btn-primary">
                      Edit
                    </button>
                  </Link>
                  <button type="button" className="btn btn-success">
                    Delete
                  </button>
                </div>
              </div>
            );
          })}
      </div>
    );
  }
}
