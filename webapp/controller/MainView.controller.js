sap.ui.define([
	"sap/ui/core/mvc/Controller"
],
	/**
	 * @param {typeof sap.ui.core.mvc.Controller} Controller
	 */
	function (Controller) {
		"use strict";

		return Controller.extend("tr.trmonitor.controller.MainView", {
			onInit: function () {
				
			},
			onBeforeExport: function (oEvt) {
				var mExcelSettings = oEvt.getParameter("exportSettings");
				// GW export
				if (mExcelSettings.url) {
					return;
				}
				// For UI5 Client Export --> The settings contains sap.ui.export.SpreadSheet relevant settings that be used to modify the output of excel
	
				// Disable Worker as Mockserver is used in Demokit sample --> Do not use this for real applications!
				mExcelSettings.worker = false;
			}
		});
	});
