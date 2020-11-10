import React from 'react'
import { Navbar, Nav, Button } from 'react-bootstrap'
import LOGO from '../images/logo.svg'
import style from './styles/header.module.css'
import { Link } from 'gatsby'

export default function Header() {
    return (
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
            <Navbar.Brand>
                <Link to="/">
                    <img src={LOGO} alt="logo" className={style.logoImage} />
                </Link>
            </Navbar.Brand>

            <Navbar.Toggle aria-controls="responsive-navbar-nav" />

            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Item>
                        <Link
                            to="/"
                            className="nav-link"
                            activeClassName="active"
                        >
                            Home
                        </Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Link
                            to="/about"
                            className="nav-link"
                            activeClassName="active"
                        >
                            About Us
                        </Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Link
                            to="/contact"
                            className="nav-link"
                            activeClassName="active"
                        >
                            Contact
                        </Link>
                    </Nav.Item>
                    <Nav.Item className="ml-lg-3">
                        <Button variant="outline-info">Login</Button>
                    </Nav.Item>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}
