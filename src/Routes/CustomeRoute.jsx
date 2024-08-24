import React from 'react';

import { Route, Routes } from 'react-router-dom';
import Data from '../components/Data';
import ImageDetails from '../components/ImageDetails/ImageDetails';

const CustomeRoute = () => {
	return (
		<Routes>
			<Route path="/" element={<Data />} />
			<Route path="/image/:id" element={<ImageDetails />} />
		</Routes>
	);
};

export default CustomeRoute;
