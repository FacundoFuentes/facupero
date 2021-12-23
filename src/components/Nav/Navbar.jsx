import React from 'react'
import { Nav, NavDropdown } from 'react-bootstrap'
import style from './Navbar.module.css'

const Navbar = () => {
	return (
		<div className={style.nav_container}>
			<Nav variant="pills" defaultActiveKey="/home">
				<Nav.Item>
					<Nav.Link href="/home">Active</Nav.Link>
				</Nav.Item>
				<Nav.Item>
					<Nav.Link eventKey="link-1">Option 2</Nav.Link>
				</Nav.Item>
			</Nav>
		</div>
	)
}

export default Navbar
