import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { Header } from '../components/Header';
import { CardContextProvider } from '../context/cardContext';
import { BrowserRouter } from 'react-router-dom';
import { Product } from '../components/Product';

test('testing the header', () => {
	render(
		<CardContextProvider>
			<BrowserRouter>
				<Header />
			</BrowserRouter>
		</CardContextProvider>
	);

	const heading = screen.getByRole('heading', {
		level: 4,
		name: 'TeeRex Store',
	});

	expect(heading).toBeInTheDocument();
});

test('clicking on link', async () => {
	render(
		<CardContextProvider>
			<BrowserRouter>
				<Header />
				<Product />
			</BrowserRouter>
		</CardContextProvider>
	);

	const link = screen.getByTestId('product-link');
	fireEvent.click(link);

	const nn = screen.getByTestId('shopping-test');

	expect(nn).toBeInTheDocument();
});

test('cart items on the header', async () => {
	render(
		<CardContextProvider>
			<BrowserRouter>
				<Header />
				<Product />
			</BrowserRouter>
		</CardContextProvider>
	);

	const cartItem = screen.getByTestId('cart-landing');

	expect(cartItem).toBeInTheDocument();
});
