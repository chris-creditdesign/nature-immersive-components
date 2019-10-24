import styled from "@emotion/styled"

const StyledBackgroundContainer = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	width: 100vw;
	z-index: -999;

	/* Center the canvas */
	display: flex;
	justify-content: center;

	canvas {
		max-width: 100%;
		margin: 0 auto;
	}
`

export default StyledBackgroundContainer
