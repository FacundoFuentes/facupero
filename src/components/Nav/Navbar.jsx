import React from 'react'
import { Nav, NavDropdown } from 'react-bootstrap'
import style from './Navbar.module.css'

const Navbar = () => {
	return (
		<div className={style.navbar_container}>
			<div className={style.navbar_icon}><i class="fas fa-cannabis"></i></div>
			<Nav className={style.navbar} variant="pills" defaultActiveKey="first">
				<Nav.Item>
					<Nav.Link className={style.navbar_items} eventKey="first">Active</Nav.Link>
				</Nav.Item>
				<Nav.Item>
					<Nav.Link className={style.navbar_items} eventKey="second">Option 2</Nav.Link>
				</Nav.Item>
				<Nav.Item>
					<Nav.Link className={style.navbar_items} eventKey="third">Option 3</Nav.Link>
				</Nav.Item>
				<NavDropdown title="Dropdown" id="basic-nav-dropdown">
					<NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
					<NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
					<NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
					<NavDropdown.Divider />
					<NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
				</NavDropdown>
			</Nav>
		</div>
	)
}

export default Navbar
