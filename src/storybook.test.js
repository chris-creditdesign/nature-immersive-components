import React from "react"
import { renderToStaticMarkup } from "react-dom/server"
import * as components from "./index"

describe("component exports", () => {
	it("exports core components", () => {
		expect(components.Heading).toBeDefined()
		expect(components.LayoutCenter).toBeDefined()
		expect(components.YouTube).toBeDefined()
	})

	it("renders Heading to static markup", () => {
		const html = renderToStaticMarkup(
			<components.Heading
				headline="A modernized heading"
				author="Author Name"
				publishedAt={1704067200}
			/>
		)

		expect(html).toContain("A modernized heading")
		expect(html).toContain("Author Name")
		expect(html).toContain("2024")
	})
})
