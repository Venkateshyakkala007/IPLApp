import axios from "axios";

export default axios.create({
  baseURL: "http://localhost:5050/api",
  header: {
    "Content-type": "application/json",
  },
});
