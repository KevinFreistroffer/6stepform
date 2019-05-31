import React from 'react';
import * as styles from './styles.scss';

const Footer = (props) => {
    return (
       <Footer>
       	<nav className="flex space-around">
       		<Link to="/privacy-policy">Privacy Policy</Link>
       		<Link to="/terms-and-condition">Terms & Conditions</Link>
       		<Link to="/contact-us">Contact Us</Link>
       	</nav>
       	<img src="" alt=""/>
       	<p className="copyright">© 2019 MSWA, All rights reserved.</p>
       </Footer> 
    );
};


export default Footer;
