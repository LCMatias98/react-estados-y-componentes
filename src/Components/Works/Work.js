import { useState } from "react";
import { Container, Row, Col, Form,Button } from "react-bootstrap";
import { v4 as uuidv4 } from "uuid";

const Work = () =>{

    const [tasks,setTasks] = useState([]);
    const [showForm,setShowForm] = useState(true);

    const createTask  = (e) =>{
        e.preventDefault();
//        console.log(e);
//      console.log(e.target);
//    console.log(e.target.elements);
        let  [title,description] = e.target.elements;
        title = title.value.trim();
        description = description.value.trim();
        setTasks([ ...tasks, { id: uuidv4(), title,description}]);
        console.log(tasks)
    };

    const handleToggleForm = (e) =>{
        setShowForm(!showForm);
    };

    return (
        <Container>
            <Row>
                <Button onClick={handleToggleForm}>{showForm ? "Ocultar Formulario" : "Ver Formulario"}</Button>

                {showForm && (
                <Col md={9} xs={12}>
                    <h3>Tasks</h3>
                    <Form onSubmit={createTask}>
                        <Form.Group>
                            <Form.Label>Titulo de la Tarea</Form.Label>
                            <Form.Control placeholder="Tarea" name="title"></Form.Control>
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>Descripcion de la Tarea</Form.Label>
                            <Form.Control name="description" as="textarea" rows={3} placeholder="Descripcion de la Tarea"/>
                        </Form.Group>
                        <Button type="submit">Crear Tarea</Button>
                    </Form>
                </Col>
                )}
            </Row>
        </Container>
    );
}

export default Work;