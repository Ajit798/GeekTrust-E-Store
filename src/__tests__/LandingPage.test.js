import { act, fireEvent, render, screen } from '@testing-library/react';
import { LandingPage } from '../components/LandingPage';
import React from 'react';
import { CardContextProvider } from '../context/cardContext';
import axios from 'axios';
import { BrowserRouter } from 'react-router-dom';
import { Filters } from '../components/Filters';
import { SearchBar } from '../components/SearchBar';

describe('test cases for landing page', () => {
	it('rendering search bar', async () => {
		await axios.get.mockResolvedValue({
			data: [
				{
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
				},
			],
		});
		await act(async () => {
			render(
				<CardContextProvider>
					<BrowserRouter>
						<LandingPage />
					</BrowserRouter>
				</CardContextProvider>
			);
		});

		const searchBar = screen.getByTestId('search-test-bar');
		expect(searchBar).toBeInTheDocument();
	});
	it('product card rendering', async () => {
		await axios.get.mockResolvedValue({
			data: [
				{
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
				},
			],
		});
		await act(async () => {
			render(
				<CardContextProvider>
					<BrowserRouter>
						<LandingPage />
					</BrowserRouter>
				</CardContextProvider>
			);
		});

		const productCard = screen.getAllByTestId('product-card-id');
		expect(productCard.length).toBe(1);
	});

	it('filter card rendering', async () => {
		await axios.get.mockResolvedValue({
			data: [
				{
					id: 1,
					imageURL:
						'https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/black-polo-men.png',
					name: 'Red Polo',
					type: 'Polo',
					price: 250,
					currency: 'INR',
					color: 'Red',
					gender: 'Men',
					quantity: 3,
				},
				{
					id: 2,
					imageURL:
						'https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/black-polo-men.png',
					name: 'Red Polo',
					type: 'Polo',
					price: 250,
					currency: 'INR',
					color: 'Black',
					gender: 'Men',
					quantity: 3,
				},
			],
		});
		await act(async () => {
			render(
				<CardContextProvider>
					<BrowserRouter>
						<LandingPage />
						<Filters handleFilter={jest.fn()} />
					</BrowserRouter>
				</CardContextProvider>
			);
		});

		const checbox = screen.getByLabelText('Red');

		fireEvent.click(checbox);

		const productCard = await screen.findAllByTestId('product-card-id');

		expect(productCard.length).toBe(1);
	});

	it('search card', async () => {
		await axios.get.mockResolvedValue({
			data: [
				{
					id: 1,
					imageURL:
						'https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/black-polo-men.png',
					name: 'Red Polo',
					type: 'Polo',
					price: 250,
					currency: 'INR',
					color: 'Red',
					gender: 'Men',
					quantity: 3,
				},
				{
					id: 2,
					imageURL:
						'https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/black-polo-men.png',
					name: 'black Polo',
					type: 'Polo',
					price: 250,
					currency: 'INR',
					color: 'Black',
					gender: 'Men',
					quantity: 3,
				},
			],
		});
		await act(async () => {
			render(
				<CardContextProvider>
					<BrowserRouter>
						<LandingPage />
						<SearchBar handleChange={jest.fn()} />
					</BrowserRouter>
				</CardContextProvider>
			);
		});

		const serachBar = screen.getAllByPlaceholderText('Search for products....');
		const searchbutton = screen.getAllByRole('button', {
			name: 'Search',
		});

		act(() => {
			fireEvent.change(serachBar[0], { target: { value: 'red' } });
		});
		fireEvent.click(searchbutton[0]);

		const productCard = await screen.findAllByTestId('product-card-id');

		expect(productCard.length).toBe(1);
	});
});
