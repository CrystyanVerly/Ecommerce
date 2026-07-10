import React from 'react';
import { Link, useMatches } from 'react-router-dom';
import styles from './Breadcrumb.module.css';
import ChevronRight from '../../Assets/icons/ChevronRight.svg?react';

const Breadcrumb = () => {
	const matches = useMatches();
	const crumbs = matches.filter((match) => match.handle?.pageTitle);

	if (crumbs.length <= 1) return null;

	return (
		<nav className={`${styles.breadcrumbContainer}`} aria-label="breadcrumb">
			{crumbs.map((crumb, index) => {
				const isLast = index === crumbs.length - 1;

				return (
					<span key={crumb.pathname} className={styles.breadcrumb}>
						{!isLast ? (
							<>
								<Link to={crumb.pathname}>{crumb.handle.pageTitle}</Link>
								<ChevronRight />
							</>
						) : (
							<span>{crumb.handle.pageTitle}</span>
						)}
					</span>
				);
			})}
		</nav>
	);
};

export default Breadcrumb;
