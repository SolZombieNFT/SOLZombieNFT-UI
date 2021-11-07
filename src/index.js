import React from 'react';
import {ChakraProvider} from "@chakra-ui/react";
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {extendTheme} from "@chakra-ui/react"
import GA4React from "ga-4-react";

const theme = extendTheme({
	styles: {
		global: {
			body: {
				bg: "black",
				color: "white",
			},
			a: {
				color: "white",
				_hover: {
					// textDecoration: "underline",
				},
			},
		},
	},
	fonts: {
		heading: "Teko",
		body: "Teko",
	},
	colors: {
		zombie: {
			100: "#b9161d",
		},
	},

})
ReactDOM.render(
	<ChakraProvider theme={theme}>
		<App/>
	</ChakraProvider>,
	document.getElementById('root')
);
try {
	setTimeout(_ => {
		const ga4react = new GA4React("G-J51QB5ZNMH");
		ga4react.initialize();
	}, 4000);
} catch (err) {
	console.log(err);
}


