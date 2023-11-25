import React from 'react';

export const SearchBar = ({ handleChange }) => {
	const [searchValue, setSearchValue] = React.useState('');
	return (
		<div>
			<input
				name="search-bar"
				placeholder="Search for products...."
				onChange={(event) => setSearchValue(event.target.value)}
				style={{
					width: '500px',
					height: '40px',
					borderTop: '0px',
					border: '1px solid black',
					borderWidth: '0px 0px 1px 0px',
				}}
			/>
			<button
				style={{
					border: 'none',
					margin: '20px',
					padding: '10px',
					backgroundColor: 'black',
					color: 'white',
					borderRadius: '12px',
					cursor: 'pointer',
				}}
				onClick={() => handleChange(searchValue)}
			>
				Search
			</button>
		</div>
	);
};
