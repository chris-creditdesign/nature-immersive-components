import styled from "@emotion/styled"
import Cluster from "../Cluster/index"
import Box from "../Box/index"

export const StyledCluster = styled(Cluster)`
	/* Remove the global max width value */
	/* So that the Header can span the whole page width */
	& * {
		max-width: none;
	}

	ul {
		list-style: none;
		max-width: none;
		padding: 0;
	}

	ul li {
		padding: 0;
	}
`

export const StyledBox = styled(Box)`
	background-color: var(--background-color-invert);
	color: var(--text-color-invert);

	a {
		/* Apply colour to text and svg elements */
		color: inherit;
		fill: var(--text-color-invert);

		&:hover {
			text-decoration: none;
			color: var(--text-color-invert-accent);
			fill: var(--text-color-invert-accent);
		}
	}
`
