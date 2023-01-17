import axios from "axios";
import { IProduct } from "../types/productTypes";
const api = axios.create({
  baseURL: "https://reqres.in/api",
});

const ProductService = {
  async getProduct(): Promise<IProduct[]> {
    return api.get("/unknown").then((result) => result.data.data);
  },
};
export default ProductService;
