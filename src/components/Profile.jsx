import React from 'react';
import CreatePost from './CreatePost';
import RunPost from './RunPost';

const exampleData = [
	{
		title: 'Morning Run',
		person: 'John Doe',
		distance: '5 miles',
		duration: '30 minutes',
		averagePace: '6:00',
		location: 'San Francisco, CA',
		notes: 'Great run!'
	}
];

export default function Profile() {
	return (
		<div className='profile'>
			<h1>Welcome, name</h1>
			<div className='create-post-container'>
				<h2>Post a run:</h2>
				<CreatePost />
			</div>
			<br />
			<h2>My Runs</h2>
			<div className='my-runs'>
				{exampleData.map((run, idx) => (
					// Not specifying "person" because the person is the user
					<RunPost
						title={run.title}
						distance={run.distance}
						duration={run.duration}
						averagePace={run.averagePace}
						location={run.location}
						notes={run.notes}
						key={idx}
					/>
				))}
			</div>
		</div>
	);
}
