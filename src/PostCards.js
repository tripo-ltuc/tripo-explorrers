"use strict";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
// import Card from "react-bootstrap/card";
// import stylingCards from "./stylingCards";
// import Carousel from "react-bootstrap/Carousel";

class PostCards extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      server: process.env.REACT_APP_URL,
      citiesData: [],
      //   show: false,

      city: "",
    };
  }

  method1 = () => {
    this.setState({
      city: "Amman",
    });

    renderInfo();
  };

  renderInfo = async () => {
    // this.setState({
    //   city: event.target.name.value,
    // });
    // let city = event.target.name.value;
    // const { user } = this.props.auth0;

    await axios
      .get(`${this.state.server}/cards?city=${this.state.city}`)

      .then((results) => {
        this.setState({
          citiesData: results.data,
        });

        console.log(city);
        console.log(citiesData);
      })

      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    return (
      <>
        {/* <form onSubmit={this.renderInfo}>
          <fieldset>
            <label>cat name</label>
            <input type="text" name="name" />
            <label>cat breed</label>
            <input type="submit" value="Update" />
          </fieldset>
        </form>
        <p>"hi"</p> */}
        <button onClick={this.method1}></button>
        {/* <div>
          {this.state.citiesData &&
            this.state.citiesData.map((item, idx) => {
              return (
                <>
                  <h3>{item.placeName}</h3>
                  <p>{item.userName}</p>
                  <p>{item.comment}</p>
                </>
              );
            })}
        </div> */}
      </>
    );
  }
}

export default PostCards;
