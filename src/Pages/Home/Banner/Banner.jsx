import React from 'react';
import styles from './Banner.module.css';
import banner from './assets/img/banner-project.jpg';
import ButtonNavigation from '../../../Components/Button/ButtonNavigation';
import ArrowRight from '../../../Assets/icons/ArrowRight.svg?react';

const Banner = () => {
	return (
		<section className={styles.banner}>
			<img src={banner} alt="main banner" />
			<div className={styles.overlay}>
				<h1>Fresh Arrivals Online</h1>
				<p>Discover Our Newest Collection Today.</p>
				<ButtonNavigation to={'/categories'}>
					View Collection <ArrowRight />
				</ButtonNavigation>
			</div>
		</section>
	);
};

export default Banner;
