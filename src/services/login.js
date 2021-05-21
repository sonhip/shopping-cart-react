import axios from "axios";

const url = "https://shopping-login-api.herokuapp.com";
// process.env.NODE_ENV === "production"
//   ? "https://shopping-login-api.herokuapp.com"
//   : "http://localhost:5000";

export const LoginRequest = async (user, pass) => {
  const response = await axios.post(
    `${url}/api/auth`,
    {
      userEmail: user,
      userPassword: pass,
    },
    { withCredentials: true }
  );
  return response.data;
};

export const LogoutRequest = async () => {
  const response = await axios.get(`${url}/api/auth/clearCookie`, {
    withCredentials: true,
  });
  return response;
};
export const registerRequest = async (user, email, pass, phone) => {
  const response = await axios.post(
    `${url}/api/users`,
    {
      userName: user,
      userEmail: email,
      userPassword: pass,
      userPhone: phone,
    },
    { withCredentials: true }
  );
  return response.data;
};
