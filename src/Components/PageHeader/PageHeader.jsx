import React from 'react';
import { useMatches } from 'react-router-dom';
import Breadcrumb from '../Breadcrumb/Breadcrumb';
import styles from './PageHeader.module.css';

const PageHeader = () => {
	const matches = useMatches();
	const currentPage = matches[matches.length - 1];

	const pageTitle = currentPage.handle?.pageTitle;

	if (!pageTitle || pageTitle === 'Home') return null;

	return (
		<section className={`${styles.pageHeader}`}>
			<div className={`${styles.container} container`}>
				<h1>{pageTitle}</h1>
				<Breadcrumb />
			</div>
		</section>
	);
};

export default PageHeader;
