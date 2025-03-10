import { BrowserRouter, Routes, Route} from "react-router-dom";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Beranda from "./Pages/Beranda";
import "./App.css";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Register />} />
				<Route path="/login" element={<Login />} />
				<Route path="/beranda" element={<Beranda />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
