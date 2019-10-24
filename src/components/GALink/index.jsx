import React from "react"
import PropTypes from "prop-types"

const checkGA = () => window.ga && window.ga.create

const GALink = ({
	children,
	style,
	eventAction,
	eventCategory,
	eventLabel,
	href,
	rel,
	target,
}) => {
	const handelClick = () => {
		if (!checkGA()) return

		/* eslint-disable no-console */
		console.log(
			`ga('send', 'event', ${eventCategory}, ${eventAction}, ${eventLabel})`
		)

		window.ga("send", "event", {
			eventCategory,
			eventAction,
			eventLabel,
			nonInteraction: true,
		})
	}

	return (
		<a
			href={href}
			css={style}
			onClick={handelClick}
			rel={rel}
			target={target}
		>
			{children}
		</a>
	)
}

GALink.defaultProps = {
	style: null,
	eventAction: "click",
	rel: null,
	target: null,
}

GALink.propTypes = {
	children: PropTypes.node.isRequired,
	style: PropTypes.object,
	eventAction: PropTypes.string,
	eventCategory: PropTypes.string.isRequired,
	eventLabel: PropTypes.string.isRequired,
	href: PropTypes.string.isRequired,
	rel: PropTypes.string,
	target: PropTypes.string,
}

export default GALink
