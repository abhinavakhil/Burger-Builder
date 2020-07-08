import axios from "axios";

const instance = axios.create({
  baseURL: "https://react-burger-builder-cd4fb.firebaseio.com/",
});

export default instance;
