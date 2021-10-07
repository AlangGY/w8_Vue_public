const axios = require('axios');
require('dotenv').config();

const { API_END_POINT, API_KEY } = process.env;


module.exports = async (req, res) => {
  const { params } = JSON.parse(req.body);
  const { data : body } = await axios({
    url : `${API_END_POINT}?apikey=${API_KEY}&type=movie&${params}`,
    method : 'GET'
  });
  res.json({ statusCode : 200, body });
};