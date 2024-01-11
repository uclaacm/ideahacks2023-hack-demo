import React from 'react';
import RunPost from './RunPost';

export const exampleData = [
	{
		title: 'Morning Run',
		person: 'John Doe',
		distance: '5 miles',
		duration: '30 minutes',
		averagePace: '6:00',
		locations: ['San Francisco, CA'],
		notes: 'Great run!'
	},
	{
		title: 'Evening Run',
		person: 'Jane Doe',
		distance: '10 miles',
		duration: '1 hour',
		averagePace: '6:00',
		locations: ['Bellevue', 'Kirkland'],
		notes: 'Felt awful but powered through.'
	}
];

export default function Home() {
	return (
		<div className='home'>
			{exampleData.map((run, idx) => (
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
