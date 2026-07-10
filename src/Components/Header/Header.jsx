import React from 'react';
import styles from './Header.module.css';
import { Link } from 'react-router-dom';
import Logomark from '../../Assets/logo/Logomark.svg?react';
import Ecommerce from '../../Assets/logo/ecommerce.svg?react';
import Cart from '../../Assets/icons/Cart.svg?react';
import UserProfile from '../../Assets/icons/User-1.svg?react';
import Search from '../../Assets/icons/Search.svg?react';

const Header = () => {
	return (
		<header className={`${styles.header}`}>
			<nav className={`${styles.nav} container`}>
				<Link className={styles.divLogo} to="/" aria-label="Ecommerce - Home">
					<Logomark className={styles.logo} />
					<Ecommerce />
				</Link>
				<div className={styles.divLinks}>
					<Link to="/">Home</Link>
					<Link to="/categories">Categories</Link>
					<Link to="/about">About</Link>
					<Link to="/contact">Contact</Link>
				</div>

				<div className={styles.divUserInterest}>
					<form className={styles.divSearch}>
						<input
							type="text"
							placeholder="Search products"
							id="searchproduct"
						/>
					</form>

					<Link to="/cart">
						<Cart />
					</Link>
					<Link className={styles.login} to="/login">
						<UserProfile />
					</Link>
				</div>
			</nav>
		</header>
	);
};

export default Header;
