import { Component } from "react";
import { Modal, Button, Form, FloatingLabel } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
class UpdatePostModal extends Component{

    updatePost = event =>{
        event.preventDefault();
        console.log("updatePost");

        const cityName = event.target.cityName.value;
        const cityImg = event.target.cityImg.value;
        const content = event.target.content.value;
        
        this.props.updateUserPost(cityName, cityImg, content);
        this.props.setUpdateModalFlag(false);
    };

    render(){
        return(
            <>
                    <Modal
                        size="lg"
                        aria-labelledby="contained-modal-title-vcenter"
                        centered
                        show={this.props.toShow}
                        onHide={this.props.toShow}
                        >
                        <Modal.Header closeButton>
                            <Modal.Title id="contained-modal-title-vcenter">
                                Update Post
                            </Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <Form onSubmit={this.updatePost}>
                                <Form.Group>
                                    <Form.Label >City Name</Form.Label>
                                    <Form.Control name="cityName" type="text" defaultValue={this.props.cityName}/>
                                </Form.Group>
                                
                                <Form.Group>
                                    <Form.Label>City Image</Form.Label>
                                    <Form.Control name="cityImg" type="text" defaultValue={this.props.cityImg}/>
                                </Form.Group>

                                <FloatingLabel controlId="floatingTextarea2" label="Tell Us Your Story">
                                    <Form.Control
                                    as="textarea"
                                    placeholder="Leave a comment here"
                                    style={{ height: '100px' }}
                                    name="content"
                                    defaultValue={this.props.content}
                                    />
                                </FloatingLabel>
                                <Button type="submit">Update</Button>
                            </Form>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button onClick={() => this.props.setUpdateModalFlag(false)}>Close</Button>
                        </Modal.Footer>
                    </Modal>
            </>
        );
    }
 }

 export default UpdatePostModal;