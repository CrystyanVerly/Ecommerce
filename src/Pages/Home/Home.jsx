import React from 'react';
import styles from './Home.module.css';
import Banner from './Banner/Banner';
import Features from './Features/Features';

const Home = () => {
	return (
		<div className={styles.home}>
			<Banner />
			<Features />
		</div>
	);
};

export default Home;
