import React from 'react';
import styles from './BrowseSection.module.css';
import ButtonNavigation from '../../../Components/Button/ButtonNavigation';
import ArrowRight from '../../../Assets/icons/ArrowRight.svg?react';
import BrowseImg from './Assets/Browse.jpg';

const BrowseSection = () => {
	return (
		<section className={`${styles.browseSection} `}>
			<div className="container">
				<div>
					<h1>Browse Our Fashion Paradise!</h1>
					<p>
						Step into a world of style and explore our diverse collection of
						clothing categories.
					</p>
					<ButtonNavigation to="/categories">
						Start Browsing
						<ArrowRight />
					</ButtonNavigation>
				</div>
				<img src={BrowseImg} alt="Browse image" />
			</div>
		</section>
	);
};

export default BrowseSection;
