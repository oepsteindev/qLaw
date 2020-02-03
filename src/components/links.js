import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import link_list from './data.js'
import axios from "axios";
const API_PATH = '../qlaw/data.js';
 
class Links extends React.Component {

    constructor(props) {
        super(props);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
      }

    handleFormSubmit(e) {
        e.preventDefault();
  axios({
    method: 'GET',
    url: `${API_PATH}`,
    // headers: { 'content-type': 'application/json' },
    // data: this.state
  })
    .then(result => {
        console.log(result);
    })
    .catch(error => this.setState({ error: error.message }));

    
        console.log('error');
      }

    
    
    render() {
        return (

            <div className="container  black_bg left-align" onClick={e => this.handleFormSubmit(e)}>
                <Container>
                    <Row>
                        <Col>
                            <b>These links are for reference only. Q Entertainment Law is not responsible
                                for the content of these sites.</b>
                        </Col>
                    </Row>
                    <br/><br/>
                    <Row>
                        <Col>
                        {/* <ul>
                        {link_list.map(the_links => <li><a href="http://acehighprint.com/" target="_blank" rel="noopener noreferrer">{the_links}</a></li>)}
                    </ul> */}
                            <ul>
                                <li>
                                    <a href="http://acehighprint.com/" target="_blank" rel="noopener noreferrer">Ace High Printing</a>
                                </li>
                                <li>
                                    <a href="http://www.akneadedvacation.com/" target="_blank" rel="noopener noreferrer">A Kneaded Vacation</a>
                                    Massage</li>
                                <li>
                                    <a href="https://www.ascap.com/" target="_blank" rel="noopener noreferrer">ASCAP</a>
                                </li>
                                <li>
                                    <a href="http://awhitenet.net/contact/index.html" target="_blank" rel="noopener noreferrer">A White Net Designs</a>
                                </li>
                                <li>
                                    <a href="http://arielpublicity.com/" target="_blank" rel="noopener noreferrer">Ariel Publicity</a>
                                </li>
                                <li>
                                    <a href="http://axismag.com/" target="_blank" rel="noopener noreferrer">Axis Magazine</a>
                                </li>
                                <li>
                                    <a href="httos://www.bmi.com" target="_blank" rel="noopener noreferrer">BMI
                                    </a>
                                </li>
                                <li>
                                    <a href="https://copyright.gov" target="_blank" rel="noopener noreferrer">Copyright Office</a>
                                </li>
                                <li>
                                    <a href="http://www.enbphotography.com/" target="_blank" rel="noopener noreferrer">ENB Photography</a>
                                </li>
                                <li>
                                    <a href="http://www.harryfox.com" target="_blank" rel="noopener noreferrer">The Harry Fox Agency</a>
                                </li>
                                <li>
                                    <a href="http://madpotsoftea.com/" target="_blank" rel="noopener noreferrer">Mad Pots of Tea</a>
                                    - Custom Tea Blends</li>
                                <li>
                                    <a href="http://orlandobands.com/" target="_blank" rel="noopener noreferrer">Orlando Bands</a>
                                </li>
                                <li>
                                    <a href="http://www.reverbnation.com/">Reverb Nation</a>
                                </li>
                                <li>
                                    <a href="http://www.semesteratsea.org/" target="_blank" rel="noopener noreferrer">Semester at Sea</a>
                                </li>
                                <li>
                                    <a href="https://www.sesac.com" target="_blank" rel="noopener noreferrer">SESAC</a>
                                </li>
                                <li>
                                    <a href="http://swflspot.com/" target="_blank" rel="noopener noreferrer">Spot Magazine</a>
                                </li>
                                <li>
                                    <a href="https://www.uspto.gov" target="_blank" rel="noopener noreferrer">Trademark &amp; Patent Office</a>
                                </li>
                            </ul>
                        </Col>
                    </Row>

                </Container>
            </div>
        );
    }
}

export default Links;