import React from 'react'
import { Nav } from 'react-bootstrap'
import style from './Navbar.module.css'
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
	return (
		<div className={style.navbar_container}>
			<div className={style.navbar_icon}><i className="fas fa-cannabis"></i></div>
			<Nav className={style.navbar} variant="pills" defaultActiveKey="first">
				<Nav.Item>
					<Nav.Link as={Link} className={style.navbar_items} eventKey="first" to='/'>Home</Nav.Link>
				</Nav.Item>
				<Nav.Item>
					<Nav.Link as={Link} className={style.navbar_items} eventKey="second" to='/about-us'>About Us</Nav.Link>
				</Nav.Item>
				<Nav.Item>
					<Nav.Link as={Link} className={style.navbar_items} eventKey="third" to='/contact'>Contact</Nav.Link>
				</Nav.Item>
			</Nav>
		</div>
	)
}

export default Navbar
