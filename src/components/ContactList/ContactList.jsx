import React from 'react';
import s from './contactList.module.scss';

const ContactsList = ({ filteredContacts, handleClick }) => {
	return (
		<ul>
			{filteredContacts.map((el, index) => (
				<li id={el.id} key={index}>
					{el.name}:<span>{el.number}</span>
					<button onClick={handleClick}>Delete</button>
				</li>
			))}
		</ul>
	);
};

export default ContactsList;
