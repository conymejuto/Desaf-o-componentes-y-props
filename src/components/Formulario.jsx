import { useState } from "react";
import { Form } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Button } from "react-bootstrap";

export default function Formulario() {
  const [personas, setPersonas] = useState([]);
  const [nombre, setNombre] = useState("");
  const [passw, setPassw] = useState("");

  const [classBoton, setClassBoton] = useState("btn-primary");
  //   const [bool, setBool] = useState(true);

  const handleChange = (event) => {
    const { value } = event.target;
    setNombre(value);
    setPassw(value);
  };

  const handleChange1 = (event) => {
    const { value } = event.target;
    setPassw(value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    setPersonas([...personas, nombre, passw]);
    setClassBoton("btn-danger");
  };
  return (
    <div className="card p-5 mx-auto" style={{ width: "500px" }}>
      <Form onSubmit={handleSubmit}>
        <Form.Row>
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Ingrese su Email"
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Ingrese su Password"
              onChange={handleChange1}
            />
          </Form.Group>
        </Form.Row>

        <Form.Group controlId="formGridAddress1">
          <Form.Label>Domcilio</Form.Label>
          <Form.Control placeholder="Calle - Nro." />
        </Form.Group>

        <Form.Group controlId="formGridAddress2">
          <Form.Label>Departamento</Form.Label>
          <Form.Control placeholder="Piso - Dpto." />
        </Form.Group>

        <Form.Row>
          <Form.Group as={Col} controlId="formGridCity">
            <Form.Label>Ciudad</Form.Label>
            <Form.Control />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridState">
            <Form.Label>Pais</Form.Label>
            <Form.Control as="select" defaultValue="Choose...">
              <option>Argentina</option>
              <option>Brasil</option>
            </Form.Control>
          </Form.Group>

          <Form.Group as={Col} controlId="formGridZip">
            <Form.Label>CP</Form.Label>
            <Form.Control />
          </Form.Group>
        </Form.Row>

        <Form.Group id="formGridCheckbox">
          <Form.Check type="checkbox" label="Datos Correctos" />
        </Form.Group>

        <Button variant="primary" type="submit" className={`btn ${classBoton}`}>
          Enviar
        </Button>
      </Form>
      ;
      <ul className="mt-4">
        {personas.map((persona) => (
          <li>{persona}</li>
        ))}
      </ul>
    </div>
  );
}
