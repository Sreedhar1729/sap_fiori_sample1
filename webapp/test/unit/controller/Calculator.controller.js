/*global QUnit*/

sap.ui.define([
	"comsap/caluclator/controller/Calculator.controller"
], function (Controller) {
	"use strict";

	QUnit.module("Calculator Controller");

	QUnit.test("I should test the Calculator controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
