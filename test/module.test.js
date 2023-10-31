"use strict";

const chai = require("chai"),
	expect = chai.expect,
	AthenaExpressNG = require(".."),
	aws = require("aws-sdk");

chai.should();

describe("Negative Scenarios", () => {
	it("should not have config object undefined", function() {
		expect(function() {
			new AthenaExpressNG();
		}).to.throw(TypeError, "Config object not present in the constructor");
	});
	it("should not have aws object undefined", function() {
		expect(function() {
			const athenaExpress = new AthenaExpressNG({});
		}).to.throw(
			TypeError,
			"AWS object not present or incorrect in the constructor"
		);
	});
});
