"use strict";

const expect = require("chai").expect,
	athenaExpress = require("..");

describe("Repository Structure", function() {
	it("should export AthenaExpressNG constructor directly from package", function() {
		expect(athenaExpress).to.be.a("function");
		expect(athenaExpress).to.equal(athenaExpress.AthenaExpressNG);
	});

	it("should export AthenaExpressNG constructor", function() {
		expect(athenaExpress.AthenaExpressNG).to.be.a("function");
	});
});
