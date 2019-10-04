import React from "react"
import { storiesOf } from "@storybook/react"
import LogosSVG, {
	EmailLogoSVG,
	FacebookLogoSVG,
	NatureLogoSVG,
	PdfLogoSVG,
	SpringerNatureLogoSVG,
	TwitterLogoSVG,
} from "./index"

const sizes = [1, 2, 3, 4, 5]
const ratio = 1.5

storiesOf("LogosSVG", module)
	.add("default", () => (
		<div>
			<style
				dangerouslySetInnerHTML={{
					__html: "svg { border: 1px solid red;}",
				}}
			/>
			<LogosSVG />
			<div>
				<NatureLogoSVG />
			</div>
			<div>
				<SpringerNatureLogoSVG />
			</div>
			<div>
				<FacebookLogoSVG />
			</div>
			<div>
				<svg
					width="192.77802"
					height="32.118534"
					viewBox="0 0 192.77802 32.118534"
				>
					<use
						href="#nature-briefing-logo"
						xlinkHref="#nature-briefing-logo"
					/>
				</svg>
			</div>
			<div>
				<PdfLogoSVG />
			</div>
			<div>
				<EmailLogoSVG />
			</div>
			<div>
				<svg
					width="30px"
					height="30px"
					viewBox="0 0 30 30"
				>
					<use
						href="#text-section-twitter"
						xlinkHref="#text-section-twitter"
					/>
				</svg>
			</div>
			<div>
				<FacebookLogoSVG />
			</div>
			<div>
				<svg
					width="30px"
					height="30px"
					viewBox="0 0 30 30"
				>
					<use
						href="#text-section-facebook"
						xlinkHref="#text-section-facebook"
					/>
				</svg>
			</div>
			<div>
				<EmailLogoSVG />
			</div>
		</div>
	))
	.add("NatureLogoSVG", () => (
		<div>
			<style
				dangerouslySetInnerHTML={{
					__html: "svg { border: 1px solid red;}",
				}}
			/>
			{sizes.map(size => (
				<div>
					<NatureLogoSVG height={size * ratio} />
				</div>
			))}
		</div>
	))
	.add("SpringerNatureLogoSVG", () => (
		<div>
			<style
				dangerouslySetInnerHTML={{
					__html: "svg { border: 1px solid red;}",
				}}
			/>
			<div>
				<SpringerNatureLogoSVG />
			</div>
		</div>
	))
	.add("PdfLogoSVG", () => (
		<div>
			<style
				dangerouslySetInnerHTML={{
					__html: "svg { border: 1px solid red;}",
				}}
			/>
			{sizes.map(size => (
				<div>
					<PdfLogoSVG height={size * ratio} />
				</div>
			))}
		</div>
	))
	.add("FacebookLogoSVG", () => (
		<div>
			<style
				dangerouslySetInnerHTML={{
					__html: "svg { border: 1px solid red;}",
				}}
			/>
			{sizes.map(size => (
				<div>
					<FacebookLogoSVG
						height={size * ratio}
					/>
				</div>
			))}
		</div>
	))
	.add("TwitterLogoSVG", () => (
		<div>
			<style
				dangerouslySetInnerHTML={{
					__html: "svg { border: 1px solid red;}",
				}}
			/>
			{sizes.map(size => (
				<div>
					<TwitterLogoSVG height={size * ratio} />
				</div>
			))}
		</div>
	))
	.add("EmailLogoSVG", () => (
		<div>
			<style
				dangerouslySetInnerHTML={{
					__html: "svg { border: 1px solid red;}",
				}}
			/>
			{sizes.map(size => (
				<div>
					<EmailLogoSVG height={size * ratio} />
				</div>
			))}
		</div>
	))
