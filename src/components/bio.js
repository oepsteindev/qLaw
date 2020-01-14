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
                        <Col><img
                            alt="biopic"
                            src={require('../images/bio.jpg')}
                            style={{
                width: 269,
                height: 403,
                position: 'absolute'
            }}/></Col>
                        <Col xs={5}>
                            Quinton J. Sheer practices in the entertainment, business, and contract fields
                            of law and is a certified county mediator.
                            <br/><br/>
                            He began his 20+ years of experience in the entertainment field in musical
                            theatre, doing community and summer stock shows in upstate New York. He branched
                            out with show choir tours of Europe and learned the joys and pains of living on
                            a tour bus as a singer, actor, and costume mister for Up With People.
                            <br/><br/>
                            Quinton grew up in Elmira, NY where he was a DJ and talk show host on both AM
                            and FM radio. He graduated from Notre Dame High School then followed the
                            footlights to New York City where he earned his B.A. in Media Studies from
                            Fordham University, Lincoln Center while taking breaks to tour. He spent his
                            last semester of college on the Semester at Sea program which added South East
                            Asia and the Middle East to his extensive European and North American tour
                            experience. Quinton continued his high seas adventures as Cruise Staff aboard
                            Norwegian Cruise Line’s Norwegian Wind taking him from the Caribbean and Central
                            American to Alaska.
                            <br/><br/>
                        </Col>
                        <Col>
                            <a href="https://www.facebook.com/QEntertainmentLaw/" target="_blank" rel="noopener noreferrer" ><img
                                alt='qpic'
                                src={require('../images/fbsilver.png')}
                                style={{
                width: 200,
                height: 200,
                position: 'absolute'
            }}/></a>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <br/><br/>
                            Quinton made Orlando, FL his home in 1999. He has worked for two major area
                            theme parks as both a performer/narrator and in management. The former voice of
                            Universal Orlando Resort has lent his voice to several videos, CD-ROMs, and
                            phone systems and if you look hard enough you can find narrating a children’s
                            book and in a popular children’s movie.
                            <br/><br/>
                            For over 300 weekly episodes he wrote and hosted the syndicated FM program and
                            podcast, “Q’s House,” a show concerning the independent music business where
                            both musicians and their fans could come together to laugh and learn. In 2010 he
                            was declared a New Media Pioneer by Ariel Cyber PR.
                            <br/><br/>
                            Quinton has written about the music business for Connections Magazine in
                            Orlando, FL and is a current columnist for OrlandoBands.com. He is one of
                            MajorLabelScout.com’s top A&R scouts, powered by Atlantic Records. He is a
                            frequent showcase judge for festivals and contests around the South East.
                            <br/><br/>
                            His decision to tie all his entertainment experience together led him to earn
                            his J.D. from Barry University’s Dwayne O. Andreas School of Law in Orlando, FL.
                            He received book awards in Sports Law, Cyber Law, Motions and Depositions, and
                            Trial Advocacy.
                            <br/><br/>
                            Quinton’s downtime is spent at local concerts and other area performances.
                            <br/><br/>
                            <div className="indent">
                                <i>“It’s not just work for me – It’s what I Love.”</i>
                            </div>
                            <br/><br/>
                            Past and current memberships include: The Florida Bar, American Bar Association,
                            Orange County Bar Association, Osceola County Bar Association, National Lawyers
                            Guild, NORML, County Court Mediator, The Florida Association of Criminal Defense
                            Lawyers, and the ACLU.
                            <br/><br/>
                        </Col>
                    </Row>

                </Container>
            </div>
        );
    }
}

export default Homepage;