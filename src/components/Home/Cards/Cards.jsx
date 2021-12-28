import React from 'react';
import style from './Card.module.css';
import { Link } from 'react-router-dom';

export default class Card extends React.Component {
	constructor(props) {
		super(props);
		this.state = { active: false };
		this.cardRef = React.createRef();
		this.scrollAnimation = this.scrollAnimation.bind(this);
	}

	scrollAnimation() {
		if ('cardRef' in this) {
			const ref = this.cardRef.current;
			if (ref !== null) {
				//console.log(ref, ref.getBoundingClientRect());
				(ref.getBoundingClientRect().top - ref.scrollHeight < 70) ?
				this.setState({ active: true }) :
				this.setState({ active: false });
			}
		}
	}

	componentDidMount() {
		const ref = this.cardRef.current
		if (ref.getBoundingClientRect().top - ref.scrollHeight < 70) this.setState({ active: true });
		window.addEventListener('scroll', this.scrollAnimation);
	}

	componentWillUnmount() {
		window.removeEventListener('scroll', this.scrollAnimation);
	}

	render() {
		return (
			<div ref={this.cardRef} className={this.state.active ? `${style.Card} ${style.active}` : style.Card}>
				<div className={style.Info}>
					<h1>{this.props.name}</h1>
					<p>{this.props.desc}</p>
					<Link to={'/' + this.props.name.replace(/ /g, '-').toLowerCase()}>Go</Link>
				</div>
				<img src={this.props.img} alt="app"></img>
			</div>
		);
	}
}
