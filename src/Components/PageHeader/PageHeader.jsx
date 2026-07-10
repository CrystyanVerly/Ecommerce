import React from 'react';
import Breadcrumb from '../Breadcrumb/Breadcrumb';
import styles from './PageHeader.module.css';

const PageHeader = ({ title }) => {
	return (
		<section className={styles.pageHeader}>
			<div className={`${styles.container} container`}>
				<h1>{title}</h1>
				<Breadcrumb />
			</div>
		</section>
	);
};

export default PageHeader;
