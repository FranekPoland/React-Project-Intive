import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import AboutUs from '../../routes/pages/AboutUs/AboutUs';
import AboutUs1 from '../../routes/pages/AboutUs1/AboutUs1';



const Router = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<AboutUs1 />} />
				{/* Dodaj potrzebne ścieżki aplikacji */}
			</Routes>
		</BrowserRouter>
	);
};

export default Router;
