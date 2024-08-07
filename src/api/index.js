import axios from "axios";

const BASE_URL = "https://mindzee-backend.onrender.com";

export const getData = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`);
  return data;
};

export const getConsultant = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`);
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
    "Content-Type": "application/json",
    Authorization: `Token ${payload}`,
  };
  const { data } = await axios.get(`${BASE_URL}/${url}`, { headers });
  return data;
};

export const bookingsSlot = async (url, parameters, token) => {
  const headers = {
    "Content-Type": "application/json",
    Authorization: `Token ${token}`,
  };
  const { data } = await axios.post(`${BASE_URL}/${url}/`, parameters, {
    headers,
  });
  return data;
};

export const consultantDetails = async (url, id) => {
  const { data } = await axios.get(`${BASE_URL}/${url}/${id}/`);
  return data;
};
export const consultantAddReview = async (url, payload) => {
  const headers = {
    "Content-Type": "application/json",
    Authorization: `Token ${payload}`,
  };
  const { data } = await axios.post(`${BASE_URL}/${url}`, { headers });
  return data;
};
export const consultantReview = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}/`);
  return data;
};

export const get_time_slots = async (url, payload) => {
  const { data } = await axios.post(`${BASE_URL}/${url}/`, payload);
  return data;
};

export const bookedByUser = async (url, payload) => {
  const headers = {
    "Content-Type": "application/json",
    Authorization: `Token ${payload}`,
  };
  const { data } = await axios.get(`${BASE_URL}/${url}/`, { headers });
  return data;
};

export const giveReview = async (url, parameters, token) => {
  const headers = {
    "Content-Type": "application/json",
    Authorization: `Token ${token}`,
  };
  const { data } = await axios.post(`${BASE_URL}/${url}/`, parameters, {
    headers,
  });
  return data;
};

export const verifyEmail = async(url)=>{
  const { data } = await axios.get(`${BASE_URL}/${url}/`);
  return data;
}


export const forgotPassword = async (url, parameters) => {
  const { data } = await axios.post(`${BASE_URL}/${url}/`, parameters);
  return data;
};
export const resetPassword = async (url, parameters) => {
  const { data } = await axios.post(`${BASE_URL}/${url}/`, parameters);
  return data;
};

export const contactUs = async (url, parameters) => {
  const { data } = await axios.post(`${BASE_URL}/${url}/`, parameters);
  return data;
};

export const joinAsCounselor = async (url, parameters) => {
  const { data } = await axios.post(`${BASE_URL}/${url}/`, parameters);
  return data;
};
 
