import React, { Component } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

class CardsModal extends Component {
  render() {
    return (
      <div>
        <Modal
          show={this.props.show}
          onHide={this.props.closingModal}
          backdrop="static"
          keyboard={false}
          dialogClassName="modal-10w"
        >
          <Modal.Header closeButton>
            <Modal.Title>Your Comments Count!</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={this.props.addingReviews}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Add city Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="nameOfCity"
                    placeHolder="Please enter the name of city you visited"
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Add city imag!</Form.Label>
                  <Form.Control
                    type="text"
                    name="imgName"
                    placeHolder="Please enter an image of the city you want to comment about!"
                  />
                </Form.Group>
                <Form.Label>Add your comment</Form.Label>
                <Form.Control
                  type="text"
                  name="userComment"
                  placeHolder="Please enter your comment!"
                />
              </Form.Group>

              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.props.closingModal}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
        {/* </> */}
      </div>
    );
  }
}

export default CardsModal;