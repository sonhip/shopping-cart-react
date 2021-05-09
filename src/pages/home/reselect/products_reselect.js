import { createSelector } from "reselect";

const productsSelector = (state) => state.productsReducer.dataProducts;
const loadingProducts = (state) => state.productsReducer.loadingProducts;
const errorProducts = (state) => state.productsReducer.errorProducts;

export const loadingSelector = createSelector(loadingProducts, (item) => item);
export const errorSelector = createSelector(errorProducts, (item) => item);
export const getDataProducts = createSelector(productsSelector, (item) => item);

export const getFeaturedSelector = createSelector(productsSelector, (item) => {
  if (item.hasOwnProperty("featured")) {
    return item.featured;
  }
  return [];
});
export const getLatestSelector = createSelector(productsSelector, (item) => {
  if (item.hasOwnProperty("latest")) {
    return item.latest;
  }
  return [];
});
export const getTopSellingSelector = createSelector(
  productsSelector,
  (item) => {
    if (item.hasOwnProperty("top_selling")) {
      return item.top_selling;
    }
    return [];
  }
);
