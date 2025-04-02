import { Button, Container, Form, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import "./App.css";

function App() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      date: "",
      priority: "basse",
      isCompleted: false,
    },
  });

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
              />
              {errors.name && <p>{errors.name.message}</p>}
            </Form.Group>
            <Form.Group controlId="Date">
              <Form.Label>Date </Form.Label>
              <Form.Control
                type="date"
                {...register("date", {
                  required: "date requise",
                })}
              />
              {errors.date && <p>{errors.date.message}</p>}
            </Form.Group>
            <Form.Group controlId="Priority">
              <Form.Label>Priorité </Form.Label>
              <Form.Select {...register("priority")}>
                <option value="basse">Basse</option>
                <option value="moyenne">Moyenne</option>
                <option value="elevee">Elevée</option>
              </Form.Select>
            </Form.Group>
            <Form.Group controlId="IsCompleted">
              <Form.Check type="checkbox" {...register("isCompleted")} />
            </Form.Group>
            <Button type="submit">soumettre</Button>
          </Form>
        </Row>
      </Container>
    </>
  );
}
export default App;
