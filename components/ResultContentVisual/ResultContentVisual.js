import { Col, Container, Image, Row } from "react-bootstrap";
import classes from "./ResultContentVisual.module.css";

function ResultContentVisual() {
  return (
    <>
      <section className={`${classes.backgroundPattern} mh-100`} id="result-content-hero">
        <Container fluid>
          <Row>
            <Col>
              <div className="pt-4 pl-5 ml-5">
                <Row>
                  <h3 className={`${classes.subHeading} text-primary`}>TIPE GAYA BELAJAR KAMU, YAITU :</h3>
                </Row>
                <Row>
                  <h1 className={`${classes.heading} pt-3`}>Visual</h1>
                </Row>
                <Row>
                  <h2 className={`${classes.tagline}`}>Mengandalkan Penglihatan</h2>
                </Row>
              </div>
            </Col>
            <Col>
              <Image src="/assets/images/illustration_visual_method.png" height="500px" />
            </Col>
          </Row>
        </Container>
      </section>

      <section className={`bg-secondary text-white`} id="result-content-visual-1">
        <Container className={`${classes.container}`} fluid>
          <Row className="justify-content-center align-items-center pb-3">
            <h1 className={classes.heading}>Apa itu Visual ?</h1>
          </Row>
          <Row className="justify-content-center align-items-center">
            <h3 className={`${classes.tagline} text-white`}>
              Mereka yang memiliki gaya belajar visual berfokus pada penglihatan. Saat mempelajari hal baru, biasanya tipe ini perlu melihat sesuatu
              secara visual untuk lebih mudah mengerti dan memahami. Selain itu, tipe visual juga lebih nyaman belajar dengan pengunaan warna-warna,
              garis, maupun bentuk. Itulah mengapa, orang yang memiliki tipe visual biasanya memiliki pemahaman yang mendalam dengan nilai artistik
              seperti paduan warna dan lainnya
            </h3>
          </Row>
        </Container>
      </section>

      <section className={`${classes.backgroundPattern2}`} id="result-content-visual-2">
        <Container className={`${classes.container}`} fluid>
          <Row className="justify-content-center align-items-center pb-5">
            <h1 className={classes.heading}>
              Karakteristik <br />
              Tipe Visual
            </h1>
          </Row>
          <Row className="justify-content-center align-items-center">
            <h3 className={`${classes.taglineSmall}`}>
              <ul>
                <li>Lebih mudah mengingat dari yang dilihat daripada yang didengar</li>
                <li>Lebih suka membaca daripada dibacakan</li>
                <li>Berbicara dengan tempo agak cepat</li>
                <li>Cukup peduli dengan penampilan dan pakaian</li>
                <li>Lebih menyukai melakukan demonstrasi daripada pidato</li>
                <li>Sulit untuk menerima instruksi secara verbal kecuali ditulis</li>
                <li>Tidak mudah terdistraksi dengan keramaian</li>
                <li>Suka menggambar apa pun di kertas</li>
              </ul>
            </h3>
          </Row>
        </Container>
      </section>

      <section className={`bg-primary text-white`} id="result-content-visual-3">
        <Container className={`${classes.container}`} fluid>
          <Row className="justify-content-center align-items-center pb-5">
            <h1 className={classes.heading}>
              Cara Belajar yang Tepat
              <br />
              Tipe Auditory
            </h1>
          </Row>
          <Row className="justify-content-center align-items-center">
            <h3 className={`${classes.taglineSmall} text-white`}>
              <ul>
                <li>Belajar dari gambar maupun video yang menarik</li>
                <li>Membaca buku yang tidak hanya tulisan saja tetapi juga memiliki ilustrasi</li>
                <li>Saat belajar bisa sambil lakukan doodling supaya lebih fokus</li>
                <li>Gunakan spidol warna-warni saat membuat catatan</li>
                <li>Membuat mind mapping untuk memudahkan belajar</li>
              </ul>
            </h3>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default ResultContentVisual;
