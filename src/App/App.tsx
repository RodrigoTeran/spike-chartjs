import "./App.css";
import Bar from "./Layouts/Bar";
import Pie from "./Layouts/Pie";

function App() {
	return (
		<div className="container">
			<div className="wrapper">
				<Bar />
			</div>
			<div className="wrapper">
				<Pie />
			</div>
		</div>
	);
}

export default App;
