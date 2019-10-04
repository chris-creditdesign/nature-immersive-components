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
	.add("NatureLogoSVG", () => (
		<div>
			<style
				dangerouslySetInnerHTML={{
					__html: "svg { border: 1px solid red;}",
				}}
			/>
			{sizes.map(size => (
				<div key={size}>
					<NatureLogoSVG height={size * ratio} />
				</div>
			))}
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
				<div key={size}>
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
				<div key={size}>
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
				<div key={size}>
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
				<div key={size}>
					<EmailLogoSVG height={size * ratio} />
				</div>
			))}
		</div>
	))
