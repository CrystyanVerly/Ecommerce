import { createBrowserRouter } from 'react-router-dom';
import Layout from '../Layout';
import Home from '../Pages/Home/Home';
import Login from '../Pages/Login/Login';
import About from '../Pages/About/About';
import Cart from '../Pages/Cart/Cart';
import Categories from '../Pages/Categories/Categories';
import Checkout from '../Pages/Checkout/Checkout';
import Contact from '../Pages/Contact/Contact';
import Product from '../Pages/Product/Product';
import Profile from '../Pages/Profile/Profile';
import Register from '../Pages/Register/Register';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Layout />,
		handle: {
			pageTitle: 'Home',
		},
		children: [
			{
				index: true,
				element: <Home />,
			},
			{
				path: 'login',
				element: <Login />,
				handle: {
					pageTitle: 'Login',
				},
			},
			{
				path: 'About',
				element: <About />,
				handle: {
					pageTitle: 'About',
				},
			},
			{
				path: 'Cart',
				element: <Cart />,
				handle: {
					pageTitle: 'Cart',
				},
			},
			{
				path: 'Categories',
				element: <Categories />,
				handle: {
					pageTitle: 'Categories',
				},
			},
			{
				path: 'Checkout',
				element: <Checkout />,
				handle: {
					pageTitle: 'Checkout',
				},
			},
			{
				path: 'Contact',
				element: <Contact />,
				handle: {
					pageTitle: 'Contact',
				},
			},
			{
				path: 'Product',
				element: <Product />,
				handle: {
					pageTitle: 'Product',
				},
			},
			{
				path: 'Profile',
				element: <Profile />,
				handle: {
					pageTitle: 'Profile',
				},
			},
			{
				path: 'Register',
				element: <Register />,
				handle: {
					pageTitle: 'Register',
				},
			},
		],
	},
]);

export default router;
