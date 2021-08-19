import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faProcedures,faBookDead,faVirus,faVirusSlash,faCalendarDay,faExclamationTriangle } from "@fortawesome/free-solid-svg-icons";


class Covid19Rendaring extends React.Component {
    

 

    render() {
        return ( <React.Fragment>
        <div style={{margin:'3rem 0 3rem 20rem', width:'75%',color:'#40514E' }}>
        <Card className="w-75 card-covid"style={{backgroundColor:'#ffc6b9'}}>
            <h1 style={{color:'#4D4545', textAlign:'center'}}>Covid Situation</h1>
                <Card.Body style={{fontSize:'1.5rem'}}><strong>{this.props.covidData.country} ({this.props.covidData.code})</strong></Card.Body>
                <Card.Body style={{color:'#40514E'}}>
                    <blockquote className="blockquote mb-0">
                        <p>
                            <strong>Confirmed Cases : </strong><FontAwesomeIcon icon={faVirus} fixedWidth />{this.props.covidData.confirmed}
                            <br/>
                            <strong>Recovered Cases :</strong><FontAwesomeIcon icon={faVirusSlash} fixedWidth /> {this.props.covidData.recovered}
                            <br/>
                            <strong>Critical Cases  :</strong> <FontAwesomeIcon icon={faProcedures} fixedWidth /> {this.props.covidData.critical}
                            <br/>
                            <strong>Deaths          :</strong> <FontAwesomeIcon icon={faBookDead} fixedWidth /> {this.props.covidData.deaths}
                            <br/>
                            <strong>LastUpdate      :</strong><FontAwesomeIcon icon={faCalendarDay} fixedWidth /> {this.props.covidData.lastUpdate}
                        </p>
                        <br/>
                        <footer className="blockquote-footer" style={{color:'#566d69'}}>
                        <FontAwesomeIcon icon={faExclamationTriangle} fixedWidth /><strong> Be careful</strong> , <cite>wear your mask , clean your hands, keep a safe distance.</cite>
                        </footer>
                    </blockquote>
                </Card.Body>
            </Card>
    
            </div>
            </React.Fragment>)
    }


}
export default Covid19Rendaring;