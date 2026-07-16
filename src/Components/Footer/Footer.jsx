import { useState } from 'react';
import { Link } from 'react-router-dom';

import styles from './Footer.module.css';

import LogoFooter from '../../Assets/logo/LogoFooter.svg?react';
import GitHub from '../../Assets/socialMedia/Github.svg?react';
import Linkedin from '../../Assets/socialMedia/Linkedin.svg?react';
import Instagram from '../../Assets/socialMedia/Instagram.svg?react';

import Amex from '../../Assets/coloredIcons/Amex.svg?react';
import Visa from '../../Assets/coloredIcons/Visa.svg?react';
import Mastercard from '../../Assets/coloredIcons/Mastercard.svg?react';

import ArrowDown from '../../Assets/icons/ChevronDown.svg?react';

const FOOTER_LINKS = {
	support: [
		{ label: 'FAQ', to: '/faq' },
		{ label: 'Terms of use', to: '/terms' },
		{ label: 'Privacy Policy', to: '/privacy' },
	],
	company: [
		{ label: 'About us', to: '/about' },
		{ label: 'Contact', to: '/contact' },
		{ label: 'Careers', to: '/carrer' },
	],
	shop: [
		{ label: 'My Account', to: '/profile' },
		{ label: 'Checkout', to: '/checkout' },
		{ label: 'Cart', to: '/cart' },
	],
};

const SOCIAL_LINKS = [
	{ href: 'https://github.com/CrystyanVerly', Icon: GitHub, label: 'GitHub' },
	{
		href: 'https://www.linkedin.com/in/devcrystyanluis/',
		Icon: Linkedin,
		label: 'LinkedIn',
	},
	{
		href: 'https://www.instagram.com/crystyan.jpg/',
		Icon: Instagram,
		label: 'Instagram',
	},
];

function FooterSection({ title, links, collapsible = false }) {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<div className={styles.footerSection}>
			<h4
				className={collapsible ? styles.toggle : undefined}
				onClick={collapsible ? () => setIsOpen(!isOpen) : undefined}
			>
				{title}
				{collapsible && (
					<span className={`${styles.arrow} ${isOpen ? styles.arrowOpen : ''}`}>
						<ArrowDown />
					</span>
				)}
			</h4>
			<ul
				className={
					collapsible
						? `${styles.list} ${isOpen ? styles.open : ''}`
						: undefined
				}
			>
				{links.map(({ label, to }) => (
					<li key={to}>
						<Link to={to}>{label}</Link>
					</li>
				))}
			</ul>
		</div>
	);
}

const Footer = () => {
	return (
		<footer className={styles.footer}>
			<div className={`${styles.footerContainer} container`}>
				<div className={styles.socialSection}>
					<Link to="/">
						<LogoFooter />
					</Link>
					<p>
						I am a begginer programmer, and this project is to practical. = )
					</p>
					<div className={styles.socialMedias}>
						{SOCIAL_LINKS.map(({ href, Icon, label }) => (
							<a
								key={href}
								href={href}
								target="_blank"
								rel="noopener noreferrer"
								aria-label={label}
							>
								<Icon />
							</a>
						))}
					</div>
				</div>

				<div className={styles.companySection}>
					<FooterSection
						title="SUPPORT"
						links={FOOTER_LINKS.support}
						collapsible
					/>
					<FooterSection
						title="COMPANY"
						links={FOOTER_LINKS.company}
						collapsible
					/>
					<FooterSection title="SHOP" links={FOOTER_LINKS.shop} collapsible />
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
