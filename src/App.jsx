import { Button, Container, Form, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import "./App.css";

function App() {
    const { register, handleSubmit,reset } = useForm();
    const onSubmit = (data) => {
      console.log(data);
      reset();
    };
  return (
    <>
      <Container>
        <Row>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Group controlId="Name">
              <Form.Label>Nom </Form.Label>
              <Form.Control
                type="text"
                {...register("name", {
                  required: "Nom requis",
                })}
                placeholder="Nom"
                required
              />
            </Form.Group>
            <Form.Group controlId="Date">
              <Form.Label>Date </Form.Label>
              <Form.Control
                type="date"
                {...register("date", {
                  required: "date requise",
                })}
                required
              />
            </Form.Group>
            <Form.Group controlId="Priority">
              <Form.Label>Priorité </Form.Label>
              <Form.Select
                {...register("priority", {
                })}
              >
                <option value="basse">Basse</option>
                <option value="moyenne">Moyenne</option>
                <option value="elevee">Elevée</option>
              </Form.Select>
            </Form.Group>
            <Form.Group controlId="IsCompleted">
              <Form.Check
                type="checkbox"
                {...register("ispriority", {
                })}
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
