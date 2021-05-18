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

export const addNewRating = async (data, id) => {
  const url = `http://localhost:8000/api/products/${id}`;
  const dataUpdate = await axios.patch(url, data);
  return dataUpdate;
};

export const searchByName = async (name) => {
  const url = `http://localhost:8000/api/products?name_like=${name}`;
  const response = await axios.get(url);
  const data = (await response.status) === 200 ? response.data : [];
  return data;
};
export const updateDataConfirm = (data) => {
  data.forEach(async (item) => {
    const url = `http://localhost:8000/api/products/${item.id}`;
    await axios.patch(url, {
      quantity: item.quantity - item.qty,
      order: item.order + 1,
    });
  });
};

// export const searchByFilter = async (
//   name = "",
//   type = "",
//   category = "",
//   priceFrom = "",
//   priceTo = "",
//   sort = ""
// ) => {
//   const url = `http://localhost:8000/api/products?name_like=${name}&type=${type}&kind=${category}&price_gte=${priceFrom}&price_lte=${priceTo}&_sort=price&_order=${sort}`;
//   const response = await axios.get(url);
//   const data = (await response.status) === 200 ? response.data : {};
//   return data;
// };

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
