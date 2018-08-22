var ProductionString = 'prod';
var DevelopmentString = 'dev';

function getEnvironment() {
  return nu.env;
}

var isProduction = function () {
  return getEnvironment() === ProductionString;
}

var isDebug = function() {
  return getEnvironment() === DevelopmentString;
}