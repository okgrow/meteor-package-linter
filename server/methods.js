//We do this server side since we haven't found a better sandboxed eval (sandbox, shovel, etc..)
Meteor.methods({
  "okgrow:package-linter#getPackageModel": function (packageJsCodeHopefully) {
    check(packageJsCodeHopefully, String);
    console.log("determining package model from:\n", packageJsCodeHopefully);
    return new PackageModel(packageJsCodeHopefully);
  },
  "okgrow:package-linter#getLintErrors": function (packageJsCodeHopefully) {
    check(packageJsCodeHopefully, String);

    var chain = Promise.resolve({}).then(function () {
        return new PackageModel(packageJsCodeHopefully)
      })
      .then(PackageLinter.getLintErrors)
      .catch(function (err) {
        throw new Error(err);
      });

    try{
      return Promise.await(chain);
    }catch(err) {
      console.log("err.toString: ", err.toString())
      throw new Meteor.Error(err, err.toString());
    }
  },
  "okgrow:package-linter#latestMeteorVersionOfPackage": function (name) {
    check(name, String);
    var latestVersionPromise = latestMeteorVersionOfPackage(name);
    return Promise.await(latestVersionPromise);
  },
  "okgrow:package-linter#latestNpmVersionOfPackage": function (name) {
    check(name, String);
    try{
      return latestNpmVersionOfPackage(name);
    } catch (ex) {
      console.log("Npm lookup err for: ", name);
      return undefined;
    }
  }


});
