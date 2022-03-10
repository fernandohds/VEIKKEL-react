import React, { useContext, useState } from "react";
import { Form, Button } from "react-bootstrap";
import useFireStore from "../../hooks/useFireStore";
import { CartContext } from "../../context/CartContext";

const Checkout = ({ cartItems, total }) => {
  const { generateOrder } = useFireStore();
  const { clear } = useContext(CartContext);

  const [form, setForm] = useState({
    buyer: {
      name: "",
      phone: "",
      email: "",
    },
    items: cartItems,
    total: total,
    date:Date.now()
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      buyer: {
        ...form.buyer,
        [e.target.name]: e.target.value,
      },
    });
  };

  const hanlderSubmit = (e) => {
    e.preventDefault();
    generateOrder({ data: form });
    clear();
  };
  return (
    <div>
      <Form onSubmit={hanlderSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label className="label">Name</Form.Label>
          <Form.Control
            onChange={handleChange}
            name="name"
            value={form.buyer.name}
            type="text"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Phone</Form.Label>
          <Form.Control
            onChange={handleChange}
            name="phone"
            value={form.buyer.phone}
            type="number"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            onChange={handleChange}
            name="email"
            value={form.buyer.email}
            type="email"
          />
        </Form.Group>

        <Button
          disabled={!form.buyer.name || !form.buyer.phone || !form.buyer.email}
          variant="dark"
          type="submit"
        >
          Comprar
        </Button>
      </Form>
    </div>
  );
};

export default Checkout;