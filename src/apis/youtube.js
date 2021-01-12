import axios from "axios";

const KEY = "AIzaSyBs-mRP0a7mgR9YFFwxyW3KpnJB9SMDJ-k";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 5,
    key: KEY,
  },
});
