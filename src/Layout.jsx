import React from 'react';
import { Outlet } from 'react-router-dom';
import Breadcrumb from './Components/Breadcrumb/Breadcrumb';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import PageHeader from './Components/PageHeader/PageHeader';

const Layout = () => {
	return (
		<>
			<Header />
			<PageHeader />
			<Outlet />
			<Footer />
		</>
	);
};

export default Layout;
