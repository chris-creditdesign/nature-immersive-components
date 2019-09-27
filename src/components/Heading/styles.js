import styled from "@emotion/styled"

const StyledHeader = styled.div`
	text-align: center;
	width: 80%;
	margin: var(--s4) auto;

	h1 {
		font-size: var(--s5);
		max-width: 25ch;
		margin: 0 auto var(--s2);
	}

	.stand {
		margin: 0 auto var(--s1);
	}

	.by-line {
		font-weight: 700;
		margin: 0 auto;
	}

	time {
		font-size: var(--s-2);
		text-transform: uppercase;
		letter-spacing: 0.05em;
		font-family: var(--sans-serif-font);
	}
`

export default StyledHeader
