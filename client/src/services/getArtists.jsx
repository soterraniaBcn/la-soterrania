import axios from "axios";

const GetArtists = {
  async getAll() {
    const result = await axios.get(
      process.env.REACT_APP_BASE_URL + "/artistes",
      { headers: { authorization: `Bearer ${localStorage.getItem("user")}` } }
    );
    return result.data;
  },
};

export default GetArtists;
