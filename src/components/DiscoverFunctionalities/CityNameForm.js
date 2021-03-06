import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import '../UI/Discover.css';

class CityNameForm extends React.Component {
  submitHandler = event => {
    event.preventDefault();
    let CN = event.target.CityName.value;
    this.props.setCityName(CN);
    this.setState({
      name: CN,
    });
    // console.log(this.state.name);
    //=============================== getting lat , lon from LocationIQ API====================================//
    axios
      .get(`${process.env.REACT_APP_URL}/Location?cityName=${CN}`)
      .then(result => {
        this.props.getCityName(CN, result.data.lat, result.data.lon);
        this.props.getAllAPIDataHandler();
      })
      .catch(err => {
        console.log(err);
      });

    event.target.reset();
  };

  render() {
    return (
      <>
        <section className='bg-discover'>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
            className='form-discover'
          >
            <Form onSubmit={this.submitHandler}>
              <FloatingLabel
                controlId='floatingInput'
                label='Type City Name'
                className='mb-2'
                style={{ width: '40rem' }}
              >
                <Form.Control
                  type='text'
                  name='CityName'
                  placeholder='City Name'
                />
              </FloatingLabel>
              <Button
                className='btn-discover'
                type='submit'
                style={{ height: '3rem' }}
              >
                Explore !
              </Button>
            </Form>
          </div>
        </section>
      </>
    );
  }
}
export default CityNameForm;
