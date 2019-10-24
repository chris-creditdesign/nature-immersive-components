import React from "react"
import { NatureLogoSVG } from "../LogosSVG/index"

const MainHeader = () => (
	<header className="box menu">
		<div className="cluster">
			<div>
				<div className="split-after">
					<a href="https://www.nature.com">
						<NatureLogoSVG height={2} />
					</a>
				</div>

				<button type="button" aria-expanded={false} aria-controls="menu-list">
					Menu
				</button>

				<div
					className="cluster menu-container"
					id="menu-list"
					hidden={false}
					style={{ "--justify-content": "flex-start" }}
				>
					<ul>
						<li>
							<a href="#">Hello</a>
						</li>
						<li>
							<a href="#">Hello</a>
						</li>
						<li>
							<a href="#">Hello</a>
						</li>
						<li>
							<a href="#">Hello</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</header>
)

export default MainHeader

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
