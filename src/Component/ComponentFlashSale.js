import React, { useEffect, useState } from "react";
import { getListProduct } from "../API/API_FlashSlale";
import { oderFlashSaleAPI } from "../API/API_FlashSlale";
import ComponentShowListProduct from "./ComponentShowListProduct";
import { ModalBody } from "reactstrap";
import ModalBuy from "./ModalBuy";
export default function ComponentFlashSale(props) {
  let [listProduct, setListProduct] = useState([]);
  let [showModalCreatOderToggle, setShowModalCreatOderToggle] = useState(false);
  let [productBuy, setProductBuy] = useState(null);
  let buyProduct = (productBuy) => {
    setProductBuy(productBuy);
    setShowModalCreatOderToggle(true);
  };
  let onHandleOpenModalOder = () => {
    setShowModalCreatOderToggle(!showModalCreatOderToggle);
  };
  let fetchListProduct = () => {
    getListProduct().then((listProduct) => {
      setListProduct(listProduct);
    });
  };

  let fetchBuyProduct = (OrderNew) => {
    oderFlashSaleAPI(OrderNew)
      .then((data) => {
        if (data.status === "SUCCESS") {
          alert("Chúc mừng! " + data.message);

          fetchListProduct();
        } else {
          alert("Thất bại: " + data.message);
        }
      })
      .catch((error) => {
        console.error("Lỗi hệ thống:", error);
        if (error.response && error.response.data) {
          alert("Lỗi: " + error.response.data.message);
        } else {
          alert("Có lỗi xảy ra, vui lòng thử lại sau!");
        }
      });
  };

  let onHandleBuy = (product) => {
    setShowModalCreatOderToggle(true);
    fetchBuyProduct(product);
  };

  useEffect(() => {
    fetchListProduct();
  }, []);
  return (
    <>
      <ComponentShowListProduct listProduct={listProduct} onSelectProduct={buyProduct} />
      <ModalBuy isOpen={showModalCreatOderToggle} onHandleBuy={onHandleBuy} toggleModal={onHandleOpenModalOder} product={productBuy} />
    </>
  );
}
