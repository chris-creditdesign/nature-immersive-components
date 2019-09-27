import React from "react"
import { storiesOf } from "@storybook/react"
import DefSVG from "./index"

storiesOf("DefSVG", module).add("default", () => (
	<div>
		<style
			dangerouslySetInnerHTML={{
				__html: "svg { border: 1px solid red;}",
			}}
		/>
		<DefSVG />
		<div>
			<svg width="200px" height="49px" viewBox="0 0 200 49">
				<use
					href="#nature-logo"
					xlinkHref="#nature-logo"
					role="presentation"
				/>
			</svg>
		</div>
		<div>
			<svg width="140" height="14" viewBox="0 0 140 14">
				<use
					href="#springernature-logo"
					xlinkHref="#springernature-logo"
				/>
			</svg>
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
			<svg width="30px" height="30px" viewBox="0 0 30 30">
				<use href="#pdf" xlinkHref="#pdf" />
			</svg>
		</div>
		<div>
			<svg width="30px" height="30px" viewBox="0 0 30 30">
				<use href="#twitter" xlinkHref="#twitter" />
			</svg>
		</div>
		<div>
			<svg width="30px" height="30px" viewBox="0 0 30 30">
				<use
					href="#text-section-twitter"
					xlinkHref="#text-section-twitter"
				/>
			</svg>
		</div>
		<div>
			<svg width="30px" height="30px" viewBox="0 0 30 30">
				<use href="#facebook" xlinkHref="#facebook" />
			</svg>
		</div>
		<div>
			<svg width="30px" height="30px" viewBox="0 0 30 30">
				<use
					href="#text-section-facebook"
					xlinkHref="#text-section-facebook"
				/>
			</svg>
		</div>
		<div>
			<svg width="30px" height="30px" viewBox="0 0 30 30">
				<use href="#email" xlinkHref="#email" />
			</svg>
		</div>
	</div>
))
