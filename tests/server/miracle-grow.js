var packageJs = `
Package.describe({
  name: 'okgrow:miraclegrow',
  version: '0.0.2',
  summary: "In one miraculous command Harvey's project was instantly 75% complete."
});

Package.onUse(function(api) {

  // ---- Dependencies ----

  api.versionsFrom('1.1.0.2');

  // Keep these sorted alphabetically
  var packages = [
    'accounts-password',
    'accounts-ui',
    'alanning:roles',
    'aldeed:autoform@5.3.2',
    'aldeed:collection2@2.3.3',
    'aldeed:simple-schema@1.3.3',
    'aldeed:template-extension',
    'audit-argument-checks@1.0.3',
    'browser-policy',
    'dburles:collection-helpers@1.0.3',
    'email',
    'force-ssl',
    'fortawesome:fontawesome',
    'iron:router@1.0.9',
    'joshowens:inflectionizer',
    'kadira:debug@2.0.1',
    'matb33:collection-hooks',
    'meteorhacks:kadira@2.23.2',
    'meteorhacks:zones@1.6.0',
    'mizzao:autocomplete@0.5.1',
    'momentjs:moment',
    'mquandalle:jade',
    'numeral:numeral',
    'okgrow:analytics@0.2.6',
    'okgrow:image-upload@0.7.5',
    'okgrow:iron-router-autoscroll@0.0.8',
    'pauldowman:dotenv@1.0.1',
    'reactive-dict',
    'reactive-var',
    'reywood:publish-composite@1.4.2',
    'sacha:spin',
    'sanjo:jasmine@0.14.0',
    'spacebars@1.0.6',
    'spiderable',
    'templating@1.1.1',
    'u2622:persistent-session@0.4.1',
    'underscorestring:underscore.string',
    'velocity:html-reporter@0.8.2',
    'wizonesolutions:canonical@0.0.5',
    'xolvio:cucumber@0.13.8',
    'zimme:active-route'
  ];

  api.imply(packages);
  api.use(packages);


  // ---- Files ----

  api.addFiles([
    'both/exports.js', // This must always be first
    'both/config/kadira.js',
    'both/router.js'
  ], ['server', 'client']);

  api.addFiles([
    'client/common-templates/loading.jade',
    'client/common-templates/must_be_signed_in.jade',
    'client/common-templates/not_found.jade',
    'client/polyfills/console.js'
  ], 'client');

  api.addFiles([
    'server/config/browserpolicy.js',
    'server/config/mail.js',
    'server/config/mandrill.js',
    'server/lib/permissions.js',
    'server/safety.js',
    'server/seeds.js'
  ], 'server');


  // ---- Exports ----

  api.export('MiracleGrow', ['server', 'client']);
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('okgrow:miraclegrow');
  // api.addFiles('miraclegrow-tests.js');
});
`;

var expectedModel = {
  "description": {
    "name": "okgrow:lint-test",
    "summary": "Description of package amazingness",
    "version": "0.1.0",
    "git": "https://github.com/okgrow/meteor-sandbox"
  }
};

var stringify = function (o) {
  return JSON.stringify(o, null, 2);
}
Tinytest.add("Example File 2 - Model Extraction", function (test) {
  var actualModel = new PackageModel(packageJs);
  test.equal(typeof actualModel, "object");
});

Tinytest.add("Example File 2 - Linting", function (test) {
  var packageModel = new PackageModel(packageJs);
  var lintErrors = PackageLinter.getLintErrors(packageModel);
  test.equal(stringify(lintErrors),  stringify([
  {
    "code": "2.1",
    "severity": 1,
    "offender": "alanning:roles",
    "error": "External dependencies should declare a version",
    "replacements": [
      "alanning:roles",
      "alanning:roles@1.2.13"
    ],
    "details": "should depend on 1.2.13",
    "detailsObj": {
      "name": "alanning:roles",
      "versionSpec": null,
      "versionNum": null,
      "versionIsExact": false
    }
  },
  {
    "code": "2.1",
    "severity": 1,
    "offender": "aldeed:template-extension",
    "error": "External dependencies should declare a version",
    "replacements": [
      "aldeed:template-extension",
      "aldeed:template-extension@3.4.3"
    ],
    "details": "should depend on 3.4.3",
    "detailsObj": {
      "name": "aldeed:template-extension",
      "versionSpec": null,
      "versionNum": null,
      "versionIsExact": false
    }
  },
  {
    "code": "2.1",
    "severity": 1,
    "offender": "fortawesome:fontawesome",
    "error": "External dependencies should declare a version",
    "replacements": [
      "fortawesome:fontawesome",
      "fortawesome:fontawesome@4.4.0"
    ],
    "details": "should depend on 4.4.0",
    "detailsObj": {
      "name": "fortawesome:fontawesome",
      "versionSpec": null,
      "versionNum": null,
      "versionIsExact": false
    }
  },
  {
    "code": "2.1",
    "severity": 1,
    "offender": "joshowens:inflectionizer",
    "error": "External dependencies should declare a version",
    "replacements": [
      "joshowens:inflectionizer",
      "joshowens:inflectionizer@0.3.0"
    ],
    "details": "should depend on 0.3.0",
    "detailsObj": {
      "name": "joshowens:inflectionizer",
      "versionSpec": null,
      "versionNum": null,
      "versionIsExact": false
    }
  },
  {
    "code": "2.1",
    "severity": 1,
    "offender": "matb33:collection-hooks",
    "error": "External dependencies should declare a version",
    "replacements": [
      "matb33:collection-hooks",
      "matb33:collection-hooks@0.8.0"
    ],
    "details": "should depend on 0.8.0",
    "detailsObj": {
      "name": "matb33:collection-hooks",
      "versionSpec": null,
      "versionNum": null,
      "versionIsExact": false
    }
  },
  {
    "code": "2.1",
    "severity": 1,
    "offender": "momentjs:moment",
    "error": "External dependencies should declare a version",
    "replacements": [
      "momentjs:moment",
      "momentjs:moment@2.10.6"
    ],
    "details": "should depend on 2.10.6",
    "detailsObj": {
      "name": "momentjs:moment",
      "versionSpec": null,
      "versionNum": null,
      "versionIsExact": false
    }
  },
  {
    "code": "2.1",
    "severity": 1,
    "offender": "mquandalle:jade",
    "error": "External dependencies should declare a version",
    "replacements": [
      "mquandalle:jade",
      "mquandalle:jade@0.4.3_1"
    ],
    "details": "should depend on 0.4.3_1",
    "detailsObj": {
      "name": "mquandalle:jade",
      "versionSpec": null,
      "versionNum": null,
      "versionIsExact": false
    }
  },
  {
    "code": "2.1",
    "severity": 1,
    "offender": "numeral:numeral",
    "error": "External dependencies should declare a version",
    "replacements": [
      "numeral:numeral",
      "numeral:numeral@1.5.3_1"
    ],
    "details": "should depend on 1.5.3_1",
    "detailsObj": {
      "name": "numeral:numeral",
      "versionSpec": null,
      "versionNum": null,
      "versionIsExact": false
    }
  },
  {
    "code": "2.1",
    "severity": 1,
    "offender": "sacha:spin",
    "error": "External dependencies should declare a version",
    "replacements": [
      "sacha:spin",
      "sacha:spin@2.3.1"
    ],
    "details": "should depend on 2.3.1",
    "detailsObj": {
      "name": "sacha:spin",
      "versionSpec": null,
      "versionNum": null,
      "versionIsExact": false
    }
  },
  {
    "code": "2.1",
    "severity": 1,
    "offender": "underscorestring:underscore.string",
    "error": "External dependencies should declare a version",
    "replacements": [
      "underscorestring:underscore.string",
      "underscorestring:underscore.string@3.2.2"
    ],
    "details": "should depend on 3.2.2",
    "detailsObj": {
      "name": "underscorestring:underscore.string",
      "versionSpec": null,
      "versionNum": null,
      "versionIsExact": false
    }
  },
  {
    "code": "2.1",
    "severity": 1,
    "offender": "zimme:active-route",
    "error": "External dependencies should declare a version",
    "replacements": [
      "zimme:active-route",
      "zimme:active-route@2.3.2"
    ],
    "details": "should depend on 2.3.2",
    "detailsObj": {
      "name": "zimme:active-route",
      "versionSpec": null,
      "versionNum": null,
      "versionIsExact": false
    }
  },
  {
    "code": "2.2",
    "severity": 1,
    "offender": "okgrow:iron-router-autoscroll",
    "error": "Dependencies should not refer to deprecated versions.",
    "replacements": [
      "okgrow:iron-router-autoscroll@0.0.8",
      "okgrow:router-autoscroll@0.0.11"
    ],
    "details": "okgrow:iron-router-autoscroll@0.0.8 => okgrow:router-autoscroll@0.0.11",
    "detailObj": {
      "oldName": "okgrow:iron-router-autoscroll",
      "oldVersion": "0.0.8",
      "newName": "okgrow:router-autoscroll",
      "newVersion": "0.0.11"
    }
  },
  {
    "code": "2.3",
    "severity": 2,
    "offender": "aldeed:autoform",
    "error": "Dependencies should not refer to versions outdated by more than a minor version.",
    "replacements": [
      "aldeed:autoform@5.3.2",
      "aldeed:autoform@5.5.1"
    ],
    "details": "5.3.2 -> 5.5.1",
    "detailObj": {
      "latest": "5.5.1",
      "current": "5.3.2",
      "diff": "minor"
    }
  },
  {
    "code": "2.3",
    "severity": 2,
    "offender": "aldeed:collection2",
    "error": "Dependencies should not refer to versions outdated by more than a minor version.",
    "replacements": [
      "aldeed:collection2@2.3.3",
      "aldeed:collection2@2.5.0"
    ],
    "details": "2.3.3 -> 2.5.0",
    "detailObj": {
      "latest": "2.5.0",
      "current": "2.3.3",
      "diff": "minor"
    }
  },
  {
    "code": "2.3",
    "severity": 2,
    "offender": "kadira:debug",
    "error": "Dependencies should not refer to versions outdated by more than a minor version.",
    "replacements": [
      "kadira:debug@2.0.1",
      "kadira:debug@2.2.3"
    ],
    "details": "2.0.1 -> 2.2.3",
    "detailObj": {
      "latest": "2.2.3",
      "current": "2.0.1",
      "diff": "minor"
    }
  },
  {
    "code": "2.3",
    "severity": 2,
    "offender": "okgrow:analytics",
    "error": "Dependencies should not refer to versions outdated by more than a minor version.",
    "replacements": [
      "okgrow:analytics@0.2.6",
      "okgrow:analytics@0.3.0"
    ],
    "details": "0.2.6 -> 0.3.0",
    "detailObj": {
      "latest": "0.3.0",
      "current": "0.2.6",
      "diff": "minor"
    }
  },
  {
    "code": "2.3",
    "severity": 2,
    "offender": "sanjo:jasmine",
    "error": "Dependencies should not refer to versions outdated by more than a minor version.",
    "replacements": [
      "sanjo:jasmine@0.14.0",
      "sanjo:jasmine@0.20.0"
    ],
    "details": "0.14.0 -> 0.20.0",
    "detailObj": {
      "latest": "0.20.0",
      "current": "0.14.0",
      "diff": "minor"
    }
  },
  {
    "code": "2.3",
    "severity": 2,
    "offender": "velocity:html-reporter",
    "error": "Dependencies should not refer to versions outdated by more than a minor version.",
    "replacements": [
      "velocity:html-reporter@0.8.2",
      "velocity:html-reporter@0.9.0"
    ],
    "details": "0.8.2 -> 0.9.0",
    "detailObj": {
      "latest": "0.9.0",
      "current": "0.8.2",
      "diff": "minor"
    }
  },
  {
    "code": "2.3",
    "severity": 2,
    "offender": "xolvio:cucumber",
    "error": "Dependencies should not refer to versions outdated by more than a minor version.",
    "replacements": [
      "xolvio:cucumber@0.13.8",
      "xolvio:cucumber@0.14.1"
    ],
    "details": "0.13.8 -> 0.14.1",
    "detailObj": {
      "latest": "0.14.1",
      "current": "0.13.8",
      "diff": "minor"
    }
  }
]));
});
