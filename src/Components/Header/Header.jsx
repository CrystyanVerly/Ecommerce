import React from 'react';
import styles from './Header.module.css';
import Logomark from '../../Assets/logo/Logomark.svg?react';
import Ecommerce from '../../Assets/logo/ecommerce.svg?react';

import NavigationLinks from './NavigationLinks/NavigationLinks';
import SearchProduct from './SearchProduct/SearchProduct';
import CartHeader from './CartHeader/CartHeader';
import ProfileHeader from './ProfileHeader/ProfileHeader';
import MobileMenu from './MobileMenu/MobileMenu';
import { Link } from 'react-router-dom';

const Header = () => {
	return (
		<header className={styles.header}>
			<nav className={`${styles.nav} container`}>
				<Link className={styles.logo} to="/" aria-label="Ecommerce - Home">
					<Logomark />
					<Ecommerce />
				</Link>

				<NavigationLinks className={styles.navLinks} />

				<div className={styles.userActions}>
					<SearchProduct className={styles.searchProduct} />

					<CartHeader />

					<ProfileHeader />

					<MobileMenu className={styles.menuButton} />
				</div>
			</nav>
		</header>
	);
};

export default Header;
