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
const catalanNumbers = n => {
  if (stryMutAct_9fa48("2")) {
    {}
  } else {
    stryCov_9fa48("2");
    if (stryMutAct_9fa48("5") ? n !== 0 : stryMutAct_9fa48("4") ? false : stryMutAct_9fa48("3") ? true : (stryCov_9fa48("3", "4", "5"), n === 0)) {
      if (stryMutAct_9fa48("6")) {
        {}
      } else {
        stryCov_9fa48("6");
        return stryMutAct_9fa48("7") ? [] : (stryCov_9fa48("7"), [1]);
      }
    }
    const catList = stryMutAct_9fa48("8") ? [] : (stryCov_9fa48("8"), [1, 1]);
    for (let i = 2; stryMutAct_9fa48("11") ? i > n : stryMutAct_9fa48("10") ? i < n : stryMutAct_9fa48("9") ? false : (stryCov_9fa48("9", "10", "11"), i <= n); stryMutAct_9fa48("12") ? i-- : (stryCov_9fa48("12"), i++)) {
      if (stryMutAct_9fa48("13")) {
        {}
      } else {
        stryCov_9fa48("13");
        let newNumber = 0;
        for (let j = 0; stryMutAct_9fa48("16") ? j >= i : stryMutAct_9fa48("15") ? j <= i : stryMutAct_9fa48("14") ? false : (stryCov_9fa48("14", "15", "16"), j < i); stryMutAct_9fa48("17") ? j-- : (stryCov_9fa48("17"), j++)) {
          if (stryMutAct_9fa48("18")) {
            {}
          } else {
            stryCov_9fa48("18");
            stryMutAct_9fa48("19") ? newNumber -= catList[j] * catList[i - j - 1] : (stryCov_9fa48("19"), newNumber += stryMutAct_9fa48("20") ? catList[j] / catList[i - j - 1] : (stryCov_9fa48("20"), catList[j] * catList[stryMutAct_9fa48("21") ? i - j + 1 : (stryCov_9fa48("21"), (stryMutAct_9fa48("22") ? i + j : (stryCov_9fa48("22"), i - j)) - 1)]));
          }
        }
        catList.push(newNumber);
      }
    }
    return catList;
  }
};
export default catalanNumbers;