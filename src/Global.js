import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
	@import url('https://fonts.googleapis.com/css?family=Montserrat:400,700,900&display=swap');
	
	:root {
		--gradient: linear-gradient( 135deg, #72EDF2 10%, #5151E5 100%);
	}

	* {
		-webkit-box-sizing: border-box;
				box-sizing: border-box;
		line-height: 1.25em;
	}

	.clear {
		clear: both;
	}

	.App {
		width: auto;
		position: relative;
	}

	body {
		margin: 0;
		width: 100%;
		height: 100vh;
		font-family: 'Montserrat', sans-serif;
		background-color: #343d4b;
		display: -webkit-box;
		display: -ms-flexbox;
		display: flex;
		-webkit-box-align: center;
			-ms-flex-align: center;
				align-items: center;
		-webkit-box-pack: center;
			-ms-flex-pack: center;
				justify-content: center;
	}
`;
