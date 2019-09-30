import styled from "@emotion/styled"

const StyledHeader = styled.div`
	text-align: center;

	h1 {
		font-size: var(--s5);
		max-width: 25ch;
	}

	p {
		font-weight: 700;
	}

	/* Make all children centered with no top or bottom margin */
	& > * {
		margin: 0 auto;
	}

	/* The first paragraph is the standfirst */
	p:first-of-type {
		/* Margin to push it away from the headline */
		margin-top: var(--s2);
		/* Reset the font weight so not bold */
		font-weight: 400;
	}

	/* The first p after the standfirst */
	& > p:first-of-type + * {
		/* Margin to push it away from the standfirst */
		margin-top: var(--s1);
	}

	time {
		font-family: var(--sans-serif-font);
		font-size: var(--s-2);
		text-transform: uppercase;
		letter-spacing: 0.05em;
	}
`

export default StyledHeader
