import { Component } from "react";
import { Modal, Form, Button, FloatingLabel } from "react-bootstrap";

class UpdateCommentModal extends Component{

    updateCommentHandler = (event) => {
        event.preventDefault();
        
        const comment = event.target.comment.value;
        console.log("in handler and the value :", comment);
        this.props.updateComment(comment);
        this.props.setCommentModalFlag(false);
        
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
                                Update Comment
                            </Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <Form onSubmit={this.updateCommentHandler}>
                                <FloatingLabel controlId="floatingTextarea2" label="leave a comment">
                                    <Form.Control
                                    as="textarea"
                                    placeholder="Leave a comment here"
                                    style={{ height: '100px' }}
                                    name="comment"
                                    defaultValue={this.props.comment}
                                    />
                                </FloatingLabel>
                                <Button variant="success" type="submit">Update</Button>
                            </Form>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button onClick={() => this.props.setCommentModalFlag(false)}>Close</Button>
                        </Modal.Footer>
                    </Modal>
            </>
        );
    }
}


export default UpdateCommentModal;