import React from 'react';
import Input from '../../../Components/Input/Input';
import Button from '../../../Components/Button/Button';
import styles from './Newsletter.module.css';

const Newsletter = () => {
	return (
		<section className={styles.newsletter}>
			<div className="container">
				<div className={styles.info}>
					<h1>Join Our NewsLetter</h1>
					<p>We love to surprise our subscribers with occasional gifts.</p>
				</div>
				<form className={styles.emailNews}>
					<Input
						type="email"
						placeholder="Your email address"
						aria-label="News letter"
						name="newsLetter"
					/>
					<Button type="submit">Subscribe</Button>
				</form>
			</div>
		</section>
	);
};

export default Newsletter;
