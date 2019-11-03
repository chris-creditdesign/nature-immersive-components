import React from "react"
import PropTypes from "prop-types"

import LayoutSwitcher from "../LayoutSwitcher"
import LayoutCluster from "../LayoutCluster"
import LayoutBox from "../LayoutBox"

const MenuReveal = ({ menuLinks, id, labelText, btnText }) => {
	const renderedLinks = menuLinks.map(elem => (
		<li key={`${elem.text}-${elem.href}`}>
			<a
				href={elem.href}
				data-event-category="menu"
				data-event-action="click"
				data-event-label={elem.text}
			>
				{elem.text}
			</a>
		</li>
	))
	return (
		<LayoutBox
			elem="nav"
			className="menu menu--reveal invert font-family:sans-serif"
		>
			<LayoutCluster>
				<p
					id="series-article-navigation"
					className="series-article-nav__header"
					dangerouslySetInnerHTML={{
						__html: labelText,
					}}
				/>

				<button
					type="button"
					aria-expanded
					aria-controls={id}
					data-event-category="menu"
					data-event-action="click"
					data-event-label="button"
					className="js-menu-button font-family:sans-serif"
				>
					{btnText}
				</button>
			</LayoutCluster>

			<LayoutSwitcher
				innerWrapperElem="ul"
				id={id}
				switcherMinWidth="var(--measure-big)"
			>
				{renderedLinks}
			</LayoutSwitcher>
		</LayoutBox>
	)
}

MenuReveal.defaultProps = {
	id: "menu-list",
}

MenuReveal.propTypes = {
	menuLinks: PropTypes.arrayOf(
		PropTypes.shape({
			text: PropTypes.string,
			href: PropTypes.string,
		})
	),
	id: PropTypes.string,
	labelText: PropTypes.string.isRequired,
	btnText: PropTypes.string.isRequired,
}

export default MenuReveal
