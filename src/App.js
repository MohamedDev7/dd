import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import New from "./pages/new/New";
import Single from "./pages/single/Single";
import List from "./pages/list/List";
import { HashRouter, Routes, Route } from "react-router-dom";
import { productInputs, userInputs } from "./formsource";
import "./style/dark.scss";
import { useContext } from "react";
import DarkModeContext from "./store/darkMode-context";
const App = () => {
	const darkModeCtx = useContext(DarkModeContext);
	return (
		<div className={`app ${darkModeCtx.darkMode ? "dark" : ""}`}>
			<HashRouter>
				<Routes>
					<Route path="/">
						<Route index element={<Home />} />
						<Route path="login" element={<Login />} />
						<Route path="users">
							<Route index element={<List />} />
							<Route path=":userId" element={<Single />} />
							<Route
								path="new"
								element={<New inputs={userInputs} title="Add New User" />}
							/>
						</Route>
						<Route path="products">
							<Route index element={<List />} />
							<Route path=":productId" element={<Single />} />
							<Route
								path="new"
								element={<New inputs={productInputs} title="Add New Product" />}
							/>
						</Route>
					</Route>
				</Routes>
			</HashRouter>
		</div>
	);
};

export default App;
