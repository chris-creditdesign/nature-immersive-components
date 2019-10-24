import React from "react"
import { SpringerNatureLogoSVG } from "../LogosSVG/index"

const Footer = () => (
	<footer className="footer box invert font-size:small-1 font-family:sans-serif" role="contentinfo">
		<div className="stack" style={{ "--space": "var(--s0)" }}>
			<SpringerNatureLogoSVG height={1.5} />
			<div className="cluster" style={{ "--justify-content": "flex-start" }}>
				<ul>
					<li>
						<a href="https://www.nature.com/info/privacy.html">Privacy Policy</a>
					</li>
					<li>
						<a href="https://www.nature.com/info/cookies.html">Use of cookies</a>
					</li>
					<li>
						<a href="https://www.nature.com/info/legal_notice.html">Legal notice</a>
					</li>
					<li>
						<a href="https://www.nature.com/info/tandc.html">Terms & Conditions</a>
					</li>
					<li>
						<a href="https://www.nature.com/info/accessibility_statement.html">
							Accessibility statement
						</a>
					</li>
				</ul>
			</div>

			<small>© 2019 Springer Nature Limited. All rights reserved.</small>
		</div>
	</footer>
)

export default Footer
