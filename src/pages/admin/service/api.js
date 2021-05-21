import axios from "axios";
export const getAllProducts = async () => {
  const url = `/api/products`;
  const response = await axios.get(url);
  const data = (await response.status) === 200 ? response.data : [];
  return data;
};

export const addNewProduct = async (data) => {
  const url = `/api/products/`;
  const dataUpdate = await axios.post(url, data);
  return dataUpdate;
};
export const deleteAProduct = async (id) => {
  const url = `/api/products/${id}`;
  const dataUpdate = await axios.delete(url);
  return dataUpdate;
};
export const EditAProduct = async (id) => {
  const url = `/api/products/${id}`;
  const dataUpdate = await axios.delete(url);
  return dataUpdate;
};
