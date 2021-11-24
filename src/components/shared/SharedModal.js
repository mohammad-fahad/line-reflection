import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";

const SharedModal = ({ handleClose, show, selectedProduct }) => {
  const noData = "No Mileage data available";

  const [duration, setDuration] = useState(0);

  const total = (param) => param * selectedProduct?.price;

  return (
    <div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          {selectedProduct ? (
            <div>
              <Modal.Title>Book a product</Modal.Title>
              <Modal.Body>
                <strong>Name: </strong>
                {selectedProduct.name} <br />
                <strong>Rental Period: </strong>
                <input
                  type="number"
                  defaultValue={selectedProduct.minimum_rent_period}
                  onChange={(e) => setDuration(e.target.value)}
                />
                <br />
                <strong>Milage: </strong>
                {selectedProduct.mileage + duration * 10}
                <br />
                <strong>Product need to fixed?: </strong>
                {String(selectedProduct.needing_repair) || noData}
                <br />
                <strong>Price: </strong>
                {selectedProduct.price}
                <br />
                <strong>Total Price: </strong>
                {total(duration)}
              </Modal.Body>
              <Modal.Footer>
                <Button
                  variant="danger"
                  onClick={() => {
                    handleClose();
                    setDuration(0);
                  }}
                >
                  No
                </Button>
                <Button
                  variant="success"
                  onClick={() => {
                    handleClose();
                    setDuration(0);
                  }}
                >
                  Yes
                </Button>
              </Modal.Footer>
            </div>
          ) : (
            <Modal.Title>I am a modal</Modal.Title>
          )}
        </Modal.Header>
      </Modal>
    </div>
  );
};

export default SharedModal;
