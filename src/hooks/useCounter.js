import React from 'react';
export const useCounter = () => {
	const [count, setCount] = React.useState(0);

	const handleIncrement = () => {
		setCount((prev) => prev + 1);
	};

	return { count, handleIncrement };
};
