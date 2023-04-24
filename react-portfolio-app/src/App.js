import React from 'react';
import Header from './components/Header';
import About from './components/pages/About';
import Portfolio from './components/pages/Portfolio';
import Contact from './components/pages/Contact';
import Resume from './components/pages/Resume';
import Footer from './components/Footer';
import { Routes, Route } from 'react-router-dom';

function App() {
	return (
		<div>
			<Header />
			<Routes>
				<Route path="/about" element={<About />} />
				<Route path="/portfolio" element={<Portfolio />} />
				<Route path="/contact" element={<Contact />} />
				<Route path="/resume" element={<Resume />} />
			</Routes>
			<Footer />
		</div>
	);
}
export default App;
