import React from "react"
import PropTypes from "prop-types"
import LayoutBox from "../LayoutBox"
import LayoutCluster from "../LayoutCluster"
import {
	NatureLogoSVG,
	FacebookLogoSVG,
	TwitterLogoSVG,
	EmailLogoSVG,
	VeggieBurgerLogoSVG,
} from "../LogosSVG/index"

const Menu = ({ facebookURL, twitterURL, emailURL }) => (
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
						<FacebookLogoSVG height={2} />
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
						<TwitterLogoSVG height={2} />
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
						<EmailLogoSVG height={2} />
					</a>
				</li>
			</LayoutCluster>
		</LayoutCluster>
	</LayoutBox>
)

Menu.propTypes = {
	facebookURL: PropTypes.string.isRequired,
	twitterURL: PropTypes.string.isRequired,
	emailURL: PropTypes.string.isRequired,
}

export default Menu
