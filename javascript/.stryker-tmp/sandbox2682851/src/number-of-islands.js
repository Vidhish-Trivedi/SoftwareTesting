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
class Islands {
  islands = matrixGrid => {
    if (stryMutAct_9fa48("469")) {
      {}
    } else {
      stryCov_9fa48("469");
      const matrix = matrixGrid;
      let counter = 0;
      const flood = (row, col) => {
        if (stryMutAct_9fa48("470")) {
          {}
        } else {
          stryCov_9fa48("470");
          if (stryMutAct_9fa48("473") ? row < 0 && col < 0 : stryMutAct_9fa48("472") ? false : stryMutAct_9fa48("471") ? true : (stryCov_9fa48("471", "472", "473"), (stryMutAct_9fa48("476") ? row >= 0 : stryMutAct_9fa48("475") ? row <= 0 : stryMutAct_9fa48("474") ? false : (stryCov_9fa48("474", "475", "476"), row < 0)) || (stryMutAct_9fa48("479") ? col >= 0 : stryMutAct_9fa48("478") ? col <= 0 : stryMutAct_9fa48("477") ? false : (stryCov_9fa48("477", "478", "479"), col < 0)))) return;
          if (stryMutAct_9fa48("482") ? row >= matrix.length && col >= matrix[row].length : stryMutAct_9fa48("481") ? false : stryMutAct_9fa48("480") ? true : (stryCov_9fa48("480", "481", "482"), (stryMutAct_9fa48("485") ? row < matrix.length : stryMutAct_9fa48("484") ? row > matrix.length : stryMutAct_9fa48("483") ? false : (stryCov_9fa48("483", "484", "485"), row >= matrix.length)) || (stryMutAct_9fa48("488") ? col < matrix[row].length : stryMutAct_9fa48("487") ? col > matrix[row].length : stryMutAct_9fa48("486") ? false : (stryCov_9fa48("486", "487", "488"), col >= matrix[row].length)))) return;
          const tile = matrix[row][col];
          if (stryMutAct_9fa48("491") ? tile === "1" : stryMutAct_9fa48("490") ? false : stryMutAct_9fa48("489") ? true : (stryCov_9fa48("489", "490", "491"), tile !== (stryMutAct_9fa48("492") ? "" : (stryCov_9fa48("492"), "1")))) return;
          matrix[row][col] = stryMutAct_9fa48("493") ? "" : (stryCov_9fa48("493"), "0");
          flood(stryMutAct_9fa48("494") ? row - 1 : (stryCov_9fa48("494"), row + 1), col);
          flood(stryMutAct_9fa48("495") ? row + 1 : (stryCov_9fa48("495"), row - 1), col);
          flood(row, stryMutAct_9fa48("496") ? col - 1 : (stryCov_9fa48("496"), col + 1));
          flood(row, stryMutAct_9fa48("497") ? col + 1 : (stryCov_9fa48("497"), col - 1));
        }
      };
      for (let row = 0; stryMutAct_9fa48("500") ? row >= matrix.length : stryMutAct_9fa48("499") ? row <= matrix.length : stryMutAct_9fa48("498") ? false : (stryCov_9fa48("498", "499", "500"), row < matrix.length); stryMutAct_9fa48("501") ? row -= 1 : (stryCov_9fa48("501"), row += 1)) {
        if (stryMutAct_9fa48("502")) {
          {}
        } else {
          stryCov_9fa48("502");
          for (let col = 0; stryMutAct_9fa48("505") ? col >= matrix[row].length : stryMutAct_9fa48("504") ? col <= matrix[row].length : stryMutAct_9fa48("503") ? false : (stryCov_9fa48("503", "504", "505"), col < matrix[row].length); stryMutAct_9fa48("506") ? col -= 1 : (stryCov_9fa48("506"), col += 1)) {
            if (stryMutAct_9fa48("507")) {
              {}
            } else {
              stryCov_9fa48("507");
              const current = matrix[row][col];
              if (stryMutAct_9fa48("510") ? current !== "1" : stryMutAct_9fa48("509") ? false : stryMutAct_9fa48("508") ? true : (stryCov_9fa48("508", "509", "510"), current === (stryMutAct_9fa48("511") ? "" : (stryCov_9fa48("511"), "1")))) {
                if (stryMutAct_9fa48("512")) {
                  {}
                } else {
                  stryCov_9fa48("512");
                  flood(row, col);
                  stryMutAct_9fa48("513") ? counter -= 1 : (stryCov_9fa48("513"), counter += 1);
                }
              }
            }
          }
        }
      }
      return counter;
    }
  };
}
export default Islands;