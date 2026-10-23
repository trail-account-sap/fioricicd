/* global QUnit */
QUnit.config.autostart = false;

sap.ui.require([
    "zfioritestforctms/test/unit/AllTests"
], function () {
    "use strict";

    QUnit.start();
});