import React, { useState } from "react";
import { Button, Container, Form, Table } from "react-bootstrap";
import fakeData from "../../fakaData";
import SharedModal from "../shared/SharedModal";
const Products = () => {
  const [show, setShow] = useState(false);
  const [search, setSearch] = useState("");
  const [select, setSelect] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  console.log(search);
  const selectedProduct = fakeData.find((fd) => fd.code === select.code);

  return (
    <Container className="my-5">
      <Form type="submit" className="my-5">
        <Form.Group className="mb-3" controlId="formBasicSearch">
          <Form.Label as="h3">Search</Form.Label>
          <Form.Control
            type="email"
            placeholder="Search Product"
            onBlur={(e) => setSearch(e.target.value)}
          />
        </Form.Group>
        <Button variant="success">Search</Button>
      </Form>
      <Table striped bordered hover variant="light">
        <thead className="text-center">
          <tr>
            <th>Code</th>
            <th>Name</th>
            <th>Rental Period</th>
            <th>Milage</th>
            <th>Product Need To be Fixed</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {fakeData
            .filter((pd) => pd.name.toLowerCase().includes(search.trim()))
            .map((data) => {
              return (
                <tr key={data.code} className="text-center">
                  <td>{data.code}</td>
                  <td>{data.name}</td>
                  <td>{data.minimum_rent_period}</td>
                  <td>{data.mileage}</td>
                  <td>{String(data.needing_repair)}</td>
                  <td>{data.price}</td>
                  <td>
                    <Button
                      variant="info"
                      onClick={() => {
                        handleShow();
                        setSelect(data);
                      }}
                    >
                      Book Now
                    </Button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </Table>
      <SharedModal
        handleClose={handleClose}
        handleShow={handleShow}
        show={show}
        selectedProduct={selectedProduct}
      />
    </Container>
  );
};

export default Products;
