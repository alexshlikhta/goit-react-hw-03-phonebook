import React from 'react';

const Filter = ({ filter, onChange }) => {
	return (
		<label>
			Search
			<input type='text' name='filter' value={filter} onChange={onChange} />
		</label>
	);
};

export default Filter;
