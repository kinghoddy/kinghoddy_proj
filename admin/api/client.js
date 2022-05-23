import axios from "axios";

const endpoints = {
  productions: "https://kinghoddy.herokuapp.com/",
  development: "http://localhost:9000",
};

const client = axios.create({
  baseURL: endpoints.development,
  headers: {
    "Content-Type": "application/json",
  },
});

export default client;
