var DDPClient = Npm.require('ddp');

latestNpmVersionOfPackage = Meteor.wrapAsync(Npm.require("latest-version"));

latestMeteorVersionOfPackage = function (name) {
  var ddpclient = new DDPClient({url: 'wss://atmospherejs.com/websocket'});
  var connected = new Promise(function(resolve) {
    ddpclient.connect(function(error) {
      if (error) throw error;
      resolve(ddpclient);
    });
  });

  var result = connected
    .then(function (ddpclient) {
      return new Promise(function (resolve, reject) {
        ddpclient.subscribe('package', [name], function () {
          console.log("package query ready for " + name + ".")
          var allPackages = ddpclient.collections.packages;
          if( ! allPackages ) {
            reject(name)
          } else {
            var thePackage = _.values(ddpclient.collections.packages).filter(function (p){
              return p.name === name;
            })[0];
            resolve(thePackage && thePackage.latestVersion.version);
          }
        })
      })
    })
    .then(function(version){
      ddpclient.close();
      return version;
    })
    .catch(function (err) {
      console.log("Package Lookup Error:", err);
    });

  return result;
}
