import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';
import  Container  from "react-bootstrap/Container";
import  Row  from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import  axios  from "axios";
const API_PATH = "/sendmail.php";

class Homepage extends React.Component {
    
    constructor(props) {
        super(props);
        
        this.state = {
            name: '',
            email: '',
            subject: '',
            message: '',
            mailSent: '-',
            isHomepage: 0
        }
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
      }
    handleFormSubmit(e) {
        e.preventDefault();
  axios({
    method: 'POST',
    url: `${API_PATH}`,
    headers: { 'content-type': 'application/json' },
    data: this.state
  })
    .then(result => {
      this.setState({
        mailSent: result.data.sent
      })
    })
    .catch(error => this.setState({ error: error.message }));

    
        console.log(this.state);
      }
    render() {
        return (
            
                      
            
            <div className="container  black_bg left-align">
                <Container>
                    <h1>Contact</h1>
                    <br /><br />
                    <Row>
                        <Col xs={10}>
                        <form action="http://localhost:8888/qlawapi/sendmail.php">
                        <label>
                        Name:
                        <input
                            type="text"
                            name="name"
                                        className="form-control"
                                        style={{ width: "500px" }}
                                        onChange={e => this.setState({ name: e.target.value })}
                            // onChange={this.handleChange}
                        />
                                </label>
                                <br /><br />
                        <label>
                        Email:
                        <input
                            type="text"
                            name="email"
                                        className="form-control"
                                        style={{ width: "500px" }}
                                        onChange={e => this.setState({ email: e.target.value })}
                            // onChange={this.handleChange}
                        />
                                </label>
                                <br /><br />
                        <label>
                        Subject:
                        <input
                            type="text"
                            name="subject"
                                        className="form-control"
                                        style={{ width: "500px" }}
                                        onChange={e => this.setState({ subject: e.target.value })}
                            // onChange={this.handleChange}
                        />
                        </label>
                        <br /><br />
                        <label>
                        Message:
                        <textarea
                            rows='10'
                            cols='75'                                        
                            name="message"
                                        className="form-control"
                                        onChange={e => this.setState({ message: e.target.value })}
                            // onChange={this.handleChange}
                                        
                        />
                        </label>
                    </form>
                        </Col>
                    </Row>
                    <input type="submit" onClick={e => this.handleFormSubmit(e)} value="Submit" />
                    <div>{this.state.mailSent === true ? 'Mail Sent, Thank You!' : ''}</div>
                    <div>{this.state.mailSent === false ? 'We had a problem sending your mail.' : ''}</div>
                    </Container>
                </div>
        );
    }
} 

export default Homepage;