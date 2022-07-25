import axios from "axios";
const API_URL = "https://studapi.teachmeskills.by/auth/";

export function login(email: string, password: string) {
  return axios
    .post(API_URL + "jwt/create/", {
      email,
      password,
    })
    .then((response) => {
      console.log(response);

      // if (response.data.accessToken) {
      //   localStorage.setItem("user", JSON.stringify(response.data));
      //   console.log(response);
      // }
      // return response.data;
    });
}
export function logout() {
  localStorage.removeItem("user");
}
export function register(username: string, email: string, password: string) {
  return axios.post(API_URL + "users/", {
    username,
    email,
    password,
  });
}
export function getCurrentUser() {
  const userStr = localStorage.getItem("user");
  if (userStr) return JSON.parse(userStr);
  return null;
}
