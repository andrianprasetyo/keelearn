import { Badge, Col, Row } from "react-bootstrap";
import classes from "./StepSectionItem.module.css";

function StepSectionItem(props) {
  return (
    <Col>
      <Row className="justify-content-center">
        <Badge variant="primary" className="p-3">
          {props.badge}
        </Badge>
      </Row>
      <Row className="justify-content-center pt-3 pb-2">
        <h6 className={classes.title}>{props.title}</h6>
      </Row>
      <Row className="justify-content-center">
        <p className={classes.description}>{props.description}</p>
      </Row>
    </Col>
  );
}

export default StepSectionItem;
