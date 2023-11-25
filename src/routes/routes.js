import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { LandingPage } from '../components/LandingPage';
import { Product } from '../components/Product';

export const Routes = () => {
	const path = createBrowserRouter([
		{
			path: '/',
			element: <LandingPage />,
		},
		{
			path: '/product',
			element: <Product />,
		},
	]);
	return <RouterProvider router={path} />;
};
