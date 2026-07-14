import React from 'react';
import Search from '../../../Assets/icons/Search.svg?react';

const SearchProduct = ({ className = '' }) => {
	return (
		<form className={className}>
			<button type="submit" aria-label="Search">
				<Search />
			</button>
			<input
				type="search"
				placeholder="Search products"
				aria-label="Search products"
			/>
		</form>
	);
};

export default SearchProduct;
