import axios from "axios";
import { IProduct } from "../types/productTypes";
import { IUser } from "../types/userTypes";
const api = axios.create({
  baseURL: "https://reqres.in/api",
  headers: {
    "Content-type": "application/json",
  },
});

const ProductService = {
  async getProduct(): Promise<IProduct[]> {
    return api.get("/unknown").then((result) => result.data.data);
  },
  async postUser(product: IUser): Promise<IUser> {
    return api.post("users", product).then((result) => result.data);
  },
};
export default ProductService;
