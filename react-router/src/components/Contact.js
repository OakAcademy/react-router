import React from 'react';
import { Link } from 'react-router-dom';
import Modal from './Modal';

const Contact = () => {
	return(
		<div>
			<Modal />
			<div 
				className='ui raised very padded text container segment'
				style={{marginTop:'80px'}} 
			>
				<Link to='/alex' className='ui header'>Alex</Link>
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
			</div>
			<div 
				className='ui raised very padded text container segment'
				style={{marginTop:'80px'}} 
			>
				<Link to='/willma' className='ui header'>Willma</Link>
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
			</div>				
		</div>
	)
}


export default Contact;