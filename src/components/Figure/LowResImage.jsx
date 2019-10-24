import React from "react"
import PropTypes from "prop-types"

const LowResImage = ({ srcURL, altText }) => <img src={srcURL} alt={altText} />

LowResImage.propTypes = {
	altText: PropTypes.string.isRequired,
	srcURL: PropTypes.string.isRequired,
}

export default LowResImage
