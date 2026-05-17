import React from "react";
import {
	EmailLogoSVG as EmailLogoSVGComponent,
	FacebookLogoSVG as FacebookLogoSVGComponent,
	NatureBriefingLogoSVG as NatureBriefingLogoSVGComponent,
	NatureLogoSVG as NatureLogoSVGComponent,
	PdfLogoSVG as PdfLogoSVGComponent,
	SpringerNatureLogoSVG as SpringerNatureLogoSVGComponent,
	TwitterLogoSVG as TwitterLogoSVGComponent,
	VeggieBurgerLogoSVG as VeggieBurgerLogoSVGComponent,
} from "./index";

const sizes = [1, 2, 3, 4, 5];
const ratio = 1.5;

export default {
	title: "LogosSVG",
	component: NatureLogoSVGComponent,
};

export const NatureLogoSVG = () => (
	<div>
		<style
			dangerouslySetInnerHTML={{
				__html: "svg { border: 1px solid red; fill: #ffffff; }",
			}}
		/>
		{sizes.map((size) => (
			<div key={size}>
				<NatureLogoSVGComponent height={size * ratio} />
			</div>
		))}
	</div>
);

export const PdfLogoSVG = () => (
	<div>
		<style
			dangerouslySetInnerHTML={{
				__html: "svg { border: 1px solid red; fill: #ffffff; }",
			}}
		/>
		{sizes.map((size) => (
			<div key={size}>
				<PdfLogoSVGComponent height={size * ratio} />
			</div>
		))}
	</div>
);

export const FacebookLogoSVG = () => (
	<div>
		<style
			dangerouslySetInnerHTML={{
				__html: "svg { border: 1px solid red; fill: #ffffff; }",
			}}
		/>
		{sizes.map((size) => (
			<div key={size}>
				<FacebookLogoSVGComponent height={size * ratio} />
			</div>
		))}
	</div>
);

export const TwitterLogoSVG = () => (
	<div>
		<style
			dangerouslySetInnerHTML={{
				__html: "svg { border: 1px solid red; fill: #ffffff; }",
			}}
		/>
		{sizes.map((size) => (
			<div key={size}>
				<TwitterLogoSVGComponent height={size * ratio} />
			</div>
		))}
	</div>
);

export const EmailLogoSVG = () => (
	<div>
		<style
			dangerouslySetInnerHTML={{
				__html: "svg { border: 1px solid red; fill: #ffffff; }",
			}}
		/>
		{sizes.map((size) => (
			<div key={size}>
				<EmailLogoSVGComponent height={size * ratio} />
			</div>
		))}
	</div>
);

export const SpringerNatureLogoSVG = () => (
	<div>
		<style
			dangerouslySetInnerHTML={{
				__html: "svg { border: 1px solid red; fill: #ffffff; }",
			}}
		/>
		{sizes.map((size) => (
			<div key={size}>
				<SpringerNatureLogoSVGComponent height={size * ratio} />
			</div>
		))}
	</div>
);

export const NatureBriefingLogoSVG = () => (
	<div>
		<style
			dangerouslySetInnerHTML={{
				__html: "svg { border: 1px solid red; fill: #ffffff; }",
			}}
		/>
		{sizes.map((size) => (
			<div key={size}>
				<NatureBriefingLogoSVGComponent height={size * ratio} />
			</div>
		))}
	</div>
);

export const VeggieBurgerLogoSVGOpen = () => (
	<div>
		<style
			dangerouslySetInnerHTML={{
				__html: "svg { border: 1px solid red; fill: #ffffff; }",
			}}
		/>
		{sizes.map((size) => (
			<div key={size}>
				<VeggieBurgerLogoSVGComponent height={size * ratio} />
			</div>
		))}
	</div>
);
