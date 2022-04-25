import React from "react";
import DarkModeContext from "./darkMode-context";
import { useState } from "react";

const DarkModeProvider = (props) => {
	const [darkModeState, setDarkModeState] = useState(false);
	const goDark = () => {
		setDarkModeState(true);
	};
	const goLight = () => {
		setDarkModeState(false);
	};
	return (
		<DarkModeContext.Provider
			value={{ darkMode: darkModeState, goDark: goDark, goLight: goLight }}
		>
			{props.children}
		</DarkModeContext.Provider>
	);
};

export default DarkModeProvider;
