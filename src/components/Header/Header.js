import React from 'react';
import logo from '../../Image/logo2.png'
import './Header.css'
import { Navbar, Badge } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import { useAuth } from '../useAuth/useAuth';

const Header = (props) => {
    const auth = useAuth();
    return (
        <div>

            <div>
                <Navbar fixed="top" bg="white" expand="lg">
                    <Navbar.Brand>
                        <Link to="/"><img style={{ width: '200px', height: 'auto' }} src={logo} alt="" /></Link>
                    </Navbar.Brand>

                    <div className="ml-auto">
                        <Link style={{ marginRight: '20px', color: 'black' }} to="/cart"><FontAwesomeIcon icon={faShoppingCart} /><span className="badge badge-pill badge-light">{props.cart.length}</span></Link>
                        {
                            auth.user ?
                                <span >

                                    <Badge style={{
                                        fontSize: '15px',
                                        padding: '7px',
                                        marginTop: '6px',
                                        marginLeft: '10px',
                                        marginRight:'15px'
                                    }} variant="secondary">{auth.user.displayName}</Badge>{' '}

                                </span>
                                :
                                <Link className="login" style={{ marginRight: '20px', color: 'black' }} to="/login">Login</Link>
                        }
                        {
                            auth.user ?
                                <span style={{ marginRight: '20px', cursor:'pointer' }} onClick={auth.signOut} className="signup login">Sign out</span>

                                :

                                <Link className="login" style={{ marginRight: '20px' }} to="/login"><span className="signup">Sign up</span></Link>
                        }

                    </div>
                </Navbar>
            </div>
        </div>
    );
};

export default Header;