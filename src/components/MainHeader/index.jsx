import React from "react"
import PropTypes from "prop-types"
import { StyledMainHeader, StyledList, StyledListSocial } from "./styles"
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
						<svg
							height="2em"
							viewBox="0 0 200 49"
							role="img"
							aria-labelledby="nature-home-page-title"
							focusable="false"
						>
							<title id="nature-home-page-title">
								Nature
							</title>
							<use
								href="#nature-logo"
								xlinkHref="#nature-logo"
								role="presentation"
							/>
						</svg>
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
							<svg
								className="pdf-icon"
								height="0.75em"
								viewBox="0 0 30 30"
								aria-hidden="true"
								focusable="false"
							>
								<use
									href="#pdf"
									xlinkHref="#pdf"
									role="presentation"
								/>
							</svg>
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
							<svg
								className="alt-pdf-icon"
								width="30px"
								height="30px"
								viewBox="0 0 30 30"
								aria-hidden="true"
								focusable="false"
							>
								<use
									href="#pdf"
									xlinkHref="#pdf"
									role="presentation"
								/>
							</svg>
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
								<svg
									height="1.85em"
									viewBox="0 0 30 30"
									role="img"
									aria-labelledby="main-header__social-list__item__facebook__title"
									focusable="false"
								>
									<title id="main-header__social-list__item__facebook__title">
										Share
										on
										Facebook
									</title>
									<use
										href="#facebook"
										xlinkHref="#facebook"
										role="presentation"
									/>
								</svg>
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
								<svg
									height="1.85em"
									viewBox="0 0 30 30"
									role="img"
									aria-labelledby="main-header__social-list__item__twitter__title"
									focusable="false"
								>
									<title id="main-header__social-list__item__twitter__title">
										Share
										on
										Twitter
									</title>
									<use
										href="#twitter"
										xlinkHref="#twitter"
										role="presentation"
									/>
								</svg>
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
								<svg
									height="1.85em"
									viewBox="0 0 30 30"
									role="img"
									aria-labelledby="main-header__social-list__item__email__title"
									focusable="false"
								>
									<title id="main-header__social-list__item__email__title">
										Share
										via
										E-Mail
									</title>
									<use
										href="#email"
										xlinkHref="#email"
										role="presentation"
									/>
								</svg>
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
