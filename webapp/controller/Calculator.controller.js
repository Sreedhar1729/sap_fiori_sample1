sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
    
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller,JSONModel) {
        "use strict";

        return Controller.extend("com.sap.caluclator.controller.Calculator", {
            onInit: function () {

            },
            onCalculate:function(oEvent){
                 debugger;
                 const oView = this.getView();
               const ifirst = parseInt(oView.byId("_IDGenInput1").getValue());
                const isecond = parseInt(oView.byId("_IDGenInput2").getValue());

                const iResult = ifirst + isecond;
                alert(iResult);

            },
            onInitiateJsonModel: function () {
                const oPerson = {
                    details: {
                        name: "Rohan",
                        age: 50
                    },
                    salDetails: {
                        ctc: "1LPA"
                    }
                }

                const oPerson1 = {
                    details: {
                        name: "John",
                        age: 50
                    },
                    salDetails: {
                        ctc: "10LPA"
                    }
                }
                debugger;
                const oJsonModel = new JSONModel(oPerson);
                const oLocalModel = new JSONModel(oPerson1);
                this.getView().setModel(oJsonModel);
                this.getView().setModel(oLocalModel, "LocalModel");
                console.log(oJsonModel);
                
            }
        });
    });
