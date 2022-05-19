import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  productList: [],
  isProductListLoading: false,
  isProductListLoadingError: false,
  requestButtonName: 'Запросить список продуктов...',
}

export const productListSlice = createSlice({
  name: 'productList',
  initialState,
  reducers: {
    getProductList: () => {},
    setProductList: (state, action) => {
      state.productList = action.payload;
    },
    clearProductList: (state) => {
      state.productList = [];
    },
    setIsProductListLoading: (state, action) => {
      state.isProductListLoading = action.payload;
    },
    setIsProductListLoadingError: (state, action) => {
      state.isProductListLoadingError = action.payload;
    },
    setRequestButtonName: (state, action) => {
      state.requestButtonName = action.payload;
    }
  },
})

export const { 
  getProductList,
  setProductList, 
  clearProductList, 
  setIsProductListLoading, 
  setIsProductListLoadingError, 
  setRequestButtonName,
} = productListSlice.actions;

export default productListSlice.reducer;