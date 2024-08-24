import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './ImageDetails.css';

const ImageDetails = () => {
	let { id } = useParams();

	let [data, setData] = useState({});

	async function imageList() {
		const response = await axios.get(`https://api.slingacademy.com/v1/sample-data/photos/${id}`);
		console.log(response.data);

		setData({
			image: response.data.photo.url,
			title: response.data.photo.title,
			desc: response.data.photo.description,
		});
	}

	useEffect(() => {
		imageList();
		console.log('hello');
	}, [id]);

	return (
		<div className="card">
			<img className="card-image" src={data.image} alt="" srcset="" />
			<div className="card-content">
				<h2>{data.title}</h2>
				<p>{data.desc}</p>
			</div>
		</div>
	);
};

export default ImageDetails;
