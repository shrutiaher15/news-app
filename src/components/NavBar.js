import React, { Component } from 'react'
import {
    Link
} from "react-router-dom";

export class NavBar extends Component {
    render() {
        return (

            <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">NewsMonkey</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link" aria-current="page" to="/news-monkey-app">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/news-monkey-app/business">Business</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/news-monkey-app/entertainment">Entertainment</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/news-monkey-app/general">General</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/news-monkey-app/health">Health</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/news-monkey-app/science">Science</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/news-monkey-app/sports">Sports</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/news-monkey-app/technology">Technology</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

        )
    }
}

export default NavBar