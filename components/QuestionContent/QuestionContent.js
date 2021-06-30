import classes from "./QuestionContent.module.css";
import { useState } from "react";
import { Col, Container, Row, Button, Form } from "react-bootstrap";

function QuestionContent(props) {
  const [selectedAnswer, setSelectedAnswer] = useState({ selected: "" });

  const handleSelected = (event) => {
    const value = event.currentTarget.value;
    const name = event.currentTarget.name;
    setSelectedAnswer({ selected: value });
    props.onChoiceSelected(name);
  };

  return (
    <section className={`${classes.backgroundPattern} mh-100`} id="question-content">
      <Container className={classes.container}>
        <Row className="justify-content-center text-center">
          <h1 className={classes.question}>{props.question}</h1>
        </Row>
        <Row className="justify-content-center pt-2">
          <h2 className={classes.hint}>PILIH SALAH SATU JAWABAN DARI BEBERAPA PERTANYAAN</h2>
        </Row>
        <Row className="d-flex flex-column align-self-center py-4">
          <Col className="py-2">
            {Object.entries(props.choice).map((item, _) => {
              return (
                <Col key={item} className="py-2">
                  <Button
                    variant={selectedAnswer.selected === item[1] ? "secondary" : "light"}
                    className="py-2 px-5 d-block w-100"
                    value={item[1]}
                    name={item[0]}
                    onClick={handleSelected}
                  >
                    <Row>
                      <Form.Group className="my-0" controlId={item[1]}>
                        <Form.Check type="checkbox" checked={selectedAnswer.selected === item[1]} onChange={() => {}} value={item} />
                      </Form.Group>
                      <span className={`pl-2 ${selectedAnswer.selected === item[1] ? "text-success" : ""}`}>{item[1]}</span>
                    </Row>
                  </Button>
                </Col>
              );
            })}
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default QuestionContent;
