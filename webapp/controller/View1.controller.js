sap.ui.define([
    "sap/ui/core/mvc/Controller"
], (Controller) => {
    "use strict";

    return Controller.extend("zfioritestforctms.controller.View1", {
        onInit() {
        },
        onGreet(){
            sap.m.MessageToast.show("Hello, Welcome to the Application");
        }
    });
});