import React from 'react';
import '../App.css';
import * as Icon from 'react-bootstrap-icons';
import {Link} from 'react-router-dom';

const Nav = () => {
    return (
        <React.Fragment>
            <div className="nav-bar">
                <div className='logo'><h2>Pismo</h2></div>
                <ul className='nav-links'>
                    <li className='link'><Link to='/'><Icon.House className='icon' /></Link></li>
                    <li className='link'><Link to='/message'><Icon.Chat className='icon' /></Link> </li>
                    <li className='link'><Link to="/profile"><Icon.Person className='icon'/></Link></li>
                </ul>
            </div>
        </React.Fragment>
    )
}

export default Nav;
