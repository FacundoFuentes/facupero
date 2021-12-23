import React from 'react'
import { Nav, NavDropdown } from 'react-bootstrap'
import style from './Navbar.module.css'

const Navbar = () => {
	return (
		<div className={style.nav_container}>
			<Nav variant="pills" defaultActiveKey="first">
				<Nav.Item>
					<Nav.Link eventKey="first">Active</Nav.Link>
				</Nav.Item>
				<Nav.Item>
					<Nav.Link eventKey="second">Option 2</Nav.Link>
				</Nav.Item>
			</Nav>
		</div>
	)
}

export default Navbar
