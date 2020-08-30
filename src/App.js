import React, { useState } from 'react';
import useFetchJobs from './customHook/useFetchJobs';
import Job from './components/Job';
import { Container } from 'react-bootstrap';
import JobPagination from './components/JobPagination';

const App = () => {
	const [ page, setPage ] = useState(1);
	const [ params, setParams ] = useState({});
	const { loading, jobs, error, hasNextPage } = useFetchJobs(params, page);

	function handleParamChange(e) {
		const param = e.target.name;
		const value = e.target.value;
		setPage(1);
		setParams((prevParams) => {
			return { ...prevParams, [param]: value };
		});
	}
	return (
		<Container className='my-4'>
			<h1 className='mb-4'>GitHub Job Finder</h1>
			<JobPagination page={page} setPage={setPage} hasNextPage={hasNextPage} />
			{loading && <h1>Loading...</h1>}
			{error && <h1>Error. Try Refreshing.</h1>}
			{jobs.map((job) => {
				return <Job key={job.id} job={job} />;
			})}
			<JobPagination page={page} setPage={setPage} hasNextPage={hasNextPage} />
		</Container>
	);
};

export default App;
