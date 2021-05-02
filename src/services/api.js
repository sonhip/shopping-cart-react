//====================real api here===============

// import axios from "axios";
// import * as api from "./constant.js";
// export const getDataProducts = async () => {
//   const url = `http://localhost:8080/api/carbike`;
//   const url = `${api.configAPI.PROXY}${api.configAPI.BASE_URL}${api.configAPI.PRODUCTS_URL}`;
//   const response = await axios.get(url);
//   const data = (await response.status) === 200 ? response.data : [];
//   return data;
// };

// export const getDataProductById = (id = 0) => {
//   const url = `${api.configAPI.PROXY}${api.configAPI.BASE_URL}${api.configAPI.DETAIL_PRODUCT_URL}${id}`;
//   const response = await axios.get(url);
//   const data = (await response.status) === 200 ? response.data : {};
//   return data;
// }

// =================fake api=================
import data from "./data-v1";
import dataPd from "./data";

export const getDataProducts = async () => {
  const result = await data;
  return result;
};

export const getDataProductById = async (id) => {
  const result = await dataPd;
  const x = result.filter((item) => item.id === id)[0];
  return x;
};
