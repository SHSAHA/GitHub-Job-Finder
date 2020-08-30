import React from 'react';
import useFetchJobs from './customHook/useFetchJobs';

const App = () => {
	const { loading, jobs, error } = useFetchJobs();
	return (
		<div>
			{loading && <h1>Loading...</h1>}
			{error && <h1>Error. Try Refreshing.</h1>}
			<h1>{jobs.length}</h1>
		</div>
	);
};

export default App;
