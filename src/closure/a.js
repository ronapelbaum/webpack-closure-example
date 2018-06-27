goog.provide('my.a');

my.a = function () {
    console.log('my.a');
};

global.my = global.my || my;
