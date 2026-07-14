import React from 'react';
import styles from './Home.module.css';
import Banner from './Banner/Banner';
import Features from './Features/Features';
import BestSelling from '../../Components/BestSelling/BestSelling';

const Home = () => {
	return (
		<div className={styles.home}>
			<Banner />
			<Features />
			<BestSelling />
		</div>
	);
};

export default Home;
