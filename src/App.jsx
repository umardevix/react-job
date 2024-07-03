/* eslint-disable no-unused-vars */
import {
	Route,
	createBrowserRouter,
	RouterProvider,
	createRoutesFromElements,
} from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import MainLayout from './layouts/MainLayout';
import JobsPage from './pages/JobsPage';
import AddJobPage from './pages/AddJobPage';
import NotFound from './pages/NotFound';
import JobPage, { jobLoader } from './pages/JobPage';
import EditJobPage from './pages/EditJobPage';

function App() {
	const addJob = async (newJob) => {
		const res = await fetch('/api/jobs', {
			method: 'POST',
			headers: {
				'Content-type': 'aplication/json',
			},
			body: JSON.stringify(newJob),
		});
		return;
	};

	const deleteJob = async (id) => {
		const res = await fetch(`/api/jobs/${id}`, {
			method: 'DELETE',
		});
		return;
	};

	const updateJob = async (job) => {
		const res = await fetch(`/api/jobs/${job.id}`, {
			method: 'PUT',
			headers: {
				'Content-type': 'aplication/json',
			},
			body: JSON.stringify(job),
		});
		return;
	};

	const router = createBrowserRouter(
		createRoutesFromElements(
			<Route path='/' element={<MainLayout />}>
				<Route index element={<HomePage />} />
				<Route path='/add-job' element={<AddJobPage onAddJobSubmit={addJob} />} />
				<Route path='/jobs' element={<JobsPage />} />
				<Route
					path='/edit-job/:id'
					element={<EditJobPage updateJobSubmit={updateJob} />}
					loader={jobLoader}
				/>
				<Route path='/jobs/:id' element={<JobPage deleteJob={deleteJob} />} loader={jobLoader} />
				<Route path='*' element={<NotFound />} />
			</Route>,
		),
	);
	return <RouterProvider router={router} />;
}

export default App;
