import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Carousel from 'react-bootstrap/Carousel'
// import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import RestaurantModal from '../ModalComponents/RestaurantModal';
import '../UI/discover.scss'
class RestaurantRendering extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            restaurantData: {},
            index: -1,
            modalShow: false,


        }
    }

    restaurantModalFun = (index) => {

        let data = this.props.restaurantsData[index];
        this.setState({
            restaurantData: data,
            modalShow: true
        })
        console.log(index);
        console.log(this.state.modalShow);

    }
    handleClose = () => {

        this.setState({
            modalShow: false
        })

    }


    render() {
        return (<><div className="resturant-bg">
            {<h1 style={{ textAlign: "center", color:'black'}}>Restaurants</h1>}
            <br />
            {/* <div class="container">
                <div class="row"> */}
            <div class="container">
                
                <div class="container">
                    <div class="card-columns">
                        {this.props.restaurantsData.map((item, idx) => {
                            return (<>
                                <>
                                    <div class="card" style={{backgroundImage:'linear-gradient(#fbefc5,#fbefc5)'}}>
                                            <img class="card-img-top" src={item.imageUrl} alt={item.name} />
                                            <div class="card-body">
                                                <h5 class="card-title">{item.name}</h5>
                                                <p class="card-text">
                                                    <div class="card-text text-black-50">
                                                        <strong>Rating : {item.rating}</strong>
                                                        <br />
                                                        <strong>Location : {item.location}</strong><br />
                                                        <Button variant="warning"  style={{ width: "100%", height: "10%", }} onClick={() => { this.restaurantModalFun(idx) }}>See more ...</Button>
                                                    </div>
                                                </p>
                                            </div>
                                    </div>




                                </>
                                {/* <div style={{height:'555px'}}  class="col-xl-3 col-4">
                                <div class="card border-0 shadow">
                                <img style={{ width: "19rem", height: "12rem" }}  src={item.imageUrl} alt={item.name}></img>
                                    <div class="card-body text-center">
                                        <h5 class="card-title mb-0">{item.name}</h5>
                                        <div class="card-text text-black-50">
                                        <strong>Rating : {item.rating}</strong>
                                    <br />
                                    <strong>Location : {item.location}</strong><br/>
                                            <Button style={{ width: "100%", height: "10%", }}onClick={() => { this.restaurantModalFun(idx) }}>See more ...</Button>
                                        </div>

                                    </div>
                                </div>
                            </div> */}


                                {/* <Card key={idx} style={{ width: "20%", height: "27%", display: "inline-block"}}>
                        <Card.Header style={{ width: "100%", height: "10%", }}>{item.name}</Card.Header>
                        <Card.Body>
                            <img style={{ width: "15rem", height: "8rem" }} src={item.imageUrl} alt={item.name}></img>
                                <p>
                                    {' '}
                                    <strong>Rating : {item.rating}</strong>
                                    <br />
                                    <strong>Location : {item.location}</strong>
                                </p>
                                
                        </Card.Body>
                        <Button style={{ width: "100%", height: "10%", }} onClick={() => { this.restaurantModalFun(idx) }}>More...</Button>
                    </Card> */}
                            </>
                            )
                        })}
                    </div>
                </div>
            </div>
            {/* </div>
            </div> */}
            <RestaurantModal restaurantData={this.state.restaurantData} modalShow={this.state.modalShow} handleClose={this.handleClose} />
        </div>
        </>)
    }


}
export default RestaurantRendering;