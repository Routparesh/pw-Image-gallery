import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import axios from 'axios';
import './Data.css';

const Data = () => {
	let [data, setData] = useState([]);

	async function downloadDetails() {
		const response = await axios.get('https://api.slingacademy.com/v1/sample-data/photos');
		const responseData = response.data.photos;

		setData(responseData);
	}
	useEffect(() => {
		downloadDetails();
	}, []);

	return (
		<div className="card-container ">
			{data.map((t, id) => (
				<Link to={`/image/${t.id}`} key={t.id}>
					<img className="img" src={t.url} alt="" />
				</Link>
			))}
		</div>
	);
};

export default Data;
