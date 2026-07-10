import React from 'react';
import styles from './Home.module.css';
import Banner from './Banner/Banner';

const Home = () => {
	return (
		<div className={styles.home}>
			<Banner />
		</div>
	);
};

export default Home;
