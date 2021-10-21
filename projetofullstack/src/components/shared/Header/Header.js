import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
            <nav class="navbar navbar-expand-lg navbar-dark">
                <div class="container-fluid">
                <Link to="/" className="nav-link">
                    Projeto Fullstack
                </Link>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav">
                        <Link to="/" className="nav-link">
                            Home
                        </Link>
                    </div>
                    <div class="navbar-nav">
                        <Link to="/cadastro" className="nav-link">
                            Cadastro
                        </Link>
                    </div>
                    </div>
                </div>
            </nav>
    )
}

export default Header;