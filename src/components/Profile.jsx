import React, { useState, useEffect } from 'react';
import CreatePost from './CreatePost';
import RunPost from './RunPost';
import { getMyDocs } from '../firebaseHelper';

const PROFILE_NAME = "John Doe"

export default function Profile() {
	const [profileRuns, setProfileRuns] = useState([]);

	useEffect(() => {
		getMyDocs(PROFILE_NAME, setProfileRuns);
	}, []);

	return (
		<div className='profile'>
			<h1>Welcome, {PROFILE_NAME}</h1>
			<div className='create-post-container'>
				<h2>Post a run:</h2>
				<CreatePost person={PROFILE_NAME} callback={() => getMyDocs(PROFILE_NAME, setProfileRuns)}/>
			</div>
			<br />
			<h2>My Runs</h2>
			<div className='my-runs'>
				{profileRuns.map((run, idx) => (
					// Not specifying "person" because the person is the user
					<RunPost
						title={run.title}
						distance={run.distance}
						duration={run.duration}
						averagePace={run.averagePace}
						locations={run.locations}
						notes={run.notes}
						key={idx}
					/>
				))}
			</div>
		</div>
	);
}
