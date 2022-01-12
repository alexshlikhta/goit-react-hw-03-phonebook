import React, { Component } from 'react';
import s from './container.module.scss';

export default class Container extends Component {
	render() {
		return <div className={s.container}>{this.props.children}</div>;
	}
}
