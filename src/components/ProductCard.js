import React from 'react';
import { useCartProvider } from '../context/cardContext';

export const ProductCard = ({ src, price, item }) => {
	const { handleCartUpdate, itemQuantity } = useCartProvider();
	return (
		<div
			style={{
				width: '20%',
				height: 'auto',

				padding: '20px',
				backgroundColor: 'grey',
				color: 'black',
				borderRadius: '12px',
			}}
		>
			<div>
				<img width="100%" height="auto" src={src} alt="hello" />
			</div>
			<div
				style={{
					display: 'flex',
					gap: '20px',
					alignItems: 'center',
					justifyContent: 'space-between',
				}}
			>
				<h4>{`Rs ${price}`}</h4>
				<button
					style={{ padding: '20px', margin: '20px', borderRadius: '20px' }}
					onClick={() =>
						item.quantity === itemQuantity[item.name]
							? alert('You cannot add more item')
							: handleCartUpdate(item)
					}
				>
					Add To Cart
				</button>
			</div>
		</div>
	);
};
