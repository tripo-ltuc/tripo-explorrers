import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';





class WeatherRendering extends React.Component {
  
  
  
  render() {
    const photo = require(`../../images/animated/${this.props.weatherData.icon}.svg`).default;
    
        return (

<React.Fragment>                          
{console.log(this.props.weatherData.icon)}
                <div class="col-xl-2 col-md-6 mb-4">
      <div class="card border-3 shadow bg-card">
      <img src={photo} alt="..."/>
        <div class="card-body text-center">
          <div class="card-text text-black-50">
          <strong>{this.props.weatherData.date}</strong>
                                    <br />
                                    <strong > {this.props.weatherData.description}</strong>
          </div>

        </div>
      </div>
    </div>

</React.Fragment>)
    }


}
export default WeatherRendering;

