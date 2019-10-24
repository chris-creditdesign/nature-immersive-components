import React from "react"
import PropTypes from "prop-types"
import Center from "../Center"
import Stack from "../Stack"

const LayoutSection = ({ headline, children }) => (
	<Center elem="section" space="var(--s1)">
		<Stack space="var(--s1)">
			{headline ? (
				<h2 className="border-above">{headline}</h2>
			) : null}
			{children}
		</Stack>
	</Center>
)

LayoutSection.defaultProps = {
	headline: null,
}

LayoutSection.propTypes = {
	headline: PropTypes.string,
	children: PropTypes.node.isRequired,
}

export default LayoutSection
