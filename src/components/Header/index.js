import React from 'react';
import logo from './logo.jpg'; 
import * as styles from './styles.scss';

export const HeaderComponent = (props) => {
    return (
    	<header id="header" className="flex space-between" styles={styles}>
    		<img className="logo" src={logo} alt="" />
    		<h1 className="date">{props.date}</h1>
    	</header>  
    );
};
 
export default HeaderComponent; 
			 