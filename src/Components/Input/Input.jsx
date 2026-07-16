import React from 'react';
import styles from './Input.module.css';

const Input = ({
	type = 'text',
	placeholder = '',
	ariaLabel,
	className = '',
	onSubmit,
	...props
}) => {
	return (
		<div className={`${styles.inputWrapper} ${className}`}>
			<input
				type={type}
				placeholder={placeholder}
				aria-label={ariaLabel}
				{...props}
			/>
		</div>
	);
};

export default Input;
