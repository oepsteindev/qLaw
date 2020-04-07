import React from 'react';
import {Route, Link, BrowserRouter, Switch} from 'react-router-dom';
import Homepage from './home.js';
import Bio from './bio.js';
import Services from './services.js';
import Links from './links.js';
import Blog from './blog.js';
import Contact from './contact.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

class Menu extends React.Component {

    render() {
        return (
            <div>
                <div className="row">
                
                <div className=" left-align">

                <BrowserRouter>
                                
                                    <nav>
                                        <div id="menu-outer">
                                            <div id="table">
                                                <ul id="horizontal-list" className="left-align-menu">
                                                    <li>
                                                        <Link
                                                            to={{
                                                            pathname: '/home',
                                                            hash: '#home',
                                                            search: '?quick-submit=true'
                                                        }}>Home</Link>
                                                    </li>
                                                    <li>
                                                        <Link
                                                            to={{
                                                            pathname: '/bio',
                                                            hash: '#bio',
                                                            search: '?quick-submit=true'
                                                        }}>Bio</Link>
                                                    </li>
                                                    <li>
                                                        <Link
                                                            to={{
                                                            pathname: '/blog',
                                                            hash: '#blog',
                                                            search: '?quick-submit=true'
                                                        }}>Blog</Link>
                                                    </li>
                                                    <li>
                                                        <Link
                                                            to={{
                                                            pathname: '/servcies',
                                                            hash: '#services',
                                                            search: '?quick-submit=true'
                                                        }}>Services</Link>
                                                    </li>
                                                    <li>
                                                        <Link
                                                            to={{
                                                            pathname: '/contact',
                                                            hash: '#contact',
                                                            search: '?quick-submit=true'
                                                        }}>Contact</Link>
                                                    </li>
                                                    <li>
                                                        <Link
                                                            to={{
                                                            pathname: '/links',
                                                            hash: '#links',
                                                            search: '?quick-submit=true'
                                                        }}>Links</Link>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </nav>
                             
                                <Switch>
                                    <Route path="/qlawbuild" exact component={Homepage}/>
                                    <Route path="http://www.oepstein.a2hosted.com/" exact component={Homepage}/>
                                    <Route path="/test" exact component={Homepage}/>
                                    <Route path="/" exact component={Homepage}/>
                                    <Route path="/home" exact component={Homepage}/>
                                    <Route path="/bio" exact component={Bio}/>
                                    <Route path="/servcies" exact component={Services}/>
                                    <Route path="/links" exact component={Links}/>
                                    <Route path="/blog" exact component={Blog}/>
                                    <Route path="/contact" exact component={Contact}/>
                                </Switch>
                            </BrowserRouter>
                        </div>
                    </div>
                
               
            </div>
        );
    }
}

export default Menu;
