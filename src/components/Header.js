import React from "react";
import logo from "../images/logo.svg";
import '../css/App.css';

const Header = props => (
    <div className="App">
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo"/>
            <p>
                Edit code ffs
            </p>
            <a className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer">
                Learn React
            </a>
        </header>
    </div>
);
export default Header;