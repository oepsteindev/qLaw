import React, {Component} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';
import Menu from './components/menu.js';
// import Footer from './components/footer.js';
import './App.css'; 

function App() {
  return (
            <div className="App black_bg container">
                <div className="black_bg" expand="md">
                    <img src={require('./images/QLawBanner2.jpg')} alt="header"/>
                </div>

                <Menu/>

                {/* <Footer/> */}

                <div className="container  black_bg"></div>
            </div>
  );
}

export default App;
