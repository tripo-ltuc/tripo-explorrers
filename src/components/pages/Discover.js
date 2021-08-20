import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../UI/Discover.css';
import CardGroup from 'react-bootstrap/CardGroup';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';
import CityNameForm from '../DiscoverFunctionalities/CityNameForm';
import WeatherRendering from '../DiscoverRendering/WeatherRendering';
import HotelDataRendering from '../DiscoverRendering/HotelDataRendering';
import Covid19Rendaring from '../DiscoverRendering/Covid19Rendaring';
import TursRendering from '../DiscoverRendering/TursRendering';
import RestaurantRendering from '../DiscoverRendering/RestaurantRendering';
import '../UI/home.scss';

class Discover extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cityName: '',
      latitude: '',
      longitude: '',
      weatherData: [],
      hotelsData: [],
      covidData: {},
      tursData: [],
      restaurantsData: [],
    };
  }

  getAllAPIDataHandler = () => {
    this.getCovidData();
    this.getHotelData();
    this.getTursData();
    this.getRestaurantData();
    this.getWeatherData();
  };
  //============================getting city name ,lat and lon from CityNameForm=============//
  getCityName = (city, lat, lon) => {
    this.setState({
      cityName: city,
      latitude: lat,
      longitude: lon,
    });
  };
  //============================getting weather Data from weater API=====================//
  getWeatherData = () => {
    const url = `${process.env.REACT_APP_URL}/Weather?lat=${this.state.latitude}&lon=${this.state.latitude}&city=${this.state.cityName}`;

    axios
      .get(url)
      .then(result => {
        this.setState({
          weatherData: result.data,
        });
      })
      .catch(err => {
        console.log(err);
      });
  };
  //===============================get hotel data from hotel API===========================//
  getHotelData = () => {
    const url = `${process.env.REACT_APP_URL}/Hotel?cityName=${this.state.cityName}`;
    axios
      .get(url)
      .then(result => {
        let data = result.data;
        console.log('hotelData: ', data);
        this.setState({
          hotelsData: data,
        });
      })
      .catch(err => {
        console.log(err);
      });
  };
  //======================================get covid data from covid API===========================

  getCovidData = () => {
    const url = `${process.env.REACT_APP_URL}/Covid?cityName=${this.state.cityName}`;
    axios
      .get(url)
      .then(result => {
        let data = result.data;
        console.log('covidData: ', data);
        this.setState({
          covidData: data,
        });
      })
      .catch(err => {
        console.log(err);
      });
  };

  //======================================get turs data from turs API===========================
  getTursData = () => {
    const url = `${process.env.REACT_APP_URL}/Activity?lat=${this.state.latitude}&lon=${this.state.longitude}`;
    axios
      .get(url)
      .then(result => {
        let data = result.data;
        this.setState({
          tursData: data,
        });
      })
      .catch(err => {
        console.log(err);
      });
  };

  //======================================get restaurant data from restaurant API===========================
  getRestaurantData = () => {
    const url = `${process.env.REACT_APP_URL}/Resturant?cityName=${this.state.cityName}`;

    axios
      .get(url)
      .then(result => {
        let data = result.data;
        this.setState({
          restaurantsData: data,
        });
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    return (
      <React.Fragment>
        {/* { console.log(this.state.weatherData)} */}
        <CityNameForm
          setCityName={this.props.setCityName}
          getCityName={this.getCityName}
          getAllAPIDataHandler={this.getAllAPIDataHandler}
        />

        {Object.keys(this.state.covidData).length && (
          <Covid19Rendaring covidData={this.state.covidData} />
        )}

        {this.state.hotelsData.length && (
          <HotelDataRendering hotelsData={this.state.hotelsData} />
        )}

        {this.state.tursData.length && (
          <TursRendering tursData={this.state.tursData} />
        )}

        {this.state.restaurantsData.length && (
          <RestaurantRendering restaurantsData={this.state.restaurantsData} />
        )}

        {this.state.weatherData.length && (
          <div className='forcast-bg'>
            <h1 style={{ textAlign: 'center', color: 'black' }}>
              Forcast for the next 16 days
            </h1>
            <CardGroup>
              <div class='container'>
                <div class='row'>
                  <CardGroup>
                    {this.state.weatherData.map(weatherDataItem => {
                      return <WeatherRendering weatherData={weatherDataItem} />;
                    })}
                  </CardGroup>
                </div>
              </div>
            </CardGroup>
          </div>
        )}
        <Link to='/reviews'>
          <Button className='btn-discover2' action variant='warning'>
            Leave a Review
          </Button>
        </Link>
      </React.Fragment>
    );
  }
}

export default Discover;
