import React from "react"
import PropTypes from "prop-types"
import StyledFigure from "./styles"

const Figure = ({ className }) => (
	<StyledFigure className={className}>
		<picture>
			<img src="public/img/image.jpg" alt="test" />
		</picture>
		<figcaption className="font-size:small-1 font-family:sans-serif">
			Image caption text
		</figcaption>
	</StyledFigure>
)

Figure.defaultProps = {
	className: "",
}

Figure.propTypes = {
	className: PropTypes.string,
}

export default Figure
