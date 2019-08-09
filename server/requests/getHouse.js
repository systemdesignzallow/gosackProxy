const axios = require("axios");

let getHouse = async (url, houseId) => {
  try {
    return await axios.get(`${url}/houses/${houseId}`);
  } catch (error) {
    console.error(error);
  }
};

module.exports = getHouse;
