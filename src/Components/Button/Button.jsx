import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Button.module.css';

const Button = ({
	to,
	type = 'button',
	className = '',
	children,
	...props
}) => {
	const combinedClassName = `${styles.button} ${className}`;

	if (to) {
		return (
			<Link to={to} className={combinedClassName} {...props}>
				{children}
			</Link>
		);
	}
	return (
		<button type={type} className={combinedClassName} {...props}>
			{children}
		</button>
	);
};

export default Button;
