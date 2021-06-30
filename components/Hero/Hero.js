import classes from "./Hero.module.css";
import { Button, Container, Row } from "react-bootstrap";
import StepSection from "../StepSection/StepSection";
import Link from "next/link";

function Hero(props) {
  return (
    <section className={classes.backgroundPattern} id="hero">
      <Container fluid>
        <Row className="justify-content-center pt-5 pb-3">
          <h3 className={classes.subHeading}>YUK, SAATNYA MULAI</h3>
        </Row>
        <Row className="justify-content-center pb-3">
          <h1 className={classes.heading}>Temukan gaya belajar yang cocok buatmu!</h1>
        </Row>
        <Row className="justify-content-center">
          <h2 className={classes.tagline}>
            Buat belajar jadi lebih efektif dan menyenangkan sesuai dengan gaya belajarmu.
          </h2>
        </Row>
        <Row className="justify-content-center py-4 my-4">
          <Link href="/question">
            <Button className={classes.btnCTA} variant="primary">
              Temukan Gaya Belajarmu
            </Button>
          </Link>
        </Row>
        <StepSection />
      </Container>
    </section>
  );
}

export default Hero;
