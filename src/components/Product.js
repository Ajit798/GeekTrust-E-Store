import React, { useMemo } from 'react';
import { Header } from './Header';
import { useCartProvider } from '../context/cardContext';

export const Product = () => {
	const { cartCount, handleCartDelete, itemQuantity } = useCartProvider();

	const totalPrice = useMemo(() => {
		return cartCount.reduce((acc, curr) => {
			return acc + curr?.price;
		}, 0);
	}, [cartCount]);

	const cartItems = useMemo(() => {
		return cartCount.reduce((acc, curr) => {
			if (acc.findIndex((item) => item.name === curr.name) === -1) {
				acc.push(curr);
			}

			return acc;
		}, []);
	}, [cartCount]);
	return (
		<div>
			<Header isProductPage />
			<div
				style={{
					display: 'flex',
					alignItems: 'center',
					flexDirection: 'column',
				}}
			>
				<h4 data-testid="shopping-test">Shopping Cart</h4>
				<div>
					{cartItems?.map((item) => {
						return (
							<div
								style={{
									display: 'flex',
									gap: '50px',
									justifyContent: 'space-evenly',
								}}
								key={item.id}
							>
								<img src={item?.imageURL} width="40px" height="40px" />
								<h4>{item?.name}</h4>
								<button
									style={{
										margin: '20px',
										padding: '10px',
										border: 'none',
										backgroundColor: 'grey',
										color: 'black',
										borderRadius: '12px',
									}}
									disabled
								>
									{`Quantity:${itemQuantity[item.name]}`}
								</button>
								<button
									style={{
										margin: '20px',
										padding: '10px',
										border: 'none',
										backgroundColor: 'grey',
										color: 'black',
										borderRadius: '12px',
									}}
									onClick={() => handleCartDelete(item.id)}
								>
									Delete
								</button>
							</div>
						);
					})}
				</div>
				{cartCount.length > 0 && (
					<>
						<div
							style={{
								width: '50%',
								border: '1px solid black',
								borderWidth: '0px 0px 1px 0px',
							}}
						/>
						<div>{`Total Amount:${totalPrice}`}</div>
					</>
				)}
			</div>
		</div>
	);
};
