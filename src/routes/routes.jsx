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
			breadcrumb: 'Home',
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
					breadcrumb: 'Login',
				},
			},
			{
				path: 'About',
				element: <About />,
				handle: {
					breadcrumb: 'About',
				},
			},
			{
				path: 'Cart',
				element: <Cart />,
				handle: {
					breadcrumb: 'Cart',
				},
			},
			{
				path: 'Categories',
				element: <Categories />,
				handle: {
					breadcrumb: 'Categories',
				},
			},
			{
				path: 'Checkout',
				element: <Checkout />,
				handle: {
					breadcrumb: 'Checkout',
				},
			},
			{
				path: 'Contact',
				element: <Contact />,
				handle: {
					breadcrumb: 'Contact',
				},
			},
			{
				path: 'Product',
				element: <Product />,
				handle: {
					breadcrumb: 'Product',
				},
			},
			{
				path: 'Profile',
				element: <Profile />,
				handle: {
					breadcrumb: 'Profile',
				},
			},
			{
				path: 'Register',
				element: <Register />,
				handle: {
					breadcrumb: 'Register',
				},
			},
		],
	},
]);

export default router;
