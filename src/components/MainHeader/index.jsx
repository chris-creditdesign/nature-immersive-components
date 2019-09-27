import React from "react"
import PropTypes from "prop-types"
import { StyledMainHeader, StyledList, StyledListSocial } from "./styles"
import {
	EmailLogoSVG,
	FacebookLogoSVG,
	NatureLogoSVG,
	PdfLogoSVG,
	TwitterLogoSVG,
} from "../LogosSVG/index"
import generateSocialURLs from "../../utils/generate-social-urls"

const MainHeader = ({
	altPdfAvailable,
	altPdfBlurb,
	articleURL,
	doi,
	headline,
	pdfAvailable,
	stand,
}) => {
	const {
		pdfURL,
		altPdfURL,
		facebookURL,
		twitterURL,
		emailURL,
	} = generateSocialURLs(doi, articleURL, headline, stand)

	return (
		<StyledMainHeader>
			<StyledList>
				<li
					className="home-page"
					data-container="main external links"
				>
					<a
						href="https://www.nature.com/nature/"
						data-track="click"
						data-track-label="journal-homepage"
						data-category="external"
					>
						<NatureLogoSVG height={2} />
					</a>
				</li>

				<li
					className="current-issue"
					data-container="main external links"
				>
					<a
						href="https://www.nature.com/nature/current_issue.html"
						data-track="click"
						data-track-label="current-issue"
						data-category="external"
					>
						Current issue
					</a>
				</li>

				{pdfAvailable ? (
					<li
						className="pdf"
						data-container="main external links"
					>
						<a
							href={pdfURL}
							data-track="click"
							data-track-label="pdf-version"
							data-category="external"
						>
							<PdfLogoSVG />
							<span>PDF version</span>
						</a>
					</li>
				) : null}

				{altPdfAvailable ? (
					<li data-container="main external links">
						<a
							href={altPdfURL}
							data-track="click"
							data-track-label="alt-pdf-version"
							data-category="external"
						>
							<PdfLogoSVG />
							<span>
								{altPdfBlurb}
							</span>
						</a>
					</li>
				) : null}

				<li
					className="
					main-header__list__item 
					main-header__list__item--social
				"
				>
					<StyledListSocial
						className="main-header__social-list"
						aria-label="Social sharing"
						data-container="main social links"
					>
						<li className="main-header__social-list__item">
							<a
								href={
									facebookURL
								}
								data-track="click"
								data-track-label="facebook"
								data-category="social"
								target="_blank"
								rel="noreferrer noopener"
							>
								<FacebookLogoSVG
									height={
										2
									}
								/>
							</a>
						</li>
						<li className="main-header__social-list__item">
							<a
								href={
									twitterURL
								}
								data-track="click"
								data-track-label="twitter"
								data-category="social"
								target="_blank"
								rel="noreferrer noopener"
							>
								<TwitterLogoSVG
									height={
										2
									}
								/>
							</a>
						</li>
						<li className="main-header__social-list__item">
							<a
								href={emailURL}
								data-track="click"
								data-track-label="email"
								data-category="social"
								rel="noreferrer noopener"
							>
								<EmailLogoSVG
									height={
										2
									}
								/>
							</a>
						</li>
					</StyledListSocial>
				</li>
			</StyledList>
		</StyledMainHeader>
	)
}

MainHeader.propTypes = {
	altPdfAvailable: PropTypes.bool.isRequired,
	altPdfBlurb: PropTypes.string.isRequired,
	articleURL: PropTypes.string.isRequired,
	doi: PropTypes.string.isRequired,
	headline: PropTypes.string.isRequired,
	pdfAvailable: PropTypes.bool.isRequired,
	stand: PropTypes.string.isRequired,
}

export default MainHeader
