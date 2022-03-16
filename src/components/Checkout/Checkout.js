import React, { useContext, useState } from "react";
import { Form, Button } from "react-bootstrap";
import useFireStore from "../../hooks/useFireStore";
import { CartContext } from "../../context/CartContext";

const Checkout = ({ cartItems, total }) => {
  const { generateOrder, idOrder } = useFireStore();
  const { clear } = useContext(CartContext);
  const [orderOk, setOrderOk] = useState(false);


  const [form, setForm] = useState({
    buyer: {
      name: "",
      phone: "",
      email: "",
    },
    items: cartItems,
    total: total,
    date: Date.now()
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
      { <Form style={{display : orderOk && "none"}} onSubmit={hanlderSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label className="label">Name</Form.Label>
          <Form.Control
            onChange={handleChange}
            name="name"
            value={form.buyer.name || ""}
            type="text"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Phone</Form.Label>
          <Form.Control
            onChange={handleChange}
            name="phone"
            value={form.buyer.phone || ""}
            type="number"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            onChange={handleChange}
            name="email"
            value={form.buyer.email || ""}
            type="email"
          />
        </Form.Group>

        <Button onClick={()=> setOrderOk(true)}
          disabled={!form.buyer.name || !form.buyer.phone || !form.buyer.email}
          variant="dark"
          type="submit"
        >
          Comprar
        </Button>
      </Form>}
      {
        orderOk && <div>
          <h1 className="text-center">Su compra ha sido exitosa!</h1>
          <h1 className="text-center">Su numero de orden es: <b>{idOrder}</b></h1>


        </div>
      }
    </div>
  );
};

export default Checkout;