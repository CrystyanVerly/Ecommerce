import React from 'react';
import { Outlet } from 'react-router-dom';
import Breadcrumb from './Components/Breadcrumb/Breadcrumb';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';

const Layout = () => {
	return (
		<>
			<Header />
			<Breadcrumb />
			<Outlet />
			<Footer />
		</>
	);
};

export default Layout;
