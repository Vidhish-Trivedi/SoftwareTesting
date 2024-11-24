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
class KMP {
  computeLPS = pattern => {
    if (stryMutAct_9fa48("412")) {
      {}
    } else {
      stryCov_9fa48("412");
      const lps = stryMutAct_9fa48("413") ? Array() : (stryCov_9fa48("413"), Array(pattern.length));
      lps[0] = 0;
      for (let i = 1; stryMutAct_9fa48("416") ? i >= pattern.length : stryMutAct_9fa48("415") ? i <= pattern.length : stryMutAct_9fa48("414") ? false : (stryCov_9fa48("414", "415", "416"), i < pattern.length); stryMutAct_9fa48("417") ? i-- : (stryCov_9fa48("417"), i++)) {
        if (stryMutAct_9fa48("418")) {
          {}
        } else {
          stryCov_9fa48("418");
          let matched = lps[stryMutAct_9fa48("419") ? i + 1 : (stryCov_9fa48("419"), i - 1)];
          while (stryMutAct_9fa48("421") ? matched > 0 || pattern[i] !== pattern[matched] : stryMutAct_9fa48("420") ? false : (stryCov_9fa48("420", "421"), (stryMutAct_9fa48("424") ? matched <= 0 : stryMutAct_9fa48("423") ? matched >= 0 : stryMutAct_9fa48("422") ? true : (stryCov_9fa48("422", "423", "424"), matched > 0)) && (stryMutAct_9fa48("426") ? pattern[i] === pattern[matched] : stryMutAct_9fa48("425") ? true : (stryCov_9fa48("425", "426"), pattern[i] !== pattern[matched])))) {
            if (stryMutAct_9fa48("427")) {
              {}
            } else {
              stryCov_9fa48("427");
              matched = lps[stryMutAct_9fa48("428") ? matched + 1 : (stryCov_9fa48("428"), matched - 1)];
            }
          }
          if (stryMutAct_9fa48("431") ? pattern[i] !== pattern[matched] : stryMutAct_9fa48("430") ? false : stryMutAct_9fa48("429") ? true : (stryCov_9fa48("429", "430", "431"), pattern[i] === pattern[matched])) {
            if (stryMutAct_9fa48("432")) {
              {}
            } else {
              stryCov_9fa48("432");
              stryMutAct_9fa48("433") ? matched-- : (stryCov_9fa48("433"), matched++);
            }
          }
          lps[i] = matched;
        }
      }
      return lps;
    }
  };
  KMPSearch = (text, pattern) => {
    if (stryMutAct_9fa48("434")) {
      {}
    } else {
      stryCov_9fa48("434");
      if (stryMutAct_9fa48("437") ? !pattern && !text : stryMutAct_9fa48("436") ? false : stryMutAct_9fa48("435") ? true : (stryCov_9fa48("435", "436", "437"), (stryMutAct_9fa48("438") ? pattern : (stryCov_9fa48("438"), !pattern)) || (stryMutAct_9fa48("439") ? text : (stryCov_9fa48("439"), !text)))) {
        if (stryMutAct_9fa48("440")) {
          {}
        } else {
          stryCov_9fa48("440");
          return stryMutAct_9fa48("441") ? ["Stryker was here"] : (stryCov_9fa48("441"), []); // no results
        }
      }

      // lps[i] = length of proper prefix of pattern[0]...pattern[i-1]
      //          which is also proper suffix of it
      const lps = this.computeLPS(pattern);
      const result = stryMutAct_9fa48("442") ? ["Stryker was here"] : (stryCov_9fa48("442"), []);
      let matched = 0;
      for (let i = 0; stryMutAct_9fa48("445") ? i >= text.length : stryMutAct_9fa48("444") ? i <= text.length : stryMutAct_9fa48("443") ? false : (stryCov_9fa48("443", "444", "445"), i < text.length); stryMutAct_9fa48("446") ? i-- : (stryCov_9fa48("446"), i++)) {
        if (stryMutAct_9fa48("447")) {
          {}
        } else {
          stryCov_9fa48("447");
          while (stryMutAct_9fa48("449") ? matched > 0 || text[i] !== pattern[matched] : stryMutAct_9fa48("448") ? false : (stryCov_9fa48("448", "449"), (stryMutAct_9fa48("452") ? matched <= 0 : stryMutAct_9fa48("451") ? matched >= 0 : stryMutAct_9fa48("450") ? true : (stryCov_9fa48("450", "451", "452"), matched > 0)) && (stryMutAct_9fa48("454") ? text[i] === pattern[matched] : stryMutAct_9fa48("453") ? true : (stryCov_9fa48("453", "454"), text[i] !== pattern[matched])))) {
            if (stryMutAct_9fa48("455")) {
              {}
            } else {
              stryCov_9fa48("455");
              matched = lps[stryMutAct_9fa48("456") ? matched + 1 : (stryCov_9fa48("456"), matched - 1)];
            }
          }
          if (stryMutAct_9fa48("459") ? text[i] !== pattern[matched] : stryMutAct_9fa48("458") ? false : stryMutAct_9fa48("457") ? true : (stryCov_9fa48("457", "458", "459"), text[i] === pattern[matched])) {
            if (stryMutAct_9fa48("460")) {
              {}
            } else {
              stryCov_9fa48("460");
              stryMutAct_9fa48("461") ? matched-- : (stryCov_9fa48("461"), matched++);
            }
          }
          if (stryMutAct_9fa48("464") ? matched !== pattern.length : stryMutAct_9fa48("463") ? false : stryMutAct_9fa48("462") ? true : (stryCov_9fa48("462", "463", "464"), matched === pattern.length)) {
            if (stryMutAct_9fa48("465")) {
              {}
            } else {
              stryCov_9fa48("465");
              result.push(stryMutAct_9fa48("466") ? i - pattern.length - 1 : (stryCov_9fa48("466"), (stryMutAct_9fa48("467") ? i + pattern.length : (stryCov_9fa48("467"), i - pattern.length)) + 1));
              matched = lps[stryMutAct_9fa48("468") ? matched + 1 : (stryCov_9fa48("468"), matched - 1)];
            }
          }
        }
      }
      return result;
    }
  };
}
export default KMP;