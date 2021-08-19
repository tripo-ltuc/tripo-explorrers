import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Modal,Row,Col} from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
class RestaurantModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
           
           
        }
    }
    

    render() {
        return (<>

            {<Modal
                show={this.props.modalShow}
                onHide={this.props.handleClose}
                backdrop="static"
                keyboard={false}
                size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
            >
                <Modal.Header closeButton>
                    <Modal.Title>{this.props.restaurantData.name}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Row>
                        <Col>
                    <img style={{ width: "20rem", height: "15rem" }} src={this.props.restaurantData.imageUrl} alt={this.props.restaurantData.name}></img>
                    </Col>
                    <br/>
                    <Col>
                    <strong> Rating : {this.props.restaurantData.rating}</strong>
                    <br/>
                    <strong>Location : {this.props.restaurantData.location}</strong>
                    <br/>
                    <strong> Review Count : {this.props.restaurantData.reviewCount}</strong>
                    <br/>
                    <strong> Phone : {this.props.restaurantData.phone}</strong>
                    <br/>
                    <strong> Servecess : {this.props.restaurantData.servecess}</strong>
                    <br/>
                    <cite>If you interested , visit this <a href={this.props.restaurantData.url} style={{color:'black'}} >website</a> </cite>
                    </Col>
                    </Row>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={this.props.handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>}



        </>)
    }



}
export default RestaurantModal;