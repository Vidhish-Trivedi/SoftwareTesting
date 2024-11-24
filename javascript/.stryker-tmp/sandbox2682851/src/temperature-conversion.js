// @ts-nocheck
function stryNS_9fa48() {
  var g = typeof globalThis === 'object' && globalThis && globalThis.Math === Math && globalThis || new Function("return this")();
  var ns = g.__stryker__ || (g.__stryker__ = {});
  if (ns.activeMutant === undefined && g.process && g.process.env && g.process.env.__STRYKER_ACTIVE_MUTANT__) {
    ns.activeMutant = g.process.env.__STRYKER_ACTIVE_MUTANT__;
  }
  function retrieveNS() {
    return ns;
  }
  stryNS_9fa48 = retrieveNS;
  return retrieveNS();
}
stryNS_9fa48();
function stryCov_9fa48() {
  var ns = stryNS_9fa48();
  var cov = ns.mutantCoverage || (ns.mutantCoverage = {
    static: {},
    perTest: {}
  });
  function cover() {
    var c = cov.static;
    if (ns.currentTestId) {
      c = cov.perTest[ns.currentTestId] = cov.perTest[ns.currentTestId] || {};
    }
    var a = arguments;
    for (var i = 0; i < a.length; i++) {
      c[a[i]] = (c[a[i]] || 0) + 1;
    }
  }
  stryCov_9fa48 = cover;
  cover.apply(null, arguments);
}
function stryMutAct_9fa48(id) {
  var ns = stryNS_9fa48();
  function isActive(id) {
    if (ns.activeMutant === id) {
      if (ns.hitCount !== void 0 && ++ns.hitCount > ns.hitLimit) {
        throw new Error('Stryker: Hit count limit reached (' + ns.hitCount + ')');
      }
      return true;
    }
    return false;
  }
  stryMutAct_9fa48 = isActive;
  return isActive(id);
}
class TemperatureConversion {
  celsiusToFahrenheit = celsius => {
    if (stryMutAct_9fa48("656")) {
      {}
    } else {
      stryCov_9fa48("656");
      return Math.round(stryMutAct_9fa48("657") ? celsius * 9 / 5 - 32 : (stryCov_9fa48("657"), (stryMutAct_9fa48("658") ? celsius * 9 * 5 : (stryCov_9fa48("658"), (stryMutAct_9fa48("659") ? celsius / 9 : (stryCov_9fa48("659"), celsius * 9)) / 5)) + 32));
    }
  };
  celsiusToKelvin = celsius => {
    if (stryMutAct_9fa48("660")) {
      {}
    } else {
      stryCov_9fa48("660");
      return Math.round(stryMutAct_9fa48("661") ? celsius - 273.15 : (stryCov_9fa48("661"), celsius + 273.15));
    }
  };
  celsiusToRankine = celsius => {
    if (stryMutAct_9fa48("662")) {
      {}
    } else {
      stryCov_9fa48("662");
      return Math.round(stryMutAct_9fa48("663") ? celsius * 9 / 5 - 491.67 : (stryCov_9fa48("663"), (stryMutAct_9fa48("664") ? celsius * 9 * 5 : (stryCov_9fa48("664"), (stryMutAct_9fa48("665") ? celsius / 9 : (stryCov_9fa48("665"), celsius * 9)) / 5)) + 491.67));
    }
  };
  fahrenheitToCelsius = fahrenheit => {
    if (stryMutAct_9fa48("666")) {
      {}
    } else {
      stryCov_9fa48("666");
      return Math.round(stryMutAct_9fa48("667") ? (fahrenheit - 32) * 5 * 9 : (stryCov_9fa48("667"), (stryMutAct_9fa48("668") ? (fahrenheit - 32) / 5 : (stryCov_9fa48("668"), (stryMutAct_9fa48("669") ? fahrenheit + 32 : (stryCov_9fa48("669"), fahrenheit - 32)) * 5)) / 9));
    }
  };
  fahrenheitToKelvin = fahrenheit => {
    if (stryMutAct_9fa48("670")) {
      {}
    } else {
      stryCov_9fa48("670");
      return Math.round(stryMutAct_9fa48("671") ? (fahrenheit - 32) * 5 / 9 - 273.15 : (stryCov_9fa48("671"), (stryMutAct_9fa48("672") ? (fahrenheit - 32) * 5 * 9 : (stryCov_9fa48("672"), (stryMutAct_9fa48("673") ? (fahrenheit - 32) / 5 : (stryCov_9fa48("673"), (stryMutAct_9fa48("674") ? fahrenheit + 32 : (stryCov_9fa48("674"), fahrenheit - 32)) * 5)) / 9)) + 273.15));
    }
  };
  kelvinToCelsius = kelvin => {
    if (stryMutAct_9fa48("675")) {
      {}
    } else {
      stryCov_9fa48("675");
      return Math.round(stryMutAct_9fa48("676") ? kelvin + 273.15 : (stryCov_9fa48("676"), kelvin - 273.15));
    }
  };
  kelvinToFahrenheit = kelvin => {
    if (stryMutAct_9fa48("677")) {
      {}
    } else {
      stryCov_9fa48("677");
      return Math.round(stryMutAct_9fa48("678") ? (kelvin - 273.15) * 9 / 5 - 32 : (stryCov_9fa48("678"), (stryMutAct_9fa48("679") ? (kelvin - 273.15) * 9 * 5 : (stryCov_9fa48("679"), (stryMutAct_9fa48("680") ? (kelvin - 273.15) / 9 : (stryCov_9fa48("680"), (stryMutAct_9fa48("681") ? kelvin + 273.15 : (stryCov_9fa48("681"), kelvin - 273.15)) * 9)) / 5)) + 32));
    }
  };
}
export default TemperatureConversion;