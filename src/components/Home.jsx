import React, { useState, useEffect } from 'react';
import RunPost from './RunPost';
import { getCollectionDocs } from '../firebaseHelper';

export default function Home() {
	const [runData, setRunData] = useState([]);

	useEffect(() => {
		getCollectionDocs(setRunData);
	}, []);

	return (
		<div className='home'>
			{runData.map((run, idx) => (
				<RunPost
					title={run.title}
					person={run.person}
					distance={run.distance}
					duration={run.duration}
					averagePace={run.averagePace}
					locations={run.locations}
					notes={run.notes}
					key={idx}
				/>
			))}
		</div>
	);
}
