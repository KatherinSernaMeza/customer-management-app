// src/api/services/CostumerAPI.js
import axios from "axios";

export const CostumersAPI = {
  get: async function (customers: string) {
    const response = await axios("https://dummyjson.com/users");
    console.log(customers, "customers");
    // returning the customers returned by the API
    return response.data;
  },
};
