import React from 'react';

// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
function Header() {
	return (
		<div>
			<h1>JONATHAN AGUILAR</h1>
			<ul className="nav nav-tabs">
				<li className="nav-item">
					<a href="/about">About</a>
				</li>
				<li className="nav-item">
					<a href="/portfolio">Portfolio</a>
				</li>
				<li className="nav-item">
					<a href="/contact">Contact Me</a>
				</li>
				<li className="nav-item">
					<a href="/resume">Resume</a>
				</li>
			</ul>
		</div>
	);
}

export default Header;
