import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Carousel from 'react-bootstrap/Carousel';
// import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import TureModal from '../ModalComponents/TureModal';
import '../UI/Activities.css';

class TursRendering extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tureData: {},
            index: -1,
            modalShow: false,


        }
    }


    tureModalFun = (index) => {
        let data = this.props.tursData[index];
        this.setState({
            tureData: data,
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

        return (<><div className="bg-activities">
            {<h1 style={{ textAlign: "center" }}>Activities</h1>}
            <br />
            <div class="container">
                <div class="row">
                    {this.props.tursData.map((item, idx) => {
                        return (<>
                            <div class="col-xl-3 col-md-6 mb-4">
                                <div  class="card border-0 shadow">
                                    <img style={{ width: "19rem", height: "12rem" }} src={item.picture} class="card-img-top" alt="..." />
                                    <div class="card-body text-center">
                                        <h5 class="card-title mb-0">{item.name}</h5>
                                        <div class="card-text text-black-50">
                                            <strong>Rating : {item.rating}</strong>
                                            <br />
                                            <strong>Price : {item.price}</strong><br/>
                                            <Button variant="warning" style={{ width: "100%", height: "10%", }} target='_blank' onClick={() => { this.tureModalFun(idx) }}>More...</Button>
                                        </div>

                                    </div>
                                </div>
                            </div>

                            


                            {/* <Card key={idx} style={{ display: "inline-block"}}>
                        <Card.Header >{item.name}</Card.Header>
                        <Card.Body>
                            <img  src={item.picture} alt={item.name}></img>
                            <blockquote className="blockquote mb-0">
                                <p>
                                    {' '}
                                    <strong>Rating : {item.rating}</strong>
                                    <br />
                                    <strong>Price : {item.price}</strong>
                                </p>
                                <footer className="blockquote-footer">
                                </footer>
                            </blockquote>
                        </Card.Body>
                        <Button  onClick={() => { this.tureModalFun(idx) }}>More...</Button>
                    </Card>  */}

                        </>)
                    })}
                </div>
            </div>
</div>
            {console.log(this.state.tureData)}
            {/* {console.log(this.state.modalShow)} */}
            <TureModal tureData={this.state.tureData} modalShow={this.state.modalShow} handleClose={this.handleClose} />

        </>)
    }


}
export default TursRendering;

//  <Card key={idx} style={{ display: "inline-block"}}>
//                         <Card.Header >{item.name}</Card.Header>
//                         <Card.Body>
//                             <img style={{ width: "15rem", height: "8rem" }} src={item.picture} alt={item.name}></img>
//                             <blockquote className="blockquote mb-0">
//                                 <p>
//                                     {' '}
//                                     <strong>Rating : {item.rating}</strong>
//                                     <br />
//                                     <strong>Price : {item.price}</strong>
//                                 </p>
//                                 <footer className="blockquote-footer">
//                                 </footer>
//                             </blockquote>
//                         </Card.Body>
//                         <Button  onClick={() => { this.tureModalFun(idx) }}>More...</Button>
//                     </Card> 

// {/* <div class="container-xl">
//                 <div class="row">
//                     <div class="col-md-10 mx-auto">
//                         <div id="myCarousel" class="carousel slide" data-ride="carousel" data-interval="0">
//                             <ol class="carousel-indicators">
//                                 <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
//                                 <li data-target="#myCarousel" data-slide-to="1"></li>
//                                 <li data-target="#myCarousel" data-slide-to="2"></li>
//                             </ol>
//                             <div class="carousel-inner">
//                                 <div class="carousel-item active">
//                                     <div class="row">
//                                         {this.props.tursData.map((item, idx) => {
//                                             return (<>




//                                                 <div class="col-sm-4">
//                                                     <div class="thumb-wrapper">
//                                                         <div class="img-box">
//                                                             <img src={item.picture} class="img-fluid" alt=""></img>
//                                                         </div>
//                                                         <div class="thumb-content">
//                                                             <h6><strong>{item.name}</strong></h6>
//                                                             <p><strong>Rating : {item.rating}</strong>
//                                                             <br />
//                                                             <strong>Price : {item.price}</strong>
//                                                             </p>
//                                                             <Button onClick={() => { this.tureModalFun(idx) }}>More...</Button>
//                                                         </div>
//                                                     </div>
//                                                 </div>




//                                             </>)
//                                         })}
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div> */}


//=======================================================================================================
// {/* <Card style={{ width: "50rem", height: "25rem", margin: "3%" }}>
//                 <Carousel fade>
//                     {this.props.tursData.map((item, idx) => {


//                         return (<>
//                             <Carousel.Item key={idx}>
//                                 <img
//                                     className="d-block w-100"
//                                     src={item.picture}
//                                     alt="First slide"
//                                 />
//                                 <Carousel.Caption>
//                                     <h3>{item.name}</h3>
//                                     <h4>{item.rating}</h4>
//                                     <h4>{item.price}</h4>
//                                     <Button onClick={()=>{this.tureModalFun(idx)}}>More...</Button>
//                                 </Carousel.Caption>
//                             </Carousel.Item>

//                         </>)
//                     })
//                     }
//                 </Carousel>
//             </Card>
//  */}












//====================================================================================================



// {/* <Carousel.Item>
//                     <img
//                         className="d-block w-100"
//                         src="https://3s81si1s5ygj3mzby34dq6qf-wpengine.netdna-ssl.com/wp-content/uploads/2020/02/ab_multi-cloud-1030x438.jpg"
//                         alt="Second slide"
//                     />

//                     <Carousel.Caption>
//                         <h3>Second slide label</h3>
//                         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//                         <Button>More...</Button>
//                     </Carousel.Caption>
//                 </Carousel.Item>
//                 <Carousel.Item>
//                     <img
//                         className="d-block w-100"
//                         src="https://www.encyclopedie-environnement.org/app/uploads/2020/09/Couv-nuages.jpg"
//                         alt="Third slide"
//                     />

//                     <Carousel.Caption>
//                         <h3>Third slide label</h3>
//                         <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
//                         <Button onClick={this.tureModal}>More...</Button>
//                     </Carousel.Caption>
//                 </Carousel.Item> */}