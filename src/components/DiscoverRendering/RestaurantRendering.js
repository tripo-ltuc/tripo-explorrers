import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Carousel from 'react-bootstrap/Carousel'
// import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import RestaurantModal from '../ModalComponents/RestaurantModal';
import '../UI/discover.scss';
class RestaurantRendering extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      restaurantData: {},
      modalShow: false,
    };
  }

  restaurantModalFun = index => {
    let data = this.props.restaurantsData[index];
    this.setState({
      restaurantData: data,
      modalShow: true,
    });
  };

  handleClose = () => {
    this.setState({
      modalShow: false,
    });
  };

  render() {
    return (
      <>
        <div className='resturant-bg'>
          {<h1 style={{ textAlign: 'center', color: 'black' }}>Restaurants</h1>}
          <br />
          <div class='container'>
            <div class='container'>
              <div class='card-columns'>
                {this.props.restaurantsData.map((item, idx) => {
                  return (
                    <>
                      <>
                        <div
                          class='card'
                          style={{
                            backgroundImage: 'linear-gradient(#fbefc5,#fbefc5)',
                          }}
                        >
                          <img
                            class='card-img-top'
                            src={item.imageUrl}
                            alt={item.name}
                          />
                          <div class='card-body'>
                            <h5 class='card-title'>{item.name}</h5>
                            <p class='card-text'>
                              <div class='card-text text-black-50'>
                                <strong>Rating : {item.rating}</strong>
                                <br />
                                <strong>Location : {item.location}</strong>
                                <br />
                                <Button
                                  variant='warning'
                                  style={{ width: '100%', height: '10%' }}
                                  onClick={() => {
                                    this.restaurantModalFun(idx);
                                  }}
                                >
                                  See more ...
                                </Button>
                              </div>
                            </p>
                          </div>
                        </div>
                      </>
                    </>
                  );
                })}
              </div>
            </div>
          </div>
          <RestaurantModal
            restaurantData={this.state.restaurantData}
            modalShow={this.state.modalShow}
            handleClose={this.handleClose}
          />
        </div>
      </>
    );
  }
}
export default RestaurantRendering;
