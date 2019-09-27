import styled from "@emotion/styled"

export const StyledMainHeader = styled.div`
	background-color: var(--dark-background-color);
	color: var(--text-on-dark-color);
	font-family: var(--sans-serif-font);
	/* Reduce the font size of everything in this div */
	font-size: var(--s-1);

	a {
		/* Apply colour to text and svg elements */
		color: var(--text-on-dark-color);
		fill: var(--text-on-dark-color);

		&:hover {
			text-decoration: none;
			color: var(--text-on-dark-accent-color);
			fill: var(--text-on-dark-accent-color);
		}
	}
`

export const StyledList = styled.ul`
	max-width: 100%;
	margin: 0;
	/* No padding at the bottom this is provided by the list items */
	/* so that they will wrap correctly */
	padding: var(--s-3) var(--s-3) 0 var(--s-3);

	/* Apply flexbox so that the items can be arranged as desired */
	display: flex;
	/* vertically center the items */
	align-items: center;
	/* Allow the items to wrap onto a new line if the screen is too small to fit */
	flex-wrap: wrap;
	justify-content: flex-end;

	/* Homep page logo should push the other items to the right */
	.home-page {
		flex-grow: 1;
	}

	li {
		max-width: 100%;
		display: inline;
		/* To correctly space the items when the rows wrap */
		padding: 0 0 var(--s-3) 0;
	}

	/* Add some space between these items and their text */
	.pdf-icon,
	.alt-pdf-icon {
		margin: 0 var(--s-6) 0 0;
	}
`
export const StyledListSocial = styled.ul`
	/* Remove browser margin and padding */
	margin: 0;
	padding: 0;

	li {
		/* Each item should push the item to its left away */
		margin: 0 0 0 var(--s-3);

		/* Adds a circular border around the link */
		a {
			display: inline-block;
			width: 2em;
			height: 2em;
			border: 1px solid var(--text-on-dark-accent-color);
			border-radius: 50%;
		}
	}
`
