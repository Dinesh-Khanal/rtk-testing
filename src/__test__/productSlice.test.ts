import { configureStore } from "@reduxjs/toolkit";
import productReducer, { fetchProduct } from "../redux/productSlice";
import ProductService from "../redux/api";
import { mockProducts } from "../assets/mockData";

describe("product reducer", () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });
  it("should return the initial state when passed and empty action", () => {
    const initialState = undefined;
    const action = { type: "" };
    const result = productReducer(initialState, action);
    expect(result).toEqual({ products: [], isLoading: false, errMessage: "" });
  });
  it("should fetch products data properly", async () => {
    const productMock = jest
      .spyOn(ProductService, "getProduct")
      .mockResolvedValueOnce(mockProducts);
    const store = configureStore({ reducer: productReducer });
    await store.dispatch(fetchProduct());
    expect(productMock).toBeCalledTimes(1);
    expect(productMock).toHaveBeenCalledWith(); //without any argument
    expect(store.getState().products).toHaveLength(2);
    expect(store.getState().errMessage).toEqual("");
  });
});
