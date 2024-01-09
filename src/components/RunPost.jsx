import React from 'react';

export default function RunPost({
	title,
	person,
	distance,
	duration,
	averagePace,
	locations,
	notes
}) {
	return (
		<div className='run-post'>
			<div className='run-post-headings'>
				<h2>{title}</h2>
				<h2>{person}</h2>
			</div>
			<div className='run-post-details-container'>
				<div className='run-post-details'>
					<h3>Distance: {distance}</h3>
					<h3>Duration: {duration}</h3>
					<h3>Average Pace: {averagePace}</h3>
					<h3>Locations: <ul>{locations.map(location => <li>{location}</li>)}</ul></h3>
				</div>
				<div className='run-post-details'>
					<h3>Notes</h3>
					<p>{notes}</p>
				</div>
			</div>
		</div>
	);
}
