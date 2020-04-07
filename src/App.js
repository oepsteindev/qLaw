import React, {Component} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';
import Menu from './components/menu.js';
import Footer from './components/footer.js';
import './App.css'; 

function App() {
  return (
            <div className="App black_bg container">
                <div className="banner" expand="md"></div>
                <Menu/>
                <Footer/>
            </div>
  );
}

export default App;
