import React, { useState } from 'react';
import { exampleData } from './Home';

export default function CreatePost({ name }) {
	const [title, setTitle] = useState('');
	const [distance, setDistance] = useState('');
	const [duration, setDuration] = useState('');
	const [averagePace, setAveragePace] = useState('');
	const [locations, setLocations] = useState([]);
	const [notes, setNotes] = useState('');

	function postRun() {
		exampleData.push({
			'person': name,
			'title': title, 
			'distance': distance, 
			'duration': duration, 
			'averagePace': averagePace, 
			'locations': locations.split(',').map((location) => location.trim()), 
			'notes': notes
		});
		setTitle('');
		setDistance('');
		setDuration('');
		setAveragePace('');
		setLocations('');
		setNotes('');
	}

	return (
		<div className='run-post'>
			<h2>Create a Post</h2>
			<div className='create-post'>
				<div className='create-post-headings'>
					<h3>Title</h3>
					<h3>Distance</h3>
					<h3>Duration</h3>
					<h3>Average Pace</h3>
					<h3>Locations</h3>
					<h3>Notes</h3>
				</div>
				<div className='create-post-inputs'>
					<input
						type='text'
						value={title}
						onChange={(e) => setTitle(e.target.value)}
					/>
					<input
						type='text'
						value={distance}
						onChange={(e) => setDistance(e.target.value)}
					/>
					<input
						type='text'
						value={duration}
						onChange={(e) => setDuration(e.target.value)}
					/>
					<input
						type='text'
						value={averagePace}
						onChange={(e) => setAveragePace(e.target.value)}
					/>
					<input
						type='text'
						value={locations}
						onChange={(e) => setLocations(e.target.value)}
					/>
					<input
						type='text'
						value={notes}
						onChange={(e) => setNotes(e.target.value)}
					/>
				</div>
			</div>
			<div className='post-button'>
				<button onClick={postRun}>Post</button>
			</div>
		</div>
	);
}
