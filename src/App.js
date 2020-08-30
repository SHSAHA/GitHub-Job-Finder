import React, { useState } from 'react';
import useFetchJobs from './customHook/useFetchJobs';
import Job from './components/Job';
import { Container } from 'react-bootstrap';

const App = () => {
	const [ page, setPage ] = useState(1);
	const [ params, setParams ] = useState({});
	const { loading, jobs, error } = useFetchJobs(params, page);
	return (
		<Container className='my-4'>
			<h1 className='mb-4'>GitHub Job Finder</h1>
			{loading && <h1>Loading...</h1>}
			{error && <h1>Error. Try Refreshing.</h1>}
			{jobs.map((job) => {
				return <Job key={job.id} job={job} />;
			})}
		</Container>
	);
};

export default App;
