import { Col, Container, Image, Row } from "react-bootstrap";
import classes from "./ResultContentKinestetik.module.css";

function ResultContentKinestetik() {
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
                  <h1 className={`${classes.heading} pt-3`}>Kinestetik</h1>
                </Row>
                <Row>
                  <h2 className={`${classes.tagline}`}>Mengandalkan Gerakan</h2>
                </Row>
              </div>
            </Col>
            <Col>
              <Image src="/assets/images/illustration_kinestetik_method.png" height="500px" />
            </Col>
          </Row>
        </Container>
      </section>

      <section className={`bg-secondary text-white`} id="result-content-kinestetik-1">
        <Container className={`${classes.container}`} fluid>
          <Row className="justify-content-center align-items-center pb-3">
            <h1 className={classes.heading}>Apa itu Kinestetik ?</h1>
          </Row>
          <Row className="justify-content-center align-items-center">
            <h3 className={`${classes.tagline} text-white`}>
              Mereka yang memiliki Gaya belajar kinestetik menyenangi belajar yang melibatkan gerakan. Biasanya orang yang tipe ini, merasa lebih
              mudah mempelajari sesuatu tidak hanya sekadar membaca buku tetapi juga mempraktikkanya. Dengan melakukan atau menyentuh objek yang
              dipelajari akan memberikan pengalaman tersendiri bagi tipe kinestetik. Makanya, orang yang memiliki gaya belajar tipe kinestetik
              biasanya tidak betah berdiam lama-lama di kelas
            </h3>
          </Row>
        </Container>
      </section>

      <section className={`${classes.backgroundPattern2}`} id="result-content-kinestetik-2">
        <Container className={`${classes.container}`} fluid>
          <Row className="justify-content-center align-items-center pb-5">
            <h1 className={classes.heading}>
              Karakteristik <br />
              Tipe Kinestetik
            </h1>
          </Row>
          <Row className="justify-content-center align-items-center">
            <h3 className={`${classes.taglineSmall}`}>
              <ul>
                <li>Menyenangi belajar dengan metode praktik</li>
                <li>Kadang kesulitan dalam menulis tetapi pandai dalam bercerita</li>
                <li>Menyukai aktivitas yang melibatkan gerakan tubuh seperti olahraga atau menari</li>
                <li>Saat berkomunikasi banyak menggunakan isyarat tubuh</li>
                <li>Menghafal dengan cara berjalan atau melihat</li>
              </ul>
            </h3>
          </Row>
        </Container>
      </section>

      <section className={`bg-primary text-white`} id="result-content-kinestetik-3">
        <Container className={`${classes.container}`} fluid>
          <Row className="justify-content-center align-items-center pb-5">
            <h1 className={classes.heading}>
              Cara Belajar yang Tepat
              <br />
              Tipe Kinestetik
            </h1>
          </Row>
          <Row className="justify-content-center align-items-center">
            <h3 className={`${classes.taglineSmall} text-white`}>
              <ul>
                <li>Saat mendapatkan materi belajar, bila memungkinkan segera coba praktikkan</li>
                <li>Belajar sambil melakukan aktivitas yang melibatkan gerakan, misalnya sambil berjalan atau sesederhana menjetikkan jari</li>
                <li>Melakukan eksperimen dari materi yang didapatkan dari guru</li>
                <li>Bisa mengunjungi tempat yang berhubungan materi di pelajaran, misalnya untuk pelajaran Sejarah bisa mengunjungi museum</li>
                <li>Mengikuti ekstrakurikuler seperti seperti KIR (Kelompok Ilmiah Remaja)</li>
              </ul>
            </h3>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default ResultContentKinestetik;
