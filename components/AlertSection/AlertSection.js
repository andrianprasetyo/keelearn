import { useState } from "react";
import { Alert, Button } from "react-bootstrap";

function AlertSection(props) {
  return (
    <section id="alert">
      <Alert show={props.showAlert} variant="danger">
        <span className="text-center">Mohon Pilih Jawaban Terlebih Dahulu</span>
      </Alert>
    </section>
  );
}

export default AlertSection;
