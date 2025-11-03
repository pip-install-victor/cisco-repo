import './Exhibit.css';

function Exhibit({ title, children }) {
	return (
		<div className="exhibit-card">
		<h2 className="exhibit-title">{title}</h2>
		<div className="exhibit-content">
			{children}
		</div>
		</div>
	);
}

export default Exhibit;
