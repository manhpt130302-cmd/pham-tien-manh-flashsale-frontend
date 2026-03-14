import React from "react";
import { useState, useEffect } from "react";
import { Modal, ModalHeader, Form, FormGroup, Label, ModalBody, Alert, Input, ModalFooter, Button } from "reactstrap";
export default function ModalBuy(props) {
  let product = props.product;
  let [userId, setUserId] = useState("");
  let [quantity, setQuantity] = useState(1);
  let [loading, setLoading] = useState(false);
  let [error, setError] = useState("");

  useEffect(() => {
    if (product) {
      setUserId("");
      setQuantity(1);
      setError("");
    }
  }, [product]);

  let handleSubmit = () => {
    if (!userId || !quantity) {
      alert("Hãy điền đầy đủ thông tin");
      return;
    }
    let data = {
      productId: product?.id,
      userId: userId,
      quantity: quantity,
    };

    console.log("Dữ liệu thực tế gửi đi:", data);

    props.onHandleBuy(data);
    props.toggleModal();
  };
  return (
    <Modal isOpen={props.isOpen} toggle={props.toggleModal} size="xl" fade={false}>
      <ModalHeader toggle={props.toggleModal}>Đặt hàng: {product?.name}</ModalHeader>

      <ModalBody>
        {error && <Alert color="danger">{error}</Alert>}

        <Form>
          <FormGroup>
            <Label>User ID (dùng để thử với các user khác nhau)</Label>
            <Input type="text" value={userId} onChange={(e) => setUserId(e.target.value)} placeholder="Nhập User ID" disabled={loading} />
          </FormGroup>

          <FormGroup>
            <Label>Số lượng (tối đa 2)</Label>
            <Input type="number" value={quantity} onChange={(e) => setQuantity(parseInt(e.target.value))} disabled={loading} />
          </FormGroup>
        </Form>
      </ModalBody>

      <ModalFooter>
        <Button color="secondary" onClick={props.toggleModal} disabled={loading}>
          Hủy
        </Button>
        <Button color="danger" onClick={() => handleSubmit(product)} disabled={loading}>
          {loading ? "Đang xử lý..." : "Xác nhận"}
        </Button>
      </ModalFooter>
    </Modal>
  );
}
