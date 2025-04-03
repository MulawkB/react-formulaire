import { Button, Container, Form, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import "./App.css";

function App() {
  const schema = yup.object().shape({
    name: yup.string().required("Le nom est requis").min(8,"le nom doit au moins avoir 8 charactères").max(15,"le nom doit contenir moins de 15 charactères"),
    date: yup.string().required("La date est requise").matches(/^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/,"Le format doit être jj/mm/aaaa").test("date-current", "La date ne doit pas être antérieure a celle d'aujourd'hui", (value) => {
      if (!value) return false
      const [day,month,year] = value.split("/").map(Number);
      const inputDate = new Date (year, month - 1, day);
      const todayDate = new Date();
      todayDate.setHours(0,0,0,0);
      return inputDate >= todayDate;
      
    }),
    priority: yup.string().oneOf(["basse","moyenne","elevee"],"La priorité doit être l'un des trois champs Basse, Moyene, Elevée "),
    IsCompleted: yup.boolean(),
  })
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
    IsCompleted: false,
  },
    resolver: yupResolver(schema),
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
                {...register("name")}
              />
              <p>{errors.name?.message}</p>
            </Form.Group>
            <Form.Group controlId="Date">
              <Form.Label>Date </Form.Label>
              <Form.Control
                type="text"
                {...register("date")}
              />
              <p>{errors.date?.message}</p>
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
