import React from 'react';
import styles from './Features.module.css';

import Delivery from '../../../Assets/icons/Delivery.svg?react';
import Satisfaction from '../../../Assets/icons/Satisfaction.svg?react';
import Secure from '../../../Assets/icons/ShieldCheck.svg?react';

const features = [
	{
		Icon: Delivery,
		title: 'Free Shipping',
		text: "Upgrade your style today and get FREE shipping on all orders! Don't miss out.",
	},
	{
		Icon: Satisfaction,
		title: 'Satisfaction Guarantee',
		text: 'Shop confidently with our Satisfaction Guarantee: Love it or get a refund.',
	},
	{
		Icon: Secure,
		title: 'Secure Payment',
		text: 'Your security is our priority. Your payments are secure with us.',
	},
];

const Features = () => {
	return (
		<section className={`${styles.features} container`}>
			{features.map(({ Icon, title, text }) => (
				<article className={styles.featureCard} key={title}>
					<div className={styles.icon}>
						<Icon />
					</div>

					<h3>{title}</h3>

					<p>{text}</p>
				</article>
			))}
		</section>
	);
};

export default Features;
