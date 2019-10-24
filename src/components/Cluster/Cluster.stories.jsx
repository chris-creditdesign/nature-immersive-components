import React from "react"
import { storiesOf } from "@storybook/react"

import Cluster from "./index"
import Box from "../Box/index"
import {
	NatureLogoSVG,
	EmailLogoSVG,
	FacebookLogoSVG,
	TwitterLogoSVG,
} from "../LogosSVG/index"

storiesOf("Layout/Cluster", module)
	.add("default", () => (
		<Cluster className="box">
			<div className="content horizontal" />
			<Cluster justifyContent="flex-start">
				<div className="content horizontal" />
				<div className="content horizontal" />
				<div className="content horizontal" />
			</Cluster>
		</Cluster>
	))
	.add("in a box", () => (
		<Box className="box">
			<Cluster>
				<div className="content horizontal" />
				<Cluster justifyContent="flex-start">
					<div className="content horizontal" />
					<div className="content horizontal" />
					<div className="content horizontal" />
				</Cluster>
			</Cluster>
		</Box>
	))
	.add("with logo in a box", () => (
		<Box className="box">
			<Cluster>
				<NatureLogoSVG height={2} />
				<Cluster justifyContent="flex-start">
					<div className="content horizontal" />
					<div className="content horizontal" />
					<div className="content horizontal" />
				</Cluster>
			</Cluster>
		</Box>
	))
	.add("with links in a box", () => (
		<Box className="box">
			<Cluster>
				<NatureLogoSVG height={2} />
				<Cluster
					justifyContent="flex-start"
					space="var(--s1)"
				>
					<p>Home page</p>
					<p>About</p>
					<p>Blog</p>
					<p>Index</p>
				</Cluster>
			</Cluster>
		</Box>
	))
	.add("with social icons in a box", () => (
		<Box className="box">
			<Cluster justifyContent="flex-end">
				<div className="logo">
					<NatureLogoSVG height={2} />
				</div>
				<Cluster>
					<p>Home page</p>
					<p>About</p>
					<p>Blog</p>
					<p>Index</p>
				</Cluster>
				<Cluster>
					<EmailLogoSVG height={2} />
					<FacebookLogoSVG height={2} />
					<TwitterLogoSVG height={2} />
				</Cluster>
			</Cluster>
		</Box>
	))
