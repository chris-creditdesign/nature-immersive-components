import React from "react"
import { css } from "@emotion/core"
import PropTypes from "prop-types"
import Cluster from "../Cluster"
import GALink from "../GALink"

const SideLink = ({ eventLabel, text, href }) => {
	const style = css`
		padding: var(--s0);
		color: var(--text-color-invert);
		background-color: var(--background-color-invert);
		font-family: var(--sans-serif-font);

		&:focus {
			background-color: var(--outline);
		}
	`
	return (
		<Cluster justifyContent="flex-end">
			<GALink
				style={style}
				eventCategory="external links"
				eventLabel={eventLabel}
				href={href}
			>
				{text}
			</GALink>
		</Cluster>
	)
}

SideLink.propTypes = {
	eventLabel: PropTypes.string.isRequired,
	text: PropTypes.string.isRequired,
	href: PropTypes.string.isRequired,
}

export default SideLink
