import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AboutUs from '../../routes/pages/AboutUs/AboutUs';
import Hotel from '../../routes/pages/Hotel/Hotel';
import ContactUs from '../../routes/pages/ContactUs/ContactUs';



const Router = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<AboutUs />} />
				<Route path='/aboutus' element={<AboutUs />} />
				<Route path='/hotel' element={<Hotel />} />
				<Route path='/contactus' element={<ContactUs />} />
				{/* <Route path='/hotel' element={<Rooms />} /> */}
				{/* Dodaj potrzebne ścieżki aplikacji */}
			</Routes>
		</BrowserRouter>
	);
};

export default Router;
