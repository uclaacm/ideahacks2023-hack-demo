import React from 'react';
import CreatePost from './CreatePost';
import RunPost from './RunPost';
import { exampleData } from './Home';

const PERSON_NAME = "John Doe"

export default function Profile() {
	return (
		<div className='profile'>
			<h1>Welcome, {PERSON_NAME}</h1>
			<div className='create-post-container'>
				<h2>Post a run:</h2>
				<CreatePost name={PERSON_NAME} />
			</div>
			<br />
			<h2>My Runs</h2>
			<div className='my-runs'>
				{exampleData.filter((run) => run.person === PERSON_NAME).map((run, idx) => (
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
