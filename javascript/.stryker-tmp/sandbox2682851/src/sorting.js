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
class Sorting {
  bubbleSort(items) {
    if (stryMutAct_9fa48("613")) {
      {}
    } else {
      stryCov_9fa48("613");
      const length = items.length;
      let noSwaps;
      for (let i = length; stryMutAct_9fa48("616") ? i <= 0 : stryMutAct_9fa48("615") ? i >= 0 : stryMutAct_9fa48("614") ? false : (stryCov_9fa48("614", "615", "616"), i > 0); stryMutAct_9fa48("617") ? i++ : (stryCov_9fa48("617"), i--)) {
        if (stryMutAct_9fa48("618")) {
          {}
        } else {
          stryCov_9fa48("618");
          noSwaps = stryMutAct_9fa48("619") ? false : (stryCov_9fa48("619"), true);
          for (let j = 0; stryMutAct_9fa48("622") ? j >= i - 1 : stryMutAct_9fa48("621") ? j <= i - 1 : stryMutAct_9fa48("620") ? false : (stryCov_9fa48("620", "621", "622"), j < (stryMutAct_9fa48("623") ? i + 1 : (stryCov_9fa48("623"), i - 1))); stryMutAct_9fa48("624") ? j-- : (stryCov_9fa48("624"), j++)) {
            if (stryMutAct_9fa48("625")) {
              {}
            } else {
              stryCov_9fa48("625");
              if (stryMutAct_9fa48("629") ? items[j] <= items[j + 1] : stryMutAct_9fa48("628") ? items[j] >= items[j + 1] : stryMutAct_9fa48("627") ? false : stryMutAct_9fa48("626") ? true : (stryCov_9fa48("626", "627", "628", "629"), items[j] > items[stryMutAct_9fa48("630") ? j - 1 : (stryCov_9fa48("630"), j + 1)])) {
                if (stryMutAct_9fa48("631")) {
                  {}
                } else {
                  stryCov_9fa48("631");
                  [items[j], items[stryMutAct_9fa48("632") ? j - 1 : (stryCov_9fa48("632"), j + 1)]] = stryMutAct_9fa48("633") ? [] : (stryCov_9fa48("633"), [items[stryMutAct_9fa48("634") ? j - 1 : (stryCov_9fa48("634"), j + 1)], items[j]]);
                  noSwaps = stryMutAct_9fa48("635") ? true : (stryCov_9fa48("635"), false);
                }
              }
            }
          }
          if (stryMutAct_9fa48("637") ? false : stryMutAct_9fa48("636") ? true : (stryCov_9fa48("636", "637"), noSwaps)) {
            if (stryMutAct_9fa48("638")) {
              {}
            } else {
              stryCov_9fa48("638");
              break;
            }
          }
        }
      }
      return items;
    }
  }
  secondLargestElement = array => {
    if (stryMutAct_9fa48("639")) {
      {}
    } else {
      stryCov_9fa48("639");
      const largestElement = stryMutAct_9fa48("640") ? Math.min(...array) : (stryCov_9fa48("640"), Math.max(...array));
      let element = stryMutAct_9fa48("641") ? +Number.MAX_VALUE : (stryCov_9fa48("641"), -Number.MAX_VALUE);
      for (let i = 0; stryMutAct_9fa48("644") ? i >= array.length : stryMutAct_9fa48("643") ? i <= array.length : stryMutAct_9fa48("642") ? false : (stryCov_9fa48("642", "643", "644"), i < array.length); stryMutAct_9fa48("645") ? i-- : (stryCov_9fa48("645"), i++)) {
        if (stryMutAct_9fa48("646")) {
          {}
        } else {
          stryCov_9fa48("646");
          if (stryMutAct_9fa48("649") ? element < array[i] || array[i] !== largestElement : stryMutAct_9fa48("648") ? false : stryMutAct_9fa48("647") ? true : (stryCov_9fa48("647", "648", "649"), (stryMutAct_9fa48("652") ? element >= array[i] : stryMutAct_9fa48("651") ? element <= array[i] : stryMutAct_9fa48("650") ? true : (stryCov_9fa48("650", "651", "652"), element < array[i])) && (stryMutAct_9fa48("654") ? array[i] === largestElement : stryMutAct_9fa48("653") ? true : (stryCov_9fa48("653", "654"), array[i] !== largestElement)))) {
            if (stryMutAct_9fa48("655")) {
              {}
            } else {
              stryCov_9fa48("655");
              element = array[i];
            }
          }
        }
      }
      return element;
    }
  };
}
export default Sorting;