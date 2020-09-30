import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID EEWq8o34TU7MQM7YRVicQPEJSjjTLBQs-DEYqgJoE-M",
  },
});
