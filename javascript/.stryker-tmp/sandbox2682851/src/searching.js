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
class Searching {
  binarySearch(arr, x, low = 0, high = stryMutAct_9fa48("514") ? arr.length + 1 : (stryCov_9fa48("514"), arr.length - 1)) {
    if (stryMutAct_9fa48("515")) {
      {}
    } else {
      stryCov_9fa48("515");
      while (stryMutAct_9fa48("518") ? high < low : stryMutAct_9fa48("517") ? high > low : stryMutAct_9fa48("516") ? false : (stryCov_9fa48("516", "517", "518"), high >= low)) {
        if (stryMutAct_9fa48("519")) {
          {}
        } else {
          stryCov_9fa48("519");
          const mid = Math.floor(stryMutAct_9fa48("520") ? low - (high - low) / 2 : (stryCov_9fa48("520"), low + (stryMutAct_9fa48("521") ? (high - low) * 2 : (stryCov_9fa48("521"), (stryMutAct_9fa48("522") ? high + low : (stryCov_9fa48("522"), high - low)) / 2))));
          if (stryMutAct_9fa48("525") ? arr[mid] !== x : stryMutAct_9fa48("524") ? false : stryMutAct_9fa48("523") ? true : (stryCov_9fa48("523", "524", "525"), arr[mid] === x)) {
            if (stryMutAct_9fa48("526")) {
              {}
            } else {
              stryCov_9fa48("526");
              return mid;
            }
          }
          if (stryMutAct_9fa48("530") ? x >= arr[mid] : stryMutAct_9fa48("529") ? x <= arr[mid] : stryMutAct_9fa48("528") ? false : stryMutAct_9fa48("527") ? true : (stryCov_9fa48("527", "528", "529", "530"), x < arr[mid])) {
            if (stryMutAct_9fa48("531")) {
              {}
            } else {
              stryCov_9fa48("531");
              high = stryMutAct_9fa48("532") ? mid + 1 : (stryCov_9fa48("532"), mid - 1);
            }
          } else {
            if (stryMutAct_9fa48("533")) {
              {}
            } else {
              stryCov_9fa48("533");
              low = stryMutAct_9fa48("534") ? mid - 1 : (stryCov_9fa48("534"), mid + 1);
            }
          }
        }
      }
      return stryMutAct_9fa48("535") ? +1 : (stryCov_9fa48("535"), -1);
    }
  }
  linearSearch(theArray, key) {
    if (stryMutAct_9fa48("536")) {
      {}
    } else {
      stryCov_9fa48("536");
      for (let n = 0; stryMutAct_9fa48("539") ? n >= theArray.length : stryMutAct_9fa48("538") ? n <= theArray.length : stryMutAct_9fa48("537") ? false : (stryCov_9fa48("537", "538", "539"), n < theArray.length); stryMutAct_9fa48("540") ? n-- : (stryCov_9fa48("540"), n++)) {
        if (stryMutAct_9fa48("541")) {
          {}
        } else {
          stryCov_9fa48("541");
          if (stryMutAct_9fa48("544") ? theArray[n] !== key : stryMutAct_9fa48("543") ? false : stryMutAct_9fa48("542") ? true : (stryCov_9fa48("542", "543", "544"), theArray[n] === key)) {
            if (stryMutAct_9fa48("545")) {
              {}
            } else {
              stryCov_9fa48("545");
              return n;
            }
          }
        }
      }
      return stryMutAct_9fa48("546") ? +1 : (stryCov_9fa48("546"), -1);
    }
  }
}
export default Searching;