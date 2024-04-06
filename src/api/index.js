import axios from "axios";

const BASE_URL = "https://mindzee-backend.onrender.com";

export const getData = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`);
  return data;
};

export const getConsultant = async (url) => {
  const headersConsultant = {
    "Content-Type": "application/json",
    Authorization: "Token 698c0fb494ddd172d35eadf67e4d33f90ce64b96",
  };
  const { data } = await axios.get(`${BASE_URL}/${url}`,{ headersConsultant });
  return data;
};

export const registerNewUser = async (url, payload) => {
  const { data } = await axios.post(`${BASE_URL}/${url}`, payload);
  return data;
};
export const loginUser = async (url, payload) => {
  const { data } = await axios.post(`${BASE_URL}/${url}`, payload);
  return data;
};

export const getProfile = async (url, payload) => {
  const headers = {
    // "Content-Type": "application/json",
    Authorization: `Token ${payload}`,
  }
  const { data } = await axios.get(`${BASE_URL}/${url}`,{headers});
  return data;
};
