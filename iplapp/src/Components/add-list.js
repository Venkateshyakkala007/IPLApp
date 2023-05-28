import { Component } from "react";
import TeamDataServices from "../services/team.services";

export default class AddList extends Component {
  constructor(props) {
    super(props);
    this.onChangeTeamName = this.onChangeTeamName.bind(this);
    this.onChangePlayerName = this.onChangePlayerName.bind(this);
    this.onChangeScore = this.onChangeScore.bind(this);
    this.saveTeam = this.saveTeam.bind(this);
    this.newTeam = this.newTeam.bind(this);

    this.state = {
      id: null,
      t_name: "",
      p_name: "",
      score: 0,

      submitted: false,
    };
  }

  saveTeam() {
    var data = {
      teamname: this.state.t_name,
      playername: this.state.p_name,
      score: this.state.score,
    };

    TeamDataServices.create(data)
      .then((response) => {
        this.setState({
          id: response.data.id,
          t_name: response.data.teamname,
          p_name: response.data.playername,
          score: response.data.score,

          submitted: true,
        });
        console.log(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  newTeam() {
    this.setState({
      id: null,
      t_name: "",
      p_name: "",
      score: 0,
      submitted: false,
    });
  }

  onChangeTeamName(e) {
    this.setState({
      t_name: e.target.value,
    });
  }

  onChangePlayerName(e) {
    this.setState({
      p_name: e.target.value,
    });
  }

  onChangeScore(e) {
    this.setState({
      score: e.target.value,
    });
  }

  render() {
    return (
      <div className="submit-form">
        {this.state.submitted ? (
          <div>
            <h2>Data is submitted</h2>
            <button
              className="btn btn-success"
              type="button"
              onClick={this.newTeam}
            >
              add
            </button>
          </div>
        ) : (
          <div>
            <div className="form-group">
              <label for="teamname">Team Name :</label>
              <input
                type="text"
                className="form-control"
                id="teamname"
                placeholder="Enter Team Name"
                required
                value={this.state.t_name}
                onChange={this.onChangeTeamName}
                name="teamname"
              />
            </div>
            <div className="form-group">
              <label for="playername">Player Name:</label>
              <input
                type="text"
                className="form-control"
                id="playername"
                placeholder="Enter Player Name"
                required
                value={this.state.p_name}
                onChange={this.onChangePlayerName}
                name="playername"
              />
            </div>
            <div className="form-group">
              <label for="score">Score :</label>
              <input
                type="number"
                className="form-control"
                id="score"
                placeholder="Enter Player Score"
                required
                value={this.state.score}
                onChange={this.onChangeScore}
                name="score"
              />
            </div>
            <button
              type="submit"
              class="btn btn-primary"
              onClick={this.saveTeam}
            >
              Submit
            </button>
          </div>
        )}
      </div>
    );
  }
}
