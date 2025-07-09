// src/services/authentication.js
import axios from 'axios';
import BASE_URL from '../config/api';

const authentication = {
  register: async (formData) => {
    try {
      const response = await axios.post(`${BASE_URL}/register`, formData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      return response.data;
    } catch (error) {
      console.error('Registration failed:', error.response?.data || error.message);
      throw error.response?.data || { message: 'Registration failed' };
    }
  },

  // You can add login, logout etc. like this:
  
};

export default authentication;
