import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
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

                        </>)
                    })}
                </div>
            </div>
</div>
            {console.log(this.state.tureData)}
            <TureModal tureData={this.state.tureData} modalShow={this.state.modalShow} handleClose={this.handleClose} />

        </>)
    }


}
export default TursRendering;
