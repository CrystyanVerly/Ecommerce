import React from 'react';
import { Link } from 'react-router-dom';
import styles from './ButtonNavigation.module.css';

const ButtonNavigation = ({ to, children, ...props }) => {
	return (
		<Link to={to} className={styles.buttonNavigation} {...props}>
			{children}
		</Link>
	);
};

export default ButtonNavigation;
