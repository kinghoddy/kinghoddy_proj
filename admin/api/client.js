import axios from "axios";

const endpoints = {
  production: "https://kinghoddy.herokuapp.com/",
  development: "http://localhost:9000",
};

const client = axios.create({
  baseURL: endpoints.production,
  headers: {
    "Content-Type": "application/json",
  },
});

export default client;
