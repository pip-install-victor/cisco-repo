import './App.css';
import Banner from './components/Banner';
import Exhibit from './components/Exhibit';

function App() {
	return (
		<div className="App">
		<Banner />

		<main className="dashboard-grid">
			<Exhibit title="System Status">
			<p>All systems operational.</p>
			<p>Monitoring real-time data...</p>
			</Exhibit>

			<Exhibit title="Data Point Alpha">
			<p>Value: 128.5</p>
			</Exhibit>

			<Exhibit title="Data Point Bravo">
			<p>Value: 72.1</p>
			</Exhibit>
		</main>
		</div>
	);
}

export default App;
