import React from 'react';
import { SearchBar } from './SearchBar';
import { Filters } from './Filters';
import { ProductCard } from './ProductCard';
import axios from 'axios';
import { Header } from './Header';

export const LandingPage = () => {
	const [productCardData, setProductCardData] = React.useState([]);
	const [allProductCardData, setAllProductCardData] = React.useState([]);
	const [filtersData, setFiltersData] = React.useState([]);

	React.useEffect(() => {
		getData();
	}, []);

	React.useEffect(() => {
		if (filtersData.length === 0) {
			getData();
		}
	}, [filtersData]);
	const getData = async () => {
		const res = await axios.get(
			'https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/catalogue.json'
		);
		setProductCardData([...res.data]);
		setAllProductCardData([...res.data]);
	};

	const handleFilter = (event, filterValue, filterName) => {
		let copiedFilteredData = [...filtersData];

		if (event.target.checked === true) {
			copiedFilteredData.push(filterValue);
			const copiedProductCardData = productCardData.filter((cardItem) => {
				return copiedFilteredData.includes(
					cardItem[`${filterName.toLowerCase()}`]
				);
			});

			setProductCardData([...copiedProductCardData]);
		} else {
			copiedFilteredData = copiedFilteredData.filter(
				(filter) => filter !== filterValue
			);
			const copiedProductCardData = allProductCardData.filter((cardItem) => {
				return copiedFilteredData.every((filter) =>
					Object.values(cardItem).includes(filter)
				);
			});

			setProductCardData([...copiedProductCardData]);
		}

		setFiltersData([...copiedFilteredData]);
	};

	const handleFilterSearch = (searchValue) => {
		if (searchValue === '') {
			setProductCardData([...allProductCardData]);
		}
		const searchFilterData = allProductCardData.filter(
			(item) =>
				item.name.toLowerCase().includes(searchValue.toLowerCase()) ||
				item.color.toLowerCase().includes(searchValue.toLowerCase())
		);
		setProductCardData([...searchFilterData]);
	};
	return (
		<>
			<Header />
			<div style={{ display: 'flex', justifyContent: 'center' }}>
				<SearchBar handleChange={handleFilterSearch} />
			</div>
			<div
				style={{
					display: 'flex',
					gap: '50px',
					marginTop: '30px',
					padding: '10px',
				}}
			>
				<div>
					<Filters handleFilter={handleFilter} />
				</div>

				<div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
					{productCardData.map((product) => (
						<ProductCard
							key={product.id}
							src={product.imageURL}
							price={product.price}
							item={product}
						/>
					))}
				</div>
			</div>
		</>
	);
};
