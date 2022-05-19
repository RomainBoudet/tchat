import axios from 'axios';

const API = {

  fetchLogin: async (userEmail, userPassword) => {
    const response = await axios({
      method: 'post',
      url: `http://localhost:3005/login`,
      data: {
        email: userEmail,
        password: userPassword,
      }
    });
    return response;
  },

  fetchTheme: async (email) => {
    const response = await axios({
      method: 'get',
      url: `http://localhost:3005/theme/${email}`,
    });
    return response;
  },

}

export default API;
