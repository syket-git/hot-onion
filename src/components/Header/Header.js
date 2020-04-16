import React from 'react';
import logo from '../../Image/logo2.png'
import './Header.css'
import { Nav, Navbar } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

const Header = (props) => {
    return (
        <div>

            <div>
                <Navbar fixed="top" bg="white" expand="lg">
                    <Navbar.Brand>
                        <Link to="/"><img style={{width: '200px', height: 'auto'}} src={logo} alt=""/></Link>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto">
                        <Nav.Link><Link to="/cart"><FontAwesomeIcon icon={faShoppingCart} /><span className="badge badge-pill badge-light">{ props.cart.length }</span></Link></Nav.Link>
                        <Nav.Link><Link to="/login">Login</Link></Nav.Link>
                           <Nav.Link><Link to="/login"><span className="signup">Sign up</span></Link></Nav.Link>
                        </Nav>

                    </Navbar.Collapse>
                </Navbar>
            </div>
            
        </div>
    );
};

export default Header;