import React from "react"
import PropTypes from "prop-types"
import LayoutBox from "../LayoutBox"
import LayoutCluster from "../LayoutCluster"
import LayoutSwitcher from "../LayoutSwitcher"
import {
	NatureLogoSVG,
	FacebookLogoSVG,
	TwitterLogoSVG,
	EmailLogoSVG,
	VeggieBurgerLogoSVG,
} from "../LogosSVG/index"

const Menu = ({
	facebookURL,
	twitterURL,
	emailURL,
	menuLinks,
	btnId,
	btnTitle,
}) => {
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
		<LayoutBox className="menu invert" elem="header" role="banner">
			<LayoutCluster>
				<div className="cluster__split-after">
					<a
						href="https://www.nature.com"
						data-track="click"
						data-event-category="menu"
						data-event-action="click"
						data-event-label="nature.com"
					>
						<NatureLogoSVG height={2} />
					</a>
				</div>

				<LayoutCluster innerWrapperElem="ul">
					<li>
						<a
							href={facebookURL}
							data-track="click"
							data-event-category="menu social"
							data-event-action="click"
							data-event-label="facebook"
						>
							<FacebookLogoSVG
								height={2}
							/>
						</a>
					</li>
					<li>
						<a
							href={twitterURL}
							data-track="click"
							data-event-category="menu social"
							data-event-action="click"
							data-event-label="twitter"
						>
							<TwitterLogoSVG
								height={2}
							/>
						</a>
					</li>
					<li>
						<a
							href={emailURL}
							data-track="click"
							data-event-category="menu social"
							data-event-action="click"
							data-event-label="email"
						>
							<EmailLogoSVG
								height={2}
							/>
						</a>
					</li>
				</LayoutCluster>
				<button
					type="button"
					aria-expanded
					aria-controls={btnId}
					data-event-category="menu"
					data-event-action="click"
					data-event-label="button"
					className="js-menu-button font-family:sans-serif"
				>
					<VeggieBurgerLogoSVG
						title={btnTitle}
						height={1.6}
					/>
				</button>
			</LayoutCluster>
			<LayoutSwitcher
				className="js-nav-menu"
				innerWrapperElem="ul"
				id={btnId}
				switcherMinWidth="var(--measure-big)"
			>
				{renderedLinks}
			</LayoutSwitcher>
		</LayoutBox>
	)
}

Menu.defaultProps = {
	btnId: "menu-list",
	btnTitle: "Show navigation menu",
}

Menu.propTypes = {
	facebookURL: PropTypes.string.isRequired,
	twitterURL: PropTypes.string.isRequired,
	emailURL: PropTypes.string.isRequired,
	menuLinks: PropTypes.arrayOf(
		PropTypes.shape({
			text: PropTypes.string,
			href: PropTypes.string,
		})
	),
	btnId: PropTypes.string,
	btnTitle: PropTypes.string,
}

export default Menu
