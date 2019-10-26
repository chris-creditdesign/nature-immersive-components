import React from "react"
import PropTypes from "prop-types"
import { NatureLogoSVG, FacebookLogoSVG, TwitterLogoSVG, EmailLogoSVG } from "../LogosSVG/index"

const Menu = ({ menuLinks, facebookURL, twitterURL, emailURL }) => {
	const renderedLinks = menuLinks.map(elem => (
		<li key={`${elem.text}-${elem.href}`}>
			<a href={elem.href}>{elem.text}</a>
		</li>
	))

	return (
		<header className="box menu">
			<div className="cluster">
				<div>
					<div className="split-after">
						<a href="https://www.nature.com">
							<NatureLogoSVG height={2} />
						</a>
					</div>

					<button type="button" aria-expanded aria-controls="menu-list">
						Menu
					</button>

					<div className="switcher menu-container">
						<ul className="" id="menu-list" hidden={false}>
							{renderedLinks}
							<li
								className="cluster social-links"
								style={{ "--justify-content": "flex-end" }}
							>
								<ul>
									<li>
										<a href={facebookURL}>
											<FacebookLogoSVG height={2} />
										</a>
									</li>
									<li>
										<a href={twitterURL}>
											<TwitterLogoSVG height={2} />
										</a>
									</li>
									<li>
										<a href={emailURL}>
											<EmailLogoSVG height={2} />
										</a>
									</li>
								</ul>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</header>
	)
}

Menu.propTypes = {
	menuLinks: PropTypes.arrayOf(
		PropTypes.shape({
			text: PropTypes.string,
			href: PropTypes.string,
		})
	),
	facebookURL: PropTypes.string.isRequired,
	twitterURL: PropTypes.string.isRequired,
	emailURL: PropTypes.string.isRequired,
}

export default Menu
