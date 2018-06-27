goog.require('my.b');

(function () {
    console.log('app:closure');
    my.b();

    // see the "require problem"
    // my.a()

    // see the "global problem"
    // console.log('my', my);
    // console.log('global.my', global.my);
})();