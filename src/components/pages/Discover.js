import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../UI/Discover.css';
import CardGroup from 'react-bootstrap/CardGroup';
import {Button} from 'react-bootstrap';
// import Carousel from 'react-bootstrap/Carousel';
// import Col from 'react-bootstrap/FormCheck';
import { Link } from "react-router-dom";
import axios from 'axios';
import CityNameForm from '../DiscoverFunctionalities/CityNameForm'
// import { faHome,faUsers,faMap,faPen,faUserCircle,faEdit,faHeart,faSearch } from "@fortawesome/free-solid-svg-icons";
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
            toRenderAllResults: false,
            weatherData: [],
            hotelsData: [],
            covidData: [],
            tursData: [],
            restaurantsData: [],

        }
    }
    //============================getting city name ,lat and lon from CityNameForm=============//  
    getCityName = (city, lat, lon, flag) => {
        this.setState({
            cityName: city,
            latitude: lat,
            longitude: lon,
            toRenderAllResults: flag,
        });

    }
    //============================getting weather Data from weater API=====================//
    getWeatherData = () => {
        const url = `http://localhost:3001/Weather?lat=${this.state.latitude}&lon=${this.state.latitude}&city=${this.state.cityName}`;

        axios
            .get(url)
            .then(result => {

                this.setState({
                    weatherData: result.data
                });
            })
            .catch(err => {
                console.log(err);
            });



    }
    //===============================get hotel data from hotel API===========================//
    getHotelData = () => {
        const url = `http://localhost:3001/Hotel?cityName=${this.state.cityName}`;

        axios
            .get(url)
            .then(result => {
                let data = result.data
                this.setState({
                    hotelsData: data
                });
            })
            .catch(err => {
                console.log(err);
            });

    }
    //======================================get covid data from covid API===========================

    getCovidData = () => {
        const url = `http://localhost:3001/Covid?cityName=${this.state.cityName}`;
        axios
            .get(url)
            .then(result => {
                let data = result.data;
                this.setState({
                    covidData: data
                });
            })
            .catch(err => {
                console.log(err);
            });

    }

    //======================================get turs data from turs API===========================
    getTursData = () => {
        const url = `http://localhost:3001/Activity?lat=${this.state.latitude}&lon=${this.state.longitude}`;

        axios
            .get(url)
            .then(result => {
                let data = result.data
                this.setState({
                    tursData: data
                });
            })
            .catch(err => {
                console.log(err);
            });


    }

    //======================================get restaurant data from restaurant API===========================
    getRestaurantData = () => {
        const url = `http://localhost:3001/Resturant?cityName=${this.state.cityName}`;

        axios
            .get(url)
            .then(result => {
                let data = result.data
                this.setState({
                    restaurantsData: data
                });
            })
            .catch(err => {
                console.log(err);
            });
    }


    render() {
        return (
    <React.Fragment>
                {/* { console.log(this.state.weatherData)} */}
                <CityNameForm setCityName={this.props.setCityName} getCityName={this.getCityName} getWeatherData={this.getWeatherData} getHotelData={this.getHotelData} getCovidData={this.getCovidData} getTursData={this.getTursData} getRestaurantData={this.getRestaurantData} />

                {console.log(this.state.covidData)}


                {this.state.covidData.length && <Covid19Rendaring covidData={this.state.covidData[0]} />}

                {this.state.toRenderAllResults && <HotelDataRendering hotelsData={this.state.hotelsData} />}

                {this.state.toRenderAllResults && <TursRendering tursData={this.state.tursData} />}

                {this.state.toRenderAllResults && <RestaurantRendering restaurantsData={this.state.restaurantsData} />}

                {this.state.toRenderAllResults && 
                <div className="forcast-bg">
                <h1 style={{ textAlign: "center", color:'black'}}>Forcast for the next 16 days</h1>
                <CardGroup>
                <div class="container">
  <div class="row">
                <CardGroup>

                        {this.state.weatherData.map((weatherData, idx) => {
                            return (
                            
                                    <WeatherRendering weatherData={this.state.weatherData[idx]} />
                            )
                        })}
                        </CardGroup>
                        </div>
                        </div>

                        </CardGroup>
</div>
                }
               {this.state.toRenderAllResults &&  <Link to="/reviews"><Button className="btn-discover2" action variant="warning">Leave a Review</Button></Link>}








                



        </React.Fragment>
        )
    }
}

export default Discover;


// {/* {this.state.toRenderAllResults && <Covid19Functionalities cityName={this.state.cityName}/>} */}
//                 {/* <CardGroup> */}
//                 {this.state.toRenderAllResults && <HotelFunctionalities cityName={this.state.cityName} />}
//                 {this.state.toRenderAllResults && <TursFunctionalities latitude={this.state.latitude} longitude={this.state.longitude}/>}
//                 {this.state.toRenderAllResults && <RestaurantFunctionalities cityName={this.state.cityName}/>}
//             {/* </CardGroup> */}
//             {this.state.toRenderAllResults && <WeatherFunctionalities lat={this.state.latitude} lon={this.state.longitude} cityName={this.state.cityName}/>} 
