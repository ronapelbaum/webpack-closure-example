goog.provide('my.b');
goog.require('my.a');

my.b = function () {
    console.log('my.b');
    my.a();
};