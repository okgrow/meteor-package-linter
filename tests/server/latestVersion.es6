Tinytest.addAsync("Gets latest version from atmosphere",  (test, done) => {
  PackageLinter.latestMeteorVersionOfPackage("urigo:angular")
    //deprecated package - should not be changing much anymore
    .then((ver) => test.equal(ver, "0.10.2"))
    .then(done, done);
});
