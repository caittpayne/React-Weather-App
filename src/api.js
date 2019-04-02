import axios from "axios";

const api = {
  getLocation(value) {
    const url = `https://www.zipcodeapi.com/rest/${
      process.env.REACT_APP_ZIP
    }/info.json/${value}/degrees`;

    return axios
      .get(url)
      .then(res => {
        return res.data;
      })
      .catch(err => {
        alert({ Error: err });
      });
  },

  getWeather(lat, lon) {}
};

export default api;
