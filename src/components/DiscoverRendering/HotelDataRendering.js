import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import HotelModal from '../ModalComponents/HotalModal';

class HotelDataRendering extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hotelData: {},
      modalShow: false,
    };
  }

  hotelModalFun = index => {
    let data = this.props.hotelsData[index];
    this.setState({
      hotelData: data,
      modalShow: true,
    });
    console.log(index);
    console.log(this.state.modalShow);
  };
  handleClose = () => {
    this.setState({
      modalShow: false,
    });
  };

  render() {
    return (
      <>
        <div
          className='bg-hotel'
          style={{ margin: '10px', backgroundColor: '#FEFDCA' }}
        >
          {/* {console.log('data[0] :', this.props.hotelsData[0])} */}
          {<h1 style={{ textAlign: 'center', color: 'black' }}>Hotels</h1>}
          <br />
          {this.props.hotelsData.map((item, idx) => {
            return (
              <>
                <Card
                  key={idx}
                  style={{
                    width: '20%',
                    height: '27%',
                    display: 'inline-block',
                    marginLeft: '10%',
                    marginBottom: '5%',
                    backgroundImage: 'linear-gradient(#ffd298,#f5d976)',
                  }}
                >
                  <Card.Body
                    style={{
                      width: '100%',
                      height: '10%',
                      textAlign: 'center',
                    }}
                  >
                    <strong>{item.name}</strong>
                  </Card.Body>
                  <Card.Body>
                    <img
                      style={{ width: '100%', height: '8rem' }}
                      src={item.cardImgUrl}
                      alt={item.name}
                    ></img>
                    <p style={{ marginTop: '5px' }}>
                      {' '}
                      <strong>StarRating : {item.starRating}</strong>
                      <br />
                      <strong>Price : {item.price}</strong>
                    </p>
                  </Card.Body>
                  <Button
                    style={{
                      width: '80%',
                      height: '10%',
                      margin: '0 0 10px 30px',
                    }}
                    variant='warning'
                    onClick={() => {
                      this.hotelModalFun(idx);
                    }}
                  >
                    More...
                  </Button>
                </Card>
              </>
            );
          })}
        </div>

        <HotelModal
          hotelData={this.state.hotelData}
          modalShow={this.state.modalShow}
          handleClose={this.handleClose}
        />
      </>
    );
  }
}
export default HotelDataRendering;
