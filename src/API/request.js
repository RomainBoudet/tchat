import axios from 'axios';

const API = {

  fetchLogin: async (userEmail, userPassword) => {
    const response = await axios({
      method: 'post',
      url: `https://api-tchat.romainboudet.fr/login`,
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
      url: `https://api-tchat.romainboudet.fr/theme/${email}`,
    });
    return response;
  },

}

export default API;
