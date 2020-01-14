import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

class Links extends React.Component {

    render() {
        return (

            <div className="container  black_bg left-align">
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
                            <ul>
                                <li>
                                    <a href="http://acehighprint.com/">Ace High Printing</a>
                                </li>
                                <li>
                                    <a href="http://www.akneadedvacation.com/">A Kneaded Vacation</a>
                                    Massage</li>
                                <li>
                                    <a href="https://www.ascap.com/">ASCAP</a>
                                </li>
                                <li>
                                    <a href="http://awhitenet.net/contact/index.html">A White Net Designs</a>
                                </li>
                                <li>
                                    <a href="http://arielpublicity.com/">Ariel Publicity</a>
                                </li>
                                <li>
                                    <a href="http://axismag.com/">Axis Magazine</a>
                                </li>
                                <li>
                                    <a href="httos://www.bmi.com">BMI
                                    </a>
                                </li>
                                <li>
                                    <a href="https://copyright.gov">Copyright Office</a>
                                </li>
                                <li>
                                    <a href="http://www.enbphotography.com/">ENB Photography</a>
                                </li>
                                <li>
                                    <a href="http://www.harryfox.com">The Harry Fox Agency</a>
                                </li>
                                <li>
                                    <a href="http://madpotsoftea.com/">Mad Pots of Tea</a>
                                    - Custom Tea Blends</li>
                                <li>
                                    <a href="http://orlandobands.com/">Orlando Bands</a>
                                </li>
                                <li>
                                    <a href="http://www.reverbnation.com/">Reverb Nation</a>
                                </li>
                                <li>
                                    <a href="http://www.semesteratsea.org/">Semester at Sea</a>
                                </li>
                                <li>
                                    <a href="https://www.sesac.com">SESAC</a>
                                </li>
                                <li>
                                    <a href="http://swflspot.com/">Spot Magazine</a>
                                </li>
                                <li>
                                    <a href="https://www.uspto.gov">Trademark &amp; Patent Office</a>
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