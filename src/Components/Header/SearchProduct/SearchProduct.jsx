import React from 'react';
import Search from '../../../Assets/icons/Search.svg?react';
import Input from '../../Input/Input';

const SearchProduct = ({ className = '' }) => {
	return (
		<form className={className}>
			<button type="submit" aria-label="Search">
				<Search />
			</button>
			<Input
				type="search"
				placeholder="Search products"
				aria-label="Search products"
				name="Search"
			/>
		</form>
	);
};

export default SearchProduct;
