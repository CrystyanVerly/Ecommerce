import React from 'react';
import styles from './BrowseSection.module.css';
import Button from '../../../Components/Button/Button';
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
					<Button to="/categories">
						Start Browsing
						<ArrowRight />
					</Button>
				</div>
				<img src={BrowseImg} alt="Browse image" />
			</div>
		</section>
	);
};

export default BrowseSection;
