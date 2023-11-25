import React from 'react';
import { mockFiltersData } from '../mocks/mockData';

export const Filters = ({ handleFilter }) => {
	return (
		<div
			style={{
				height: 'max-content',
				width: '100%',
				padding: '20px',
				border: '1px solid black',
				flexBasis: '50%',
			}}
		>
			{mockFiltersData.map((filter, filterIndex) => {
				return (
					<div key={filterIndex}>
						<h4>{filter.name}</h4>
						{filter.filters.map((checkbox, checkboxIndex) => {
							return (
								<div key={checkboxIndex}>
									<input
										id="checkbox-label"
										type="checkbox"
										onChange={(event) =>
											handleFilter(event, checkbox, filter.name)
										}
									/>
									<label id="checkbox-label">{checkbox}</label>
								</div>
							);
						})}
					</div>
				);
			})}
		</div>
	);
};
