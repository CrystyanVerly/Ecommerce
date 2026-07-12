import React from 'react';
import styles from './Features.module.css';
import Delivery from '../../../Assets/icons/Delivery.svg?react';
import Satisfaction from '../../../Assets/icons/Satisfaction.svg?react';
import Secure from '../../../Assets/icons/ShieldCheck.svg?react';

const Features = () => {
	const features = [
		{
			icon: <Delivery />,
			title: 'Free Shipping',
			text: `Upgrade your style today and get FREE shipping on all orders! Don't miss out.`,
		},
		{
			icon: <Satisfaction />,
			title: 'Satisfaction Guarantee',
			text: `Shop confidently with our Satisfaction Guarantee: Love it or get a refund.`,
		},
		{
			icon: <Secure />,
			title: 'Secure Payment',
			text: `Your security is our priority. Your payments are secure with us.`,
		},
	];
	return (
		<section className={`${styles.featuresContainer} container`}>
			{features.map((item) => (
				<article className={styles.featureCard} key={item.title}>
					<div className={styles.icon}>{item.icon}</div>
					<h3>{item.title}</h3>
					<p>{item.text}</p>
				</article>
			))}
		</section>
	);
};

export default Features;
