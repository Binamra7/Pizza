//test whether the image and text render correctly

import React from "react";
import ReactDOM from "react-dom";
import About from "./About";

describe("About", () => {
	it("renders the image and text", () => {
		const wrapper = ReactDOM.render(<About />, document.createElement("div"));
		expect(wrapper.find("img").length).toBe(1);
		expect(wrapper.find("p").length).toBe(1);
	});
});
