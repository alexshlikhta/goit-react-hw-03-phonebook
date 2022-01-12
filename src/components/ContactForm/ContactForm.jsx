import React, { Component } from 'react';
import s from './contactForm.module.scss';

export default class ContactForm extends Component {
	state = {
		name: '',
		number: '',
	};

	clearFields = () => {
		this.setState({
			name: '',
			number: '',
		});
	};

	handleChange = (e) => {
		this.setState({
			[e.target.getAttribute('name')]: e.target.value,
		});
	};

	handleSubmit = (event) => {
		event.preventDefault();
		this.props.onSubmit(this.state);
		this.clearFields();
	};

	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<label>
					Name
					<input
						type='text'
						name='name'
						pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
						title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
						required
						value={this.state.name}
						onChange={this.handleChange}
					/>
				</label>

				<label>
					Phone
					<input
						type='tel'
						name='number'
						pattern='\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}'
						title='Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'
						required
						value={this.state.number}
						onChange={this.handleChange}
					/>
				</label>

				<button type='submit'>Add contact</button>
			</form>
		);
	}
}
