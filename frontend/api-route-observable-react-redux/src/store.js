import { configureStore } from '@reduxjs/toolkit';
import { createEpicMiddleware, combineEpics } from 'redux-observable';
import { getProduct } from './epics/getProduct';
import { getProductList } from './epics/getProductList';
import productSlice from './features/product';
import productListSlice from './features/productList';

const epicMiddleware = createEpicMiddleware();

export const rootEpic = combineEpics(
    getProductList,
    getProduct,
  );

export const store = configureStore({
  reducer: {
      productList: productListSlice,
      product: productSlice,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware({thunk: false}).concat(epicMiddleware),
});

epicMiddleware.run(rootEpic);