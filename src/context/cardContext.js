import React, { useCallback, useContext } from 'react';

const CartContext = React.createContext({
	cartCount: [],
	handleCartClick: () => {},
	handleCartDelete: () => {},
	itemQuantity: {},
});

export const CardContextProvider = ({ children }) => {
	const [cartCount, setCardCount] = React.useState([]);
	const [itemQuantity, setItemQuantity] = React.useState({});

	const handleCartUpdate = useCallback((cartItem) => {
		setCardCount((prevData) => {
			const copiedCartData = [...prevData];
			copiedCartData.push(cartItem);

			const quantity = copiedCartData.reduce((acc, curr) => {
				acc[curr.name] = acc[curr.name] ? acc[curr.name] + 1 : 1;

				return acc;
			}, {});
			setItemQuantity(() => quantity);
			return copiedCartData;
		});
	}, []);

	const handleCartDelete = useCallback(
		(itemId) => {
			const filterdCartValue = cartCount.filter((item) => item.id !== itemId);
			setCardCount([...filterdCartValue]);
		},
		[cartCount]
	);
	return (
		<CartContext.Provider
			value={{ cartCount, handleCartUpdate, handleCartDelete, itemQuantity }}
		>
			{children}
		</CartContext.Provider>
	);
};

export const useCartProvider = () => {
	const data = useContext(CartContext);
	return data;
};
