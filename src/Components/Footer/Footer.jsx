import React from 'react';
import { Link } from 'react-router-dom';

import styles from './Footer.module.css';

import LogoFooter from '../../Assets/logo/LogoFooter.svg?react';
import GitHub from '../../Assets/socialMedia/Github.svg?react';
import Linkedin from '../../Assets/socialMedia/Linkedin.svg?react';
import Instagram from '../../Assets/socialMedia/Instagram.svg?react';

import Amex from '../../Assets/coloredIcons/Amex.svg?react';
import Visa from '../../Assets/coloredIcons/Visa.svg?react';
import Mastercard from '../../Assets/coloredIcons/Mastercard.svg?react';

const Footer = () => {
	return (
		<footer className={styles.footer}>
			<div className={`${styles.footerContainer} container`}>
				<div>
					<div className={styles.socialSection}>
						<Link to="/">
							<LogoFooter />
						</Link>
						<p>
							I am a begginer programmer, and this project is to practical. = )
						</p>
						<div className={styles.socialMedias}>
							<Link to="https://github.com/CrystyanVerly">
								<GitHub />
							</Link>
							<Link to="https://www.linkedin.com/in/devcrystyanluis/">
								<Linkedin />
							</Link>
							<Link to="https://www.instagram.com/crystyan.jpg/">
								<Instagram />
							</Link>
						</div>
					</div>
				</div>
				<div className={styles.supportSection}>
					<h4>SUPPORT</h4>
					<ul>
						<li>
							<Link to="/faq">FAQ</Link>
						</li>
						<li>
							<Link to="/terms">Terms of use</Link>
						</li>
						<li>
							<Link to="/privacy">Privacy Policy</Link>
						</li>
					</ul>
				</div>
				<div className={styles.companySection}>
					<h4>COMPANY</h4>
					<ul>
						<li>
							<Link to="/about">About us</Link>
						</li>
						<li>
							<Link to="/contact">Contact</Link>
						</li>
						<li>
							<Link to="/carrer">Careers</Link>
						</li>
					</ul>
				</div>
				<div className={styles.shopSection}>
					<h4>SHOP</h4>
					<ul>
						<li>
							<Link to="/profile">My Account</Link>
						</li>
						<li>
							<Link to="/checkout">Checkout</Link>
						</li>
						<li>
							<Link to="/cart">Cart</Link>
						</li>
					</ul>
				</div>
				<div className={styles.paymentsSection}>
					<h4>ACCEPTED PAYMENTS</h4>
					<ul>
						<li>
							<Mastercard />
						</li>
						<li>
							<Amex />
						</li>
						<li>
							<Visa />
						</li>
					</ul>
				</div>
			</div>
			<p className={styles.allRights}>
				&copy; 2026 CrystyanVerly. Alguns direitos reservados
			</p>
		</footer>
	);
};

export default Footer;
