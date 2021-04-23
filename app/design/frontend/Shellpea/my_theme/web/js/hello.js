define([
], function () {
    'use strict';

    return function (config, element) {
        console.log(config.a);
        console.log(element);
        console.log("hello world");
    }
});