import { Col, Container, Image, Row } from "react-bootstrap";
import classes from "./ResultContentAuditory.module.css";

function ResultContentAuditory() {
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
                  <h1 className={`${classes.heading} pt-3`}>Auditory</h1>
                </Row>
                <Row>
                  <h2 className={`${classes.tagline}`}>Mengandalkan Pendengaran</h2>
                </Row>
              </div>
            </Col>
            <Col>
              <Image src="/assets/images/illustration_auditory_method.png" height="500px" />
            </Col>
          </Row>
        </Container>
      </section>

      <section className={`bg-secondary text-white`} id="result-content-auditory-1">
        <Container className={`${classes.container}`} fluid>
          <Row className="justify-content-center align-items-center pb-3">
            <h1 className={classes.heading}>Apa itu Auditory ?</h1>
          </Row>
          <Row className="justify-content-center align-items-center">
            <h3 className={`${classes.tagline} text-white`}>
              Mereka yang memiliki gaya belajar auditori, mengandalkan pendengaran sebagai menerima informasi dan pengetahuan. Orang tipe ini tidak
              masalah dengan tampilan visual saat mengajar, yang penting adalah mendengarkan pembicaraan guru dengan baik dan jelas. Nah, makanya tipe
              auditori biasanya paling peka dan hafal dari setiap ucapan yang pernah didengar bukan apa yang dilihat.
            </h3>
          </Row>
        </Container>
      </section>

      <section className={`${classes.backgroundPattern2}`} id="result-content-auditory-2">
        <Container className={`${classes.container}`} fluid>
          <Row className="justify-content-center align-items-center pb-5">
            <h1 className={classes.heading}>
              Karakteristik <br />
              Tipe Auditory
            </h1>
          </Row>
          <Row className="justify-content-center align-items-center">
            <h3 className={`${classes.taglineSmall}`}>
              <ul>
                <li>Lebih mudah mengingat sesuatu dari apa yang didengar daripada yang dilihat</li>
                <li>Senang mendengarkan</li>
                <li>Mudah terdistraksi dengan keramaian</li>
                <li>Kesulitan dalam tugas atau pekerjaan yang melibatkan visual</li>
                <li>Pandai menirukan nada atau pun irama suara</li>
                <li>Senang membaca dengan mengeluarkan suara atau menggerakkan bibir mereka</li>
                <li>Biasanya merupakan pembicara yang fasih</li>
                <li>Mudah dalam mengingat nama saat berkenalan dengan orang baru</li>
              </ul>
            </h3>
          </Row>
        </Container>
      </section>

      <section className={`bg-primary text-white`} id="result-content-auditory-3">
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
                <li>Dengarkan musik yang disukai</li>
                <li>Bisa merekam saat guru mengajar lalu dikemudian hari didengarkan kembali</li>
                <li>Apabila membaca buku, bisa sambil diucapkan dengan suara pelan untuk lebih mudah mengingat</li>
                <li>Mendengarkan materi yang diajarkan guru saat di kelas dengan seksama</li>
                <li>Belajar dengan diskusi bersama teman supaya lebih mudah memahami maupun mengingat materi</li>
              </ul>
            </h3>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default ResultContentAuditory;
