Tinytest.addAsync("Gets latest version from atmosphere",  (test, done) => {
  PackageLinter.latestMeteorVersionOfPackage("urigo:angular")
    //deprecated package - should not be changing much anymore
    .then((ver) => test.equal(ver, "1.0.1"))
    .then(done, done);
});
