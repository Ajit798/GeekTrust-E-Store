import React from 'react';
import { useCartProvider } from '../context/cardContext';
import { Link } from 'react-router-dom';

export const Header = () => {
	const { cartCount } = useCartProvider();
	return (
		<div
			style={{
				display: 'flex',
				justifyContent: 'space-between',
				width: '100%',
				height: '50px',
				backgroundColor: 'grey',
				margin: 0,
				padding: 0,
			}}
		>
			<h4 style={{ marginLeft: '20px' }}>TeeRex Store</h4>
			<div
				style={{
					display: 'flex',
					gap: '30px',
					alignItems: 'center',
					padding: '20px',
				}}
			>
				<Link to="/product" style={{ textDecoration: 'none' }}>
					Product
				</Link>
				<h4>{`Cart Items:${cartCount?.length}`}</h4>
			</div>
		</div>
	);
};
