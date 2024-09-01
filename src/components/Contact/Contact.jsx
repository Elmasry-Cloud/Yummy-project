import React from "react";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";

export default function Contact() {
  return (
    <>
      <h1 className="head mb-5">Contact :</h1>

      <form action="" className="">
        <div className="row row-gap-3">
          <div className="col-md-6">
            <FloatingLabel controlId="floatingName" label="Name">
              <Form.Control type="text" placeholder="Name" />
            </FloatingLabel>
          </div>
          <div className="col-md-6">
            <FloatingLabel controlId="floatingInput" label="Email address">
              <Form.Control type="email" placeholder="name@example.com" />
            </FloatingLabel>
          </div>
          <div className="col-md-6">
            <FloatingLabel controlId="floatingPhone" label="Phone">
              <Form.Control type="tel" placeholder="Phone" />
            </FloatingLabel>
          </div>
          <div className="col-md-6">
            <FloatingLabel controlId="floatingAge" label="Age">
              <Form.Control type="number" placeholder="Age" />
            </FloatingLabel>
          </div>
          <div className="col-md-6">
            <FloatingLabel controlId="floatingPassword" label="Password">
              <Form.Control type="password" placeholder="Password" />
            </FloatingLabel>
          </div>
          <div className="col-md-6">
            <FloatingLabel controlId="floatingRePassword" label="RePassword">
              <Form.Control type="password" placeholder="RePassword" />
            </FloatingLabel>
          </div>
        </div>
        <button type="submit" className="btn btn-danger my-3 d-block m-auto">
          Submit
        </button>
      </form>
    </>
  );
}
