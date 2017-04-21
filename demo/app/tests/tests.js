var NativescriptVirtualIbeacon = require("nativescript-nativescript-virtual-ibeacon").NativescriptVirtualIbeacon;
var nativescriptVirtualIbeacon = new NativescriptVirtualIbeacon();

// TODO replace 'functionname' with an acual function name of your plugin class and run with 'npm test <platform>'
describe("functionname", function() {
  it("exists", function() {
    expect(nativescriptVirtualIbeacon.functionname).toBeDefined();
  });

  it("returns a promise", function() {
    expect(nativescriptVirtualIbeacon.functionname()).toEqual(jasmine.any(Promise));
  });
});