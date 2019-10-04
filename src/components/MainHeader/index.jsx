import React from "react"
import PropTypes from "prop-types"
import { StyledCluster, StyledBox } from "./styles"
import {
	EmailLogoSVG,
	FacebookLogoSVG,
	NatureLogoSVG,
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
		<StyledBox elem="header">
			<StyledCluster
				elemWrapper="ul"
				justifyContent="flex-end"
				splitAfter=".current-issue"
				dataContainer="main external links"
			>
				<li>
					<a
						href="https://www.nature.com/nature/"
						data-track="click"
						data-track-label="journal-homepage"
						data-category="external"
					>
						<NatureLogoSVG height={2} />
					</a>
				</li>
				<li className="current-issue">
					<a
						href="https://www.nature.com/nature/current_issue.html"
						data-track="click"
						data-track-label="current-issue"
						data-category="external"
					>
						Current issue
					</a>
				</li>
				{pdfAvailable || altPdfAvailable ? (
					<StyledCluster
						elem="li"
						elemWrapper="ul"
						ariaLabel="PDF download"
					>
						{pdfAvailable ? (
							<li>
								<a
									href={
										pdfURL
									}
									data-track="click"
									data-track-label="pdf-version"
									data-category="external"
								>
									PDF
									version
								</a>
							</li>
						) : null}
						{altPdfAvailable ? (
							<li>
								<a
									href={
										altPdfURL
									}
									data-track="click"
									data-track-label="alt-pdf-version"
									data-category="external"
								>
									{
										altPdfBlurb
									}
								</a>
							</li>
						) : null}
					</StyledCluster>
				) : null}
				<StyledCluster
					elem="li"
					elemWrapper="ul"
					dataContainer="main social links"
					ariaLabel="Social sharing"
				>
					<li>
						<a
							href={facebookURL}
							data-track="click"
							data-track-label="facebook"
							data-category="social"
							target="_blank"
							rel="noreferrer noopener"
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
							data-track-label="twitter"
							data-category="social"
							target="_blank"
							rel="noreferrer noopener"
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
							data-track-label="email"
							data-category="social"
							target="_blank"
							rel="noreferrer noopener"
						>
							<EmailLogoSVG
								height={2}
							/>
						</a>
					</li>
				</StyledCluster>
			</StyledCluster>
		</StyledBox>
	)
}

MainHeader.defaultProps = {
	altPdfAvailable: false,
	altPdfBlurb: "",
	pdfAvailable: false,
}

MainHeader.propTypes = {
	altPdfAvailable: PropTypes.bool,
	altPdfBlurb: PropTypes.string,
	articleURL: PropTypes.string.isRequired,
	doi: PropTypes.string.isRequired,
	headline: PropTypes.string.isRequired,
	pdfAvailable: PropTypes.bool,
	stand: PropTypes.string.isRequired,
}

export default MainHeader
