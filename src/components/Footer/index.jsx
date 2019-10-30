import React from "react"
import { SpringerNatureLogoSVG } from "../LogosSVG/index"

import LayoutStack from "../LayoutStack"
import LayoutBox from "../LayoutBox"
import LayoutCluster from "../LayoutCluster"

const Footer = () => (
	<LayoutBox
		elem="footer"
		className="footer invert font-size:small-1 font-family:sans-serif"
		role="contentinfo"
	>
		<LayoutStack stackSpace="var(--s0)">
			<SpringerNatureLogoSVG height={1.5} />
			<LayoutCluster innerWrapperElem="ul">
				<li>
					<a href="https://www.nature.com/info/privacy.html">
						Privacy Policy
					</a>
				</li>
				<li>
					<a href="https://www.nature.com/info/cookies.html">
						Use of cookies
					</a>
				</li>
				<li>
					<a href="https://www.nature.com/info/legal_notice.html">
						Legal notice
					</a>
				</li>
				<li>
					<a href="https://www.nature.com/info/tandc.html">
						Terms & Conditions
					</a>
				</li>
				<li>
					<a href="https://www.nature.com/info/accessibility_statement.html">
						Accessibility statement
					</a>
				</li>
			</LayoutCluster>

			<small>
				© 2019 Springer Nature Limited. All rights
				reserved.
			</small>
		</LayoutStack>
	</LayoutBox>
)

export default Footer
