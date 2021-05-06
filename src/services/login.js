import axios from "axios";

export const LoginRequest = async (user, pass) => {
  const response = await axios.post(
    "http://localhost:5000/api/auth",
    {
      userEmail: user,
      userPassword: pass,
    },
    { withCredentials: true }
  );
  return response.data;
};

export const LogoutRequest = async () => {
  const response = await axios.get(
    "http://localhost:5000/api/auth/clearCookie",
    {
      withCredentials: true,
    }
  );
  return response;
};
export const registerRequest = async (user, email, pass, phone) => {
  const response = await axios.post(
    "http://localhost:5000/api/users",
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
