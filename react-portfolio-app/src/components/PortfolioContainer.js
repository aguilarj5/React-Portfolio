import React, { useState } from 'react';
import NavTabs from './NavTabs';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Resume from './pages/Resume';

export default function PortfolioContainer() {
	const [currentPage, setCurrentPage] = useState('About');

	// This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
	const renderPage = () => {
		if (currentPage === 'About') {
			return <About />;
		}
		if (currentPage === 'Portfolio') {
			return <Portfolio />;
		}
		if (currentPage === 'Contact') {
			return <Contact />;
		}
		if (currentPage === 'Resume') {
			return <Resume />;
		}
	};

	const handlePageChange = (page) => setCurrentPage(page);

	return (
		<div>
			<header style={{backgroundColor: "#424E4A"}}>
				<h1>Jonathan Aguilar</h1>
				<NavTabs
					currentPage={currentPage}
					handlePageChange={handlePageChange}
				/>
			</header>

			<div id="body">{renderPage()}</div>

			<footer style={{backgroundColor: "#1C473C"}}>
				<i class="fab fa-linkedin">LinkedIn</i>
				<i class="fab fa-github">GitHub</i>
			</footer>
		</div>
	);
}
