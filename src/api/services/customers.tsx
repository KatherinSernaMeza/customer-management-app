// src/api/services/CostumerAPI.js
import axios from "axios";

export const CostumersAPI = {
  get: async function (customers: string) {
    const response = await axios(customers);
    // returning the customers returned by the API
    return response.data;
  },
};
