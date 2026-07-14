import React from 'react';
import styles from './MobileMenu.module.css';
import Menu from '../../../Assets/icons/Menu.svg?react';
import Close from '../../../Assets/icons/x.svg?react';
import NavigationLinks from '../NavigationLinks/NavigationLinks';

const MobileMenu = () => {
	const [isOpen, setIsOpen] = React.useState(false);

	return (
		<>
			<button
				className={styles.mobileBtn}
				onClick={() => setIsOpen(true)}
				aria-label="Open menu"
			>
				<Menu />
			</button>
			<div
				className={`${styles.overlay} ${isOpen ? styles.overlayOpen : ''}`}
				onClick={() => setIsOpen(false)}
			>
				<aside
					className={`${styles.mobileNav} ${isOpen ? styles.mobileNavOpen : ''}`}
					onClick={(e) => e.stopPropagation()}
				>
					<button
						className={styles.closeBtn}
						onClick={() => setIsOpen(false)}
						aria-label="Close menu"
					>
						<Close />
					</button>
					<NavigationLinks className={styles.mobileLinks} />
				</aside>
			</div>
		</>
	);
};

export default MobileMenu;
