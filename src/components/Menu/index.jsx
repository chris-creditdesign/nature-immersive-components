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
} from "../LogosSVG/index"

const Menu = ({ facebookURL, twitterURL, emailURL, menuLinks }) => {
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
						<NatureLogoSVG height={1.6} />
					</a>
				</div>

				<LayoutCluster
					innerWrapperElem="ul"
					clusterSpace="var(--s-2)"
				>
					<li>
						<a
							href={facebookURL}
							data-track="click"
							data-event-category="menu social"
							data-event-action="click"
							data-event-label="facebook"
						>
							<FacebookLogoSVG
								height={1.6}
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
								height={1.6}
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
								height={1.6}
							/>
						</a>
					</li>
				</LayoutCluster>
				<div className="js-menu-button" />
			</LayoutCluster>
			<LayoutSwitcher
				className="js-nav-menu"
				innerWrapperElem="ul"
				id="menu-list"
				switcherMinWidth="var(--measure-big)"
			>
				{renderedLinks}
			</LayoutSwitcher>
		</LayoutBox>
	)
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
}

export default Menu
