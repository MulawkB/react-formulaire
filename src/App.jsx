import { useState } from "react";
import { Button, Container, Form, Row } from "react-bootstrap";
import "./App.css";

function App() {
  const [formData, setFormData] = useState({
    name: "",
    duedate: "",
    priority: "",
    iscompleted: false,
  });
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };
  return (
    <>
      <Container>
        <Row>
          <Form onSubmit={handleSubmit}>
            <Form.Group>
              <Form.Label>Nom </Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Nom"
                required
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Date </Form.Label>
              <Form.Control
                type="date"
                name="duedate"
                value={formData.duedate}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Priorité </Form.Label>
              <Form.Select
                name="priority"
                value={formData.priority}
                onChange={handleChange}
              >
                <option value="basse">Basse</option>
                <option value="moyenne">Moyenne</option>
                <option value="elevee">Elevée</option>
              </Form.Select>
            </Form.Group>
            <Form.Group>
              <Form.Check
                type="checkbox"
                name="iscompleted"
                checked={formData.iscompleted}
                onChange={handleChange}
                label="Compléter ?"
              />
            </Form.Group>
            <Button type="submit">soumettre</Button>
          </Form>
        </Row>
      </Container>
    </>
  );
}
export default App;
