import React from 'react';
import { Link, NavLink, withRouter } from 'react-router-dom';

const Navbar = (props) => {
	return(
		<nav className='ui raised very padded segment' >
			<a className='ui teal inverted segment'>Gloria</a>
			<div className='ui right floated header'>
				<Link className='ui button' to="/">Home</Link>
				<NavLink className='ui button' to="/about">About</NavLink>
				<NavLink className='ui button' to="/contact">Contact</NavLink>
			</div>
		</nav>
	)
}

export default withRouter(Navbar);