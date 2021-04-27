import axios from "axios";
import * as api from "./constant.js";
export const getDataProducts = async () => {
  const url = `${api.configAPI.PROXY}${api.configAPI.BASE_URL}${api.configAPI.PRODUCTS_URL}`;
  const response = await axios.get(url);
  const data = (await response.status) === 200 ? response.data : [];
  return data;
};
