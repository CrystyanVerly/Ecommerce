import React from 'react';
import ProductCard from './ProductCard';
import styles from './BestSelling.module.css';

const BestSelling = () => {
	const [products, setProducts] = React.useState([]);
	const [loading, setLoading] = React.useState(true);
	const [error, setError] = React.useState(null);
	React.useEffect(() => {
		async function fetchProducts() {
			try {
				const URL_API = `https://dummyjson.com/products?limit=4`;
				const response = await fetch(URL_API);
				if (!response.ok) throw new Error('Erro ao buscar produtos');
				const data = await response.json();
				console.log(data.products);

				setProducts(data.products);
			} catch (err) {
				setError(err.message);
			} finally {
				setLoading(false);
			}
			if (loading) return <p>loading</p>;
			if (error) return <p>error</p>;
		}
		fetchProducts();
	}, []);
	return (
		<section className={`${styles.bestSelling} container`}>
			<span>SHOP NOW</span>
			<h1>Best Selling</h1>
			<ul className={styles.products}>
				{products.map((prod) => (
					<ProductCard key={prod.id} product={prod} />
				))}
			</ul>
		</section>
	);
};

export default BestSelling;
