import React from 'react';
import { Link } from 'react-router-dom';
import CartIcon from '../../../Assets/icons/Cart.svg?react';

const CartHeader = () => {
	return (
		<Link to="/cart" aria-label="Cart">
			<CartIcon />
		</Link>
	);
};

export default CartHeader;
