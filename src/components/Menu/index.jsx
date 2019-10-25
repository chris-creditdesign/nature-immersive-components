import React from "react"
import PropTypes from "prop-types"
import { NatureLogoSVG } from "../LogosSVG/index"

const Menu = ({ menuLinks }) => {
	const renderedLinks = menuLinks.map(elem => (
		<li>
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

					<div
						className="cluster menu-container"
						id="menu-list"
						hidden={false}
						style={{ "--justify-content": "flex-start", "--space": "var(--s1)" }}
					>
						<ul>{renderedLinks}</ul>
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
}

export default Menu

// {pdfAvailable ? (
// 	<li>
// 		<GALink
// 			eventCategory="main external links"
// 			eventLabel="pdf download"
// 			href={
// 				pdfURL
// 			}
// 		>
// 			PDF
// 			version
// 		</GALink>
// 	</li>
// ) : null}

// {altPdfAvailable ? (
// 	<li>
// 		<GALink
// 			eventCategory="main external links"
// 			eventLabel="alt pdf download"
// 			href={
// 				altPdfURL
// 			}
// 		>
// 			{
// 				altPdfBlurb
// 			}
// 		</GALink>
// 	</li>
// ) : null}

// <Cluster
// 	elem="li"
// 	elemWrapper="ul"
// 	ariaLabel="Social sharing"
// >
// 	<li>
// 		<GALink
// 			eventCategory="main social links"
// 			eventLabel="facebook"
// 			target="_blank"
// 			rel="noreferrer noopener"
// 			href={
// 				facebookURL
// 			}
// 		>
// 			<FacebookLogoSVG
// 				height={
// 					2
// 				}
// 			/>
// 		</GALink>
// 	</li>
// 	<li>
// 		<GALink
// 			eventCategory="main social links"
// 			eventLabel="twitter"
// 			target="_blank"
// 			rel="noreferrer noopener"
// 			href={
// 				twitterURL
// 			}
// 		>
// 			<TwitterLogoSVG
// 				height={
// 					2
// 				}
// 			/>
// 		</GALink>
// 	</li>
// 	<li>
// 		<GALink
// 			eventCategory="main social links"
// 			eventLabel="email"
// 			target="_blank"
// 			rel="noreferrer noopener"
// 			href={
// 				emailURL
// 			}
// 		>
// 			<EmailLogoSVG
// 				height={
// 					2
// 				}
// 			/>
// 		</GALink>
// 	</li>
// </Cluster>
