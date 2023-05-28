import http from "../http-common";

class TeamDataServices {
  //
  getAll() {
    return http.get("/teams");
  }

  create(data) {
    return http.post("/teams", data);
  }
}

export default new TeamDataServices();
