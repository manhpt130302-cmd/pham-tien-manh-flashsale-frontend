import { api } from "./api";
// Add New Order
const oderFlashSaleAPI = (OrderNew) => {
  let url = "order";
  return api("POST", url, OrderNew);
};

const getListProduct = () => {
  return api("GET");
};
export { getListProduct, oderFlashSaleAPI };
