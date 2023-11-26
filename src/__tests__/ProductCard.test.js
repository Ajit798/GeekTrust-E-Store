import { render, screen } from '@testing-library/react';
import { ProductCard } from '../components/ProductCard';
import { Header } from '../components/Header';
import React from 'react';
import { CardContextProvider } from '../context/cardContext';
import { BrowserRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';

describe('all the tests related to productCard', () => {
	it('button Clicked', async () => {
		const user = userEvent.setup();

		render(
			<>
				<CardContextProvider>
					<BrowserRouter>
						<ProductCard
							item={{
								id: 1,
								imageURL:
									'https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/black-polo-men.png',
								name: 'Black Polo',
								type: 'Polo',
								price: 250,
								currency: 'INR',
								color: 'Black',
								gender: 'Men',
								quantity: 3,
							}}
							price="250"
							src="https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/black-polo-men.png"
						/>
						<Header />
					</BrowserRouter>
				</CardContextProvider>
			</>
		);

		const addToCartButton = screen.getByRole('button', {
			name: 'Add To Cart',
		});

		await user.click(addToCartButton);

		const cartItem = screen.getByTestId('cart-landing');

		expect(cartItem).toHaveTextContent('Cart Items:1');
	});
});
