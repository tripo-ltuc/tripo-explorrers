import { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Button, Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash,faEdit } from "@fortawesome/free-solid-svg-icons";
import './Comment.css';
class Comment extends Component{

    render(){
        return(
            <>             
                    <div className="d-flex my-3">
                        <Container className='w-25'>
                           <img className="mx-2 rounded-circle" style={{width:'5rem',height:'auto'}} src={this.props.comment.userImg} alt="user img"/>  
                           <Card.Text><h3>{this.props.comment.userName}</h3></Card.Text>
                        </Container>
                        <Container  style={{clipPath: `polygon(6% 0, 100% 0%, 100% 100%, 63% 100%, 4% 100%, 4% 18%, 0 11%)`}}>
                    <Card className="align-self-start">
                        <Card.Header className="bg-white">
                        <Card.Body style={{fontSize:'20px'}}>
                        <Card.Text>{this.props.comment.userComment}</Card.Text>
                    </Card.Body>
                        {this.props.owner.nickname ===  this.props.comment.userName
                          &&<Card.Body>
                                <Button variant="success"style={{marginRight:'2%'}}
                                onClick={() => this.props.editComment(this.props._id, this.props.postIdx, this.props.commentIdx)}>
                                  <FontAwesomeIcon icon={faEdit} fixedWidth />
                                </Button>
                                <Button  variant="danger" 
                                onClick={() => this.props.deleteComment(this.props.commentIdx, this.props._id)}>
                                 <FontAwesomeIcon icon={faTrash} fixedWidth />
                                </Button>
                          </Card.Body>}
                    </Card.Header>
                    </Card>
                   </Container>
                </div>
            </>
        );
    }
}

export default Comment;