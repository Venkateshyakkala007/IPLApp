import { Component } from "react";
import TeamDataServices from "../services/team.services";

export default class Team extends Component {
  constructor(props) {
    super(props);
    this.onChangeTeamName = this.onChangeTeamName.bind(this);
    this.onChangePlayerName = this.onChangePlayerName.bind(this);
    this.onChangeScore = this.onChangeScore.bind(this);
    this.getTeam = this.getTeam.bind(this);
    this.updateTeam = this.updateTeam.bind(this);

    this.state = {
      currTeam: {
        id: null,
        t_name: "",
        p_name: "",
        score: 0,
      },
    };
  }

  componentDidMount() {
    this.getTeam(this.props.router.params.id);
  }

  onChangeTeamName(e) {
    const teamName = e.target.value;

    this.setState(function (prevState) {
      return {
        currTeam: {
          ...prevState.currTeam,
          t_name: teamName,
        },
      };
    });
  }

  onChangePlayerName(e) {
    const playerName = e.target.value;

    this.setState(function (prevState) {
      return {
        currTeam: {
          ...prevState.currTeam,
          p_name: playerName,
        },
      };
    });
  }

  onChangeScore(e) {
    const score = e.target.value;

    this.setState(function (prevState) {
      return {
        currTeam: {
          ...prevState.currTeam,
          score: score,
        },
      };
    });
  }

  getTeam(id) {
    TeamDataServices.get(id)
      .then((response) => {
        this.setState({ currTeam: response.data });
        console.log(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  updateTeam() {
    TeamDataServices.update(this.state.currTeam.id, this.state.currTeam)
      .then((response) => {
        console.log(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return (
      <div>
        {this.state.currTeam ? (
          <div className="edit-form">
            <h4>Teams</h4>
            <form>
              <div className="form-group">
                <label for="teamname">Team Name :</label>
                <input
                  type="text"
                  className="form-control"
                  id="teamname"
                  placeholder="Enter Team Name"
                  value={this.state.currTeam.t_name}
                  onChange={this.onChangeTeamName}
                />
              </div>
              <div className="form-group">
                <label for="playername">Player Name:</label>
                <input
                  type="text"
                  className="form-control"
                  id="playername"
                  placeholder="Enter Player Name"
                  value={this.state.currTeam.p_name}
                  onChange={this.onChangePlayerName}
                />
              </div>
              <div className="form-group">
                <label for="score">Score :</label>
                <input
                  type="number"
                  className="form-control"
                  id="score"
                  placeholder="Enter Player Score"
                  value={this.state.currTeam.score}
                  onChange={this.onChangeScore}
                />
              </div>
              <button
                type="submit"
                class="btn btn-primary"
                onClick={this.updateTeam}
              >
                Update
              </button>
            </form>
          </div>
        ) : (
          <div>
            <h4>please click on edit...</h4>
          </div>
        )}
      </div>
    );
  }
}
