import React from 'react';
import styles from './BestSelling.module.css';

const ProductCard = ({ product }) => {
	return (
		<li className={styles.card}>
			<img src={product.thumbnail} alt={product.title} />

			<div className={styles.info}>
				<h3 className={styles.title}>{product.title}</h3>
				<div className={styles.quantity}>
					<span className={styles.stock}>
						{product.stock > 0 ? 'IN STOCK' : 'SOLD OUT'}
					</span>
					<span className={styles.price}>$ {product.price}</span>
				</div>
			</div>
		</li>
	);
};

export default ProductCard;
