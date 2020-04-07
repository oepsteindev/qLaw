import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

class Homepage extends React.Component {

    render() {
        return (
            <div className="container  black_bg left-align">
                <Container>
                    
                    <Row>
                        <Col xs={8}>
                            Q Entertainment Law is dedicated to proving legal solutions and strategies for
                            athletes and entertainers at all levels of their careers. Attorney/owner,
                            Quinton Sheer has over two decades of experience in the entertainment industry
                            as a performer, writer, and A & R scout and uses that experience to help clients
                            navigate the too often murky waters of an ever changing industry.
                            <br/><br/>
                            Experience with: musicians, voice over and on-air talent, podcasters, writers,
                            bloggers, graphic designers, magicians, mentalists, dancers, indie labels,
                            publicists, agents, concert venues and bars, film makers, photographers, equity
                            and theme park performers.
                            <br/><br/>
                            Whether drafting band agreements or explaining reality TV contracts;
                            copyrighting an album or securing the film rights to turn that book into the
                            next great indie movie – Q Entertainment Law has been there.
                            <br/><br/>
                            Knowing entertainers and athletes have legal needs that go beyond "signing the
                            big deal," Q Entertainment Law also provides Criminal and Civil Defense.
                            <br/><br/>
                            Have a question? Not even sure how an entertainment attorney fits into your
                            career? It’s always free to talk. Please call 702-723- Q LAW. Although based in
                            Central Florida, Q Entertainment Law can serve clients anywhere in the world and
                            uses technology to save clients time and money. If in person is more your style,
                            we can come to you. And if you have a legal need outside the entertainment field
                            - just ask.

                        </Col>
                        <Col xs={4}>
                            <span className="follow">Follow & Friend Us</span>
                            <a
                                href="https://www.facebook.com/QEntertainmentLaw/"
                                target="_blank"
                                rel="noopener noreferrer"><img
                                src={require('../images/fbsilver.png')}
                                style={{
                width: 200,
                height: 200,
                position: 'absolute'
            }}
                                alt='header'/></a>
                        </Col>
                    </Row>

                </Container>
                </div>
              
        );
    }
}

export default Homepage;