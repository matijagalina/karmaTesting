var ProductionString = 'prod';
var DevelopmentString = 'dev';
var nu = {
    env: 'dev'
}

function getEnvironment() {
  return nu.env;
}

var isProduction = function () {
  return getEnvironment() === ProductionString;
}

var isDebug = function() {
  return getEnvironment() === DevelopmentString;
}