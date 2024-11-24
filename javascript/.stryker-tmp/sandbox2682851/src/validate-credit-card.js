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
const luhnValidation = creditCardNumber => {
  if (stryMutAct_9fa48("682")) {
    {}
  } else {
    stryCov_9fa48("682");
    let validationSum = 0;
    creditCardNumber.split(stryMutAct_9fa48("683") ? "Stryker was here!" : (stryCov_9fa48("683"), '')).forEach((digit, index) => {
      if (stryMutAct_9fa48("684")) {
        {}
      } else {
        stryCov_9fa48("684");
        let currentDigit = parseInt(digit);
        if (stryMutAct_9fa48("687") ? index % 2 !== 0 : stryMutAct_9fa48("686") ? false : stryMutAct_9fa48("685") ? true : (stryCov_9fa48("685", "686", "687"), (stryMutAct_9fa48("688") ? index * 2 : (stryCov_9fa48("688"), index % 2)) === 0)) {
          if (stryMutAct_9fa48("689")) {
            {}
          } else {
            stryCov_9fa48("689");
            stryMutAct_9fa48("690") ? currentDigit /= 2 : (stryCov_9fa48("690"), currentDigit *= 2);
            if (stryMutAct_9fa48("694") ? currentDigit <= 9 : stryMutAct_9fa48("693") ? currentDigit >= 9 : stryMutAct_9fa48("692") ? false : stryMutAct_9fa48("691") ? true : (stryCov_9fa48("691", "692", "693", "694"), currentDigit > 9)) {
              if (stryMutAct_9fa48("695")) {
                {}
              } else {
                stryCov_9fa48("695");
                stryMutAct_9fa48("696") ? currentDigit *= 10 : (stryCov_9fa48("696"), currentDigit %= 10);
                stryMutAct_9fa48("697") ? currentDigit -= 1 : (stryCov_9fa48("697"), currentDigit += 1);
              }
            }
          }
        }
        stryMutAct_9fa48("698") ? validationSum -= currentDigit : (stryCov_9fa48("698"), validationSum += currentDigit);
      }
    });
    return stryMutAct_9fa48("701") ? validationSum % 10 !== 0 : stryMutAct_9fa48("700") ? false : stryMutAct_9fa48("699") ? true : (stryCov_9fa48("699", "700", "701"), (stryMutAct_9fa48("702") ? validationSum * 10 : (stryCov_9fa48("702"), validationSum % 10)) === 0);
  }
};
const validateCreditCard = creditCardString => {
  if (stryMutAct_9fa48("703")) {
    {}
  } else {
    stryCov_9fa48("703");
    const validStartSubString = stryMutAct_9fa48("704") ? [] : (stryCov_9fa48("704"), [stryMutAct_9fa48("705") ? "" : (stryCov_9fa48("705"), '4'), stryMutAct_9fa48("706") ? "" : (stryCov_9fa48("706"), '5'), stryMutAct_9fa48("707") ? "" : (stryCov_9fa48("707"), '6'), stryMutAct_9fa48("708") ? "" : (stryCov_9fa48("708"), '37'), stryMutAct_9fa48("709") ? "" : (stryCov_9fa48("709"), '34'), stryMutAct_9fa48("710") ? "" : (stryCov_9fa48("710"), '35')]);
    if (stryMutAct_9fa48("713") ? typeof creditCardString === 'string' : stryMutAct_9fa48("712") ? false : stryMutAct_9fa48("711") ? true : (stryCov_9fa48("711", "712", "713"), typeof creditCardString !== (stryMutAct_9fa48("714") ? "" : (stryCov_9fa48("714"), 'string')))) {
      if (stryMutAct_9fa48("715")) {
        {}
      } else {
        stryCov_9fa48("715");
        throw new TypeError(stryMutAct_9fa48("716") ? "" : (stryCov_9fa48("716"), 'The given value is not a string'));
      }
    }
    const errorMessage = stryMutAct_9fa48("717") ? `` : (stryCov_9fa48("717"), `${creditCardString} is an invalid credit card number because `);
    if (stryMutAct_9fa48("719") ? false : stryMutAct_9fa48("718") ? true : (stryCov_9fa48("718", "719"), isNaN(creditCardString))) {
      if (stryMutAct_9fa48("720")) {
        {}
      } else {
        stryCov_9fa48("720");
        throw new TypeError(errorMessage + (stryMutAct_9fa48("721") ? "" : (stryCov_9fa48("721"), 'it has nonnumerical characters.')));
      }
    }
    const creditCardStringLength = creditCardString.length;
    if (stryMutAct_9fa48("724") ? false : stryMutAct_9fa48("723") ? true : stryMutAct_9fa48("722") ? creditCardStringLength >= 13 && creditCardStringLength <= 16 : (stryCov_9fa48("722", "723", "724"), !(stryMutAct_9fa48("727") ? creditCardStringLength >= 13 || creditCardStringLength <= 16 : stryMutAct_9fa48("726") ? false : stryMutAct_9fa48("725") ? true : (stryCov_9fa48("725", "726", "727"), (stryMutAct_9fa48("730") ? creditCardStringLength < 13 : stryMutAct_9fa48("729") ? creditCardStringLength > 13 : stryMutAct_9fa48("728") ? true : (stryCov_9fa48("728", "729", "730"), creditCardStringLength >= 13)) && (stryMutAct_9fa48("733") ? creditCardStringLength > 16 : stryMutAct_9fa48("732") ? creditCardStringLength < 16 : stryMutAct_9fa48("731") ? true : (stryCov_9fa48("731", "732", "733"), creditCardStringLength <= 16)))))) {
      if (stryMutAct_9fa48("734")) {
        {}
      } else {
        stryCov_9fa48("734");
        throw new Error(errorMessage + (stryMutAct_9fa48("735") ? "" : (stryCov_9fa48("735"), 'of its length.')));
      }
    }
    if (stryMutAct_9fa48("738") ? false : stryMutAct_9fa48("737") ? true : stryMutAct_9fa48("736") ? validStartSubString.some(subString => creditCardString.startsWith(subString)) : (stryCov_9fa48("736", "737", "738"), !(stryMutAct_9fa48("739") ? validStartSubString.every(subString => creditCardString.startsWith(subString)) : (stryCov_9fa48("739"), validStartSubString.some(stryMutAct_9fa48("740") ? () => undefined : (stryCov_9fa48("740"), subString => stryMutAct_9fa48("741") ? creditCardString.endsWith(subString) : (stryCov_9fa48("741"), creditCardString.startsWith(subString)))))))) {
      if (stryMutAct_9fa48("742")) {
        {}
      } else {
        stryCov_9fa48("742");
        throw new Error(errorMessage + (stryMutAct_9fa48("743") ? "" : (stryCov_9fa48("743"), 'of its first two digits.')));
      }
    }
    if (stryMutAct_9fa48("746") ? false : stryMutAct_9fa48("745") ? true : stryMutAct_9fa48("744") ? luhnValidation(creditCardString) : (stryCov_9fa48("744", "745", "746"), !luhnValidation(creditCardString))) {
      if (stryMutAct_9fa48("747")) {
        {}
      } else {
        stryCov_9fa48("747");
        throw new Error(errorMessage + (stryMutAct_9fa48("748") ? "" : (stryCov_9fa48("748"), 'it fails the Luhn check.')));
      }
    }
    return stryMutAct_9fa48("749") ? false : (stryCov_9fa48("749"), true);
  }
};
export { validateCreditCard };