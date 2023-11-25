import { createRoot } from 'react-dom/client';
import React from 'react';
import App from './App';
import './styles.css';
import { CardContextProvider } from './context/cardContext';

const root = createRoot(document.getElementById('root'));
root.render(
	<CardContextProvider>
		<App />
	</CardContextProvider>
);
