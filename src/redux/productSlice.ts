import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { IProduct } from "../types/productTypes";
import ProductService from "./api";

export const fetchProduct = createAsyncThunk("product/fetch", async () => {
  return await ProductService.getProduct();
});
const initialState = {
  products: [] as IProduct[],
  isLoading: false,
  errMessage: "",
};
const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchProduct.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(
        fetchProduct.fulfilled,
        (state, action: PayloadAction<IProduct[]>) => {
          state.isLoading = false;
          state.products = action.payload;
        }
      )
      .addCase(fetchProduct.rejected, (state, action) => {
        state.isLoading = false;
        state.errMessage = action.error.message || "";
      });
  },
});
export default productSlice.reducer;
