import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
class HotelModal extends React.Component {
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
            >
                <Modal.Header closeButton>
                    <Modal.Title>{this.props.hotelData.name}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <img style={{ width: "20rem", height: "15rem" }} src={this.props.hotelData.modalImgUrl} alt={this.props.hotelData.name}></img>
                    <br/>
                    <strong>Star Rating : {this.props.hotelData.starRating}</strong>
                    <br/>
                    <strong>Price : {this.props.hotelData.price}</strong>
                    <br/>
                    <strong> Hotel address : {this.props.hotelData.address}</strong>
                    <br/>
                    <strong> Guest Reviews : {this.props.hotelData.guestReviews}</strong>
                    <br/>
                    <strong> Rooms Left : {this.props.hotelData.roomsLeft}</strong>
                    <br/>
                    
                    {/* <cite>If you interested , visit this <a href={this.props.hotelData.bookingLink} style={{color:'black'}} >website</a> </cite> */}

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
export default HotelModal;