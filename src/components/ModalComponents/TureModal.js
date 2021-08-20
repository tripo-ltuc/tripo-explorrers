import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal, Row, Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';

class TureModal extends React.Component {
  render() {
    return (
      <>
        {
          <Modal
            show={this.props.modalShow}
            onHide={this.props.handleClose}
            backdrop='static'
            keyboard={false}
            size='xl'
            aria-labelledby='contained-modal-title-vcenter'
            centered
          >
            <Modal.Header closeButton>
              <Modal.Title id='contained-modal-title-vcenter'>
                {this.props.tureData.name}
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Row>
                <Col>
                  <img
                    style={{ width: '20rem', height: '15rem' }}
                    src={this.props.tureData.picture}
                    alt={this.props.tureData.name}
                  ></img>
                </Col>
                <Col>
                  <cite>{this.props.tureData.description}</cite>
                  <br />
                  <strong>Rating : {this.props.tureData.rating}</strong>
                  <br />
                  <strong>Price : {this.props.tureData.price}</strong>
                  <br />
                  <cite>
                    If you interested , visit this
                    <strong>
                      {' '}
                      <a
                        href={this.props.tureData.bookingLink}
                        style={{ color: 'black' }}
                        target='_blank'
                      >
                        website
                      </a>
                    </strong>{' '}
                  </cite>
                </Col>
              </Row>
            </Modal.Body>
            <Modal.Footer>
              <Button variant='secondary' onClick={this.props.handleClose}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>
        }
      </>
    );
  }
}
export default TureModal;
