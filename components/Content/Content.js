import classes from "./Content.module.css";
import { Col, Container, Image, Row, Button } from "react-bootstrap";
import Link from "next/link";

function Content() {
  return (
    <section className="bg-primary text-white" id="content">
      <Container className={`${classes.container}`} fluid>
        <Row className="align-items-center">
          <Col>
            <Image src="/assets/images/illustration_woman.png" height="450px" />
          </Col>
          <Col className="px-5">
            <Row>
              <h2 className={classes.subHeading}>DIBUAT UNTUK</h2>
            </Row>
            <Row className="pt-4 pb-3">
              <h1 className={classes.heading}>Membantu kamu yang kesulitan belajar</h1>
            </Row>
            <Row>
              <h3 className={classes.tagline}>
                Agar kamu bisa mengoptimalkan waktu yang kamu punya, sangat penting untuk mengetahui
                terlebih dahulu kecenderungan gaya belajarmu
              </h3>
            </Row>
            <Row className="pt-4">
              <Link href="/question">
                <Button className={`${classes.btnCTA} text-primary`} variant="light">
                  Coba Sekarang
                </Button>
              </Link>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Content;
