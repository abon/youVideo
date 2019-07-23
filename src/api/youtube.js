import axios from "axios";

const KEY = "AIzaSyCnvnuL4yhBtUmYX0kJF9DMrVO6XQMPa7k";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY
  }
});
