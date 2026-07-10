import React from 'react';
import { Link, useMatches } from 'react-router-dom';
import styles from './Breadcrumb.module.css';
import ChevronRight from '../../Assets/icons/ChevronRight.svg?react';

const Breadcrumb = () => {
	const matches = useMatches();
	const crumbs = matches.filter((match) => match.handle?.breadcrumb);

	if (crumbs.length <= 1) return null;

	return (
		<nav className={styles.breadcrumb} aria-label="breadcrumb">
			{crumbs.map((crumb, index) => {
				const isLast = index === crumbs.length - 1;

				return (
					<span key={crumb.pathname}>
						{!isLast ? (
							<>
								<Link to={crumb.pathname}>{crumb.handle.breadcrumb}</Link>
								<ChevronRight />
							</>
						) : (
							<span>{crumb.handle.breadcrumb}</span>
						)}
					</span>
				);
			})}
		</nav>
	);
};

export default Breadcrumb;
