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
                        <Col xs={12}>
                            <a href="http://musicesquire.blogspot.com/" target="_blank" rel="noopener noreferrer"><img
                                alt="blog"
                                src={require('../images/blog.png')}
                                style={{
                width: 700,
                height: 397,
                align: 'center'
            }} /></a>
                        </Col>
                    </Row>

                    <Row>
                        <Col xs={12}>
                            <br/><br/>
                            At Q Entertainment Law, L.L.C. we pride ourselves on keeping up to date with the
                            latest issues concerning those in the entertainment and sports fields. This blog
                            showcases some common issues and concerns as well as showcasing the efforts of
                            those in the trenches. Do not automatically assume that if a case or scenario
                            seems similar to your facts or circumstances that the same result will be
                            reached. Nothing in this blog should be considered legal advice.
                        </Col>
                    </Row>

                </Container>
            </div>
        );
    }
}

export default Links;