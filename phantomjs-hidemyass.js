var args = require('system').args;
var url = args[1];
var page = require('webpage').create();
page.open(url, function(status) {
  console.log(page.plainText);
  phantom.exit();
});
