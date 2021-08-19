import { Component } from "react";
import { Button, Card,Row,Col } from "react-bootstrap";
import { withAuth0 } from "@auth0/auth0-react";
import { Form, FloatingLabel } from "react-bootstrap";
// import 'bootstrap/dist/css/bootstrap.min.css';
import './Styles/post.css';
import Comment from "./Comment";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash,faEdit,faPen,faUserCircle,faMapSigns, faCommentDots } from "@fortawesome/free-solid-svg-icons";

class Post extends Component{

    commentHandler = (event, _id) => {
        event.preventDefault();
        const {user} = this.props.auth0;
        const comment = {
            userImg: user.picture,
            userName: user.nickname,
            userComment: event.target.userComment.value,
        };

        this.props.addComment(_id, comment);
        event.target.reset();
    };

    render(){
        const {user} = this.props.auth0;
        return(
            <>
                <Card className="w-75 card-post" >
                    <Card.Body className="main-body">
                        <Row>
                           
                            <Col>
                            <Card.Title className="card-title">
                            <Card.Body className="title-body">
                                <Card.Img className="mx-2 rounded-circle" style={{width: '7rem'}} src={this.props.item.userImg} alt="userImg"/>
                                <Card.Text><h3><strong>{this.props.item.userName}</strong></h3></Card.Text>
                            </Card.Body>
                            <Card.Title className="cardCity">{this.props.item.cityName}</Card.Title>
                        </Card.Title>
                        <br/>
                        <hr/>
                        <Card.Body className='contentReview'>
                            <Card.Text >{this.props.item.content}</Card.Text>
                        </Card.Body>
                        <Card.Body className="d-flex">
                            <i class="fas fa-heart mx-2"></i>{this.props.item.likes}
                        </Card.Body>
                            </Col>
                            <Col>
                            <Card.Img style={{width:'30rem',height:'30rem',borderRadius:'5%', margin:'2%'}} src={this.props.item.cityImg}/>
                            </Col>
                        </Row>
                       
                        <Card.Body>
                            {user.email === this.props.item.userEmail
                            && <Card.Body>
                                <Button variant="danger" style={{marginRight:'1%'}} onClick={() => this.props.deletePost(this.props.item._id)}
                                ><FontAwesomeIcon icon={faTrash} fixedWidth /></Button>
                                <Button variant="success" onClick={() => this.props.updatePost(this.props.item._id, this.props.idx)}
                                ><FontAwesomeIcon icon={faEdit} fixedWidth /></Button>
                            </Card.Body>}
                        </Card.Body>
                        <Card.Body>
                            <Card.Body>
                                <Form onSubmit={(event) => this.commentHandler(event, this.props.item._id)}>
                                    <FloatingLabel controlId="floatingTextarea2" label="Comments">
                                        <Form.Control
                                        as="textarea"
                                        placeholder="Leave a comment here"
                                        style={{ height: '100px' }}
                                        name="userComment"
                                        />
                                    </FloatingLabel>
                                    <Button type="submit" style={{marginTop:'10px', marginLeft:'85%'}}><FontAwesomeIcon icon={faCommentDots} fixedWidth /> Add Comment</Button>
                                </Form>
                            </Card.Body>
                            {this.props.item.comments.length !==0
                            && <Card.Body 
                            className="d-flex flex-column">
                                    {this.props.item.comments.length !==0
                                     &&this.props.item.comments.map((comment, idx) => {
                                        
                                        return <Comment 
                                                comment={comment} 
                                                commentIdx={idx}
                                                postIdx={this.props.idx}
                                                _id={this.props.item._id}
                                                owner={user}
                                                deleteComment={this.props.deleteComment}
                                                editComment={this.props.editComment}
                                                />
                                    })}
                               </Card.Body>}
                        </Card.Body>
                    </Card.Body>
                </Card>
            </>
        );
    }
}

export default withAuth0(Post);