import classes from "./NavigationBottom.module.css";
import { Button, Col, Container, ProgressBar, Row } from "react-bootstrap";
import Link from "next/link";

function NavigationBottom({ progress, onNext, onResult, onFinish, userAnswer }) {
  return (
    <Container className={`${classes.container} bg-light shadow-sm p-2`} fluid>
      <Row className="align-items-center">
        {/* <Col className="text-center justify-content-center" lg={1}>
          <Button className={classes.btnBack} variant="info" onClick={onBack}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M16.9999 11H9.4099L12.7099 7.71C12.8982 7.5217 13.004 7.2663 13.004 7C13.004 6.7337 12.8982 6.47831 12.7099 6.29C12.5216 6.1017 12.2662 5.99591 11.9999 5.99591C11.7336 5.99591 11.4782 6.1017 11.2899 6.29L6.2899 11.29C6.19886 11.3851 6.12749 11.4973 6.0799 11.62C5.97988 11.8635 5.97988 12.1365 6.0799 12.38C6.12749 12.5028 6.19886 12.6149 6.2899 12.71L11.2899 17.71C11.3829 17.8037 11.4935 17.8781 11.6153 17.9289C11.7372 17.9797 11.8679 18.0058 11.9999 18.0058C12.1319 18.0058 12.2626 17.9797 12.3845 17.9289C12.5063 17.8781 12.6169 17.8037 12.7099 17.71C12.8036 17.617 12.878 17.5064 12.9288 17.3846C12.9796 17.2627 13.0057 17.132 13.0057 17C13.0057 16.868 12.9796 16.7373 12.9288 16.6154C12.878 16.4936 12.8036 16.383 12.7099 16.29L9.4099 13H16.9999C17.2651 13 17.5195 12.8946 17.707 12.7071C17.8945 12.5196 17.9999 12.2652 17.9999 12C17.9999 11.7348 17.8945 11.4804 17.707 11.2929C17.5195 11.1054 17.2651 11 16.9999 11Z"
                fill="#258AFF"
              />
            </svg>
          </Button>
        </Col> */}

        <Col className="text-center justify-content-center" lg={1}>
          <span className="font-weight-bold text-primary">{progress.toFixed(0)}%</span>
        </Col>
        <Col className="justify-content-center" lg={9}>
          <ProgressBar now={progress} />
        </Col>
        <Col className="text-center justify-content-center" lg={2}>
          {progress === 100 ? (
            userAnswer < 11 ? (
              <Button onClick={onFinish} className={classes.btnNext} variant="primary">
                Akhiri
              </Button>
            ) : (
              <Button onClick={onResult} className={classes.btnNext} variant="secondary">
                Lihat Hasil
              </Button>
            )
          ) : (
            <Button onClick={onNext} className={classes.btnNext} variant="primary">
              Selanjutnya
            </Button>
          )}
        </Col>
      </Row>
    </Container>
  );
}

export default NavigationBottom;
