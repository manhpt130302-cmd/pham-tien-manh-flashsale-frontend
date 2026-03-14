import React from "react";
import { Button, Table } from "reactstrap";
export default function ComponentShowListProduct(props) {
  const onSelectProduct = props.onSelectProduct;
  let toggleModal = props.toggleModal;
  let itemProduct = props.listProduct.map((product) => {
    return (
      <tr>
        <td>{product.id}</td>
        <td>{product.name}</td>
        <td>{product.originalPrice} VNĐ</td>
        <td>{product.salePrice} VNĐ</td>
        <td>{product.stock || ""}</td>
        {/* <td>{product.status || ""}</td> */}

        <td className="action-buttons">
          <Button color="primary" onClick={() => onSelectProduct(product)}>
            Mua
          </Button>
        </td>
      </tr>
    );
  });

  return (
    <Table hover striped>
      <thead>
        <tr>
          <th>STT</th>
          <th>Tên SP</th>
          <th>Giá gốc</th>
          <th>Giá Sale</th>
          <th>Tồn kho</th>
        </tr>
      </thead>
      <tbody>{itemProduct}</tbody>
    </Table>
  );
}
