import React from 'react';
import Home from './Pages/Home/Home';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Pages/Login/Login';

const App = () => {
	return (
		<div>
			<BrowserRouter>
				<Header />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/login" element={<Login />} />
				</Routes>
				<Footer />
			</BrowserRouter>
		</div>
	);
};

export default App;
