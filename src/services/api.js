//====================real api here===============

import axios from "axios";
export const getDataProducts = async () => {
  const url = `http://localhost:8000/api/products`;
  const response = await axios.get(url);
  const data = (await response.status) === 200 ? response.data : [];
  return data;
};

export const getDataProductById = async (id = 0) => {
  const url = `http://localhost:8000/api/products?id=${id}`;
  const response = await axios.get(url);
  const data = (await response.status) === 200 ? response.data : {};
  return data;
};
// export const addNewRating = async (star, cmt, id) => {
//   const rating = {
//     rating: [
//       {
//         stars: star,
//         comments: cmt,
//       },
//     ],
//   };
//   const url = `http://localhost:8000/api/products/${id}`;
//   const dataUpdate = await axios.patch(url, rating);
//   return dataUpdate;
// };

export const addNewRating = async (data, id) => {
  const url = `http://localhost:8000/api/products/${id}`;
  const dataUpdate = await axios.patch(url, data);
  return dataUpdate;
};

// =================fake api=================
// import data from "./data-v1";
// import dataPd from "./data";

// export const getDataProducts = async () => {
//   const result = await data;
//   return result;
// };

// export const getDataProductById = async (id) => {
//   const result = await dataPd;
//   const x = result.filter((item) => item.id === id)[0];
//   return x;
// };
