import React from 'react';
import styles from './Home.module.css';
import Banner from './Banner/Banner';
import Features from './Features/Features';
import BestSelling from '../../Components/BestSelling/BestSelling';
import BrowseSection from './BrowseSection/BrowseSection';
import Newsletter from './Newsletter/Newsletter';

const Home = () => {
	return (
		<div className={styles.home}>
			<Banner />
			<Features />
			<BestSelling />
			<BrowseSection />
			<Newsletter />
		</div>
	);
};

export default Home;
