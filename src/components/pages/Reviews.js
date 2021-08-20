import React from 'react';
import axios from 'axios';
import AddPostModal from '../UI/ReviewUI/AddPostModal';
import Post from '../UI/ReviewUI/Post.js';
import UpdatePostModal from '../UI/ReviewUI/UpdatePostModal';
import UpdateCommentModal from '../UI/ReviewUI/UpdateCommentModal';
import { withAuth0 } from '@auth0/auth0-react';
import '../UI/ReviewUI/Styles/reviewPage.css';
import ReviewHeader from '../UI/ReviewUI/ReviewHeader';

class Reviews extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      server: process.env.REACT_APP_URL,
      showPosts: false,
      addPostFlag: false,
      updatePostFlag: false,
      updatePostComment: false,
      dataLength: 0,
      postData: [],
      _id: 0,
      cityName: 'all',
      cityImg: '',
      content: '',
      comment: '',
      linkes: 0,
      commentIdx: -1,
    };
  }

  componentDidMount = () => {
    // const { user } = this.props.auth0;
    this.setState({
      cityName: this.props.getCityName,
    });
    const endPoint =
      this.state.cityName === 'all' ? 'getAllCards' : 'getCityCards';
    axios
      .get(`${this.state.server}/${endPoint}`, {
        params: { cityName: this.state.cityName },
      })
      .then(results => {
        this.setState({
          postData: results.data,
          dataLength: results.data.length,
        });
      })
      .catch(err => console.log(err));
  };

  addingReviews = event => {
    event.preventDefault();
    const { user } = this.props.auth0;
    console.log(user);
    const newObject = {
      userImg: user.picture,
      userName: user.nickname,
      userEmail: user.email,
      cityName: event.target.nameOfCity.value,
      content: event.target.userComment.value,
      cityImg: event.target.imgName.value,
    };

    this.closeModal();
    axios
      .post(`${this.state.server}/addCard`, newObject)
      .then(results => {
        this.setState({
          postData: results.data,
          dataLength: results.data.length,
        });
      })
      .catch(err => {
        console.log(err);
      });
  };

  showModal = () => {
    this.setState({
      addPostFlag: true,
    });
  };

  closeModal = () => {
    this.setState({
      addPostFlag: false,
    });
  };

  deletePost = id => {
    console.log('id: ', id);
    axios
      .delete(`${this.state.server}/deleteCard/${id}`)
      .then(result => {
        this.setState({
          postData: result.data,
          dataLength: result.data.length,
        });
      })
      .catch();
  };

  updatePost = (_id, id) => {
    this.setState({
      updatePostFlag: true,
      _id: _id,
      cityName: this.state.postData[id].cityName,
      cityImg: this.state.postData[id].cityImg,
      content: this.state.postData[id].content,
    });
  };

  updateUserPost = (cityName, cityImg, content) => {
    const id = this.state._id;
    const params = {
      cityName: cityName,
      cityImg: cityImg,
      content: content,
    };

    axios
      .put(`${this.state.server}/updateCard/${id}`, params)
      .then(result => {
        this.setState({
          postData: result.data,
          dataLength: result.data.length,
        });
      })
      .catch(err => console.log(err));
  };

  setUpdateModalFlag = toShow => {
    this.setState({
      updatePostFlag: toShow,
    });
  };

  addComment = (_id, comment) => {
    const params = {
      id: _id,
      comment: comment,
    };

    console.log('param:', params);

    axios
      .post(`${this.state.server}/addCardComment`, params)
      .then(result => {
        this.setState({
          postData: result.data,
          dataLength: result.data.length,
        });
      })
      .catch(err => console.log(err));
  };

  deleteComment = (commentIdx, id) => {
    const params = {
      commentIdx: commentIdx,
    };

    axios
      .delete(`${this.state.server}/deleteCardComment/${id}`, params)
      .then(result => {
        this.setState({
          postData: result.data,
          dataLength: result.data.length,
        });
      })
      .catch(err => console.log(err));
  };

  editComment = (post_id, postIdx, commentIdx) => {
    this.setState({
      updatePostComment: true,
      comment: this.state.postData[postIdx].comments[commentIdx].userComment,
      _id: post_id,
      commentIdx: commentIdx,
    });
  };

  updateComment = comment => {
    const { user } = this.props.auth0;

    const newComment = {
      userImg: user.picture,
      userName: user.nickname,
      userComment: comment,
    };
    const params = {
      commentIdx: this.state.commentIdx,
      newComment: newComment,
    };

    console.log(params);
    axios
      .put(`${this.state.server}/updateCardComment/${this.state._id}`, params)
      .then(result => {
        this.setState({
          postData: result.data,
          dataLength: result.data.length,
        });
      })
      .catch(err => console.log(err));
  };

  setCommentModalFlag = toShow => {
    this.setState({
      updatePostComment: toShow,
    });
  };

  render() {
    return (
      <React.Fragment>
        <ReviewHeader showModal={this.showModal} />
        <div className='main-div'>
          {/* <button onClick={this.showModal}>Add A Post</button> */}
          {this.state.addPostFlag && (
            <AddPostModal
              addingReviews={this.addingReviews}
              closingModal={this.closeModal}
              show={this.state.addPostFlag}
            />
          )}

          {this.state.dataLength &&
            this.state.postData.map((item, idx) => {
              return (
                <Post
                  item={item}
                  idx={idx}
                  deletePost={this.deletePost}
                  updatePost={this.updatePost}
                  addComment={this.addComment}
                  deleteComment={this.deleteComment}
                  editComment={this.editComment}
                />
              );
            })}

          {this.state.updatePostFlag && (
            <UpdatePostModal
              cityName={this.state.cityName}
              cityImg={this.state.cityImg}
              content={this.state.content}
              toShow={this.state.updatePostFlag}
              updateUserPost={this.updateUserPost}
              setUpdateModalFlag={this.setUpdateModalFlag}
            />
          )}

          {this.state.updatePostComment && (
            <UpdateCommentModal
              comment={this.state.comment}
              toShow={this.state.updatePostComment}
              setCommentModalFlag={this.setCommentModalFlag}
              updateComment={this.updateComment}
            />
          )}
        </div>
      </React.Fragment>
    );
  }
}

export default withAuth0(Reviews);
