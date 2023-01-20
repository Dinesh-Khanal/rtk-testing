import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { IProduct } from "../types/productTypes";
import { IUser } from "../types/userTypes";
import ProductService from "./api";

export const fetchProduct = createAsyncThunk("product/fetch", async () => {
  return await ProductService.getProduct();
});
export const createUser = createAsyncThunk(
  "user/create",
  async (user: IUser) => {
    return await ProductService.postUser(user);
  }
);
const initialState = {
  pList: [] as IProduct[],
  uCreate: {} as IUser,
  isLoading: false,
  errMessage: "",
};
const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchProduct.pending || createUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(
        fetchProduct.fulfilled,
        (state, action: PayloadAction<IProduct[]>) => {
          state.isLoading = false;
          state.pList = action.payload;
        }
      )
      .addCase(createUser.fulfilled, (state, action: PayloadAction<IUser>) => {
        state.isLoading = false;
        state.uCreate = action.payload;
      })
      .addCase(
        fetchProduct.rejected || createUser.rejected,
        (state, action) => {
          state.isLoading = false;
          state.errMessage = action.error.message || "";
        }
      );
  },
});
export default productSlice.reducer;
