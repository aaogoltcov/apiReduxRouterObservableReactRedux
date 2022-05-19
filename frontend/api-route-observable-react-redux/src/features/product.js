import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  product: {},
  productId: Number(),
  isProductLoading: false,
  isProductLoadingError: false,
  requestButtonName: '',
}

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    getProduct: (state, action) => {
      state.productId = action.payload;
    },
    setProduct: (state, action) => {
      state.product = action.payload;
    },
    cleatProduct: (state) => {
      state.product = {};
    },
    setIsProductLoading: (state, action) => {
      state.isProductLoading = action.payload;
    },
    setIsProductLoadingError: (state, action) => {
      state.isProductLoadingError = action.payload;
    },
    setRequestButtonName: (state, action) => {
      state.requestButtonName = action.payload;
    }
  },
})

export const { 
  getProduct,
  setProduct, 
  clearProduct, 
  setIsProductLoading, 
  setIsProductLoadingError, 
  setRequestButtonName,
} = productSlice.actions;

export default productSlice.reducer;