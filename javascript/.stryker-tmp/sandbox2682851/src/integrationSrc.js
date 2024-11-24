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
function add(a, b) {
  if (stryMutAct_9fa48("350")) {
    {}
  } else {
    stryCov_9fa48("350");
    return stryMutAct_9fa48("351") ? a - b : (stryCov_9fa48("351"), a + b);
  }
}
function subtract(a, b) {
  if (stryMutAct_9fa48("352")) {
    {}
  } else {
    stryCov_9fa48("352");
    return stryMutAct_9fa48("353") ? a + b : (stryCov_9fa48("353"), a - b);
  }
}
function multiply(a, b) {
  if (stryMutAct_9fa48("354")) {
    {}
  } else {
    stryCov_9fa48("354");
    return stryMutAct_9fa48("355") ? a / b : (stryCov_9fa48("355"), a * b);
  }
}
function divide(a, b) {
  if (stryMutAct_9fa48("356")) {
    {}
  } else {
    stryCov_9fa48("356");
    if (stryMutAct_9fa48("359") ? b !== 0 : stryMutAct_9fa48("358") ? false : stryMutAct_9fa48("357") ? true : (stryCov_9fa48("357", "358", "359"), b === 0)) {
      if (stryMutAct_9fa48("360")) {
        {}
      } else {
        stryCov_9fa48("360");
        throw new Error(stryMutAct_9fa48("361") ? "" : (stryCov_9fa48("361"), "Division by zero is not allowed."));
      }
    }
    return stryMutAct_9fa48("362") ? a * b : (stryCov_9fa48("362"), a / b);
  }
}
function complexMathCalculation(a, b, c, d) {
  if (stryMutAct_9fa48("363")) {
    {}
  } else {
    stryCov_9fa48("363");
    const sum = add(a, b);
    const difference = subtract(c, d);
    const product = multiply(sum, difference);
    const result = divide(product, 2);
    let finalResult = result;
    for (let i = 0; stryMutAct_9fa48("366") ? i >= 5 : stryMutAct_9fa48("365") ? i <= 5 : stryMutAct_9fa48("364") ? false : (stryCov_9fa48("364", "365", "366"), i < 5); stryMutAct_9fa48("367") ? i-- : (stryCov_9fa48("367"), i++)) {
      if (stryMutAct_9fa48("368")) {
        {}
      } else {
        stryCov_9fa48("368");
        if (stryMutAct_9fa48("371") ? i % 2 !== 0 : stryMutAct_9fa48("370") ? false : stryMutAct_9fa48("369") ? true : (stryCov_9fa48("369", "370", "371"), (stryMutAct_9fa48("372") ? i * 2 : (stryCov_9fa48("372"), i % 2)) === 0)) {
          if (stryMutAct_9fa48("373")) {
            {}
          } else {
            stryCov_9fa48("373");
            finalResult = add(finalResult, i);
          }
        } else {
          if (stryMutAct_9fa48("374")) {
            {}
          } else {
            stryCov_9fa48("374");
            finalResult = subtract(finalResult, i);
          }
        }
      }
    }
    return finalResult;
  }
}

// mutant ipex
function complexMathCalculation1(d, b, c, a) {
  if (stryMutAct_9fa48("375")) {
    {}
  } else {
    stryCov_9fa48("375");
    const sum = add(a, b);
    const difference = subtract(c, d);
    const product = multiply(sum, difference);
    const result = divide(product, 2);
    let finalResult = result;
    for (let i = 0; stryMutAct_9fa48("378") ? i >= 5 : stryMutAct_9fa48("377") ? i <= 5 : stryMutAct_9fa48("376") ? false : (stryCov_9fa48("376", "377", "378"), i < 5); stryMutAct_9fa48("379") ? i-- : (stryCov_9fa48("379"), i++)) {
      if (stryMutAct_9fa48("380")) {
        {}
      } else {
        stryCov_9fa48("380");
        if (stryMutAct_9fa48("383") ? i % 2 !== 0 : stryMutAct_9fa48("382") ? false : stryMutAct_9fa48("381") ? true : (stryCov_9fa48("381", "382", "383"), (stryMutAct_9fa48("384") ? i * 2 : (stryCov_9fa48("384"), i % 2)) === 0)) {
          if (stryMutAct_9fa48("385")) {
            {}
          } else {
            stryCov_9fa48("385");
            finalResult = add(finalResult, i);
          }
        } else {
          if (stryMutAct_9fa48("386")) {
            {}
          } else {
            stryCov_9fa48("386");
            finalResult = subtract(finalResult, i);
          }
        }
      }
    }
    return finalResult;
  }
}

// mutant imcd
function complexMathCalculation2(a, b, c, d) {
  if (stryMutAct_9fa48("387")) {
    {}
  } else {
    stryCov_9fa48("387");
    const sum = 100;
    const difference = subtract(c, d);
    const product = multiply(sum, difference);
    const result = divide(product, 2);
    let finalResult = result;
    for (let i = 0; stryMutAct_9fa48("390") ? i >= 5 : stryMutAct_9fa48("389") ? i <= 5 : stryMutAct_9fa48("388") ? false : (stryCov_9fa48("388", "389", "390"), i < 5); stryMutAct_9fa48("391") ? i-- : (stryCov_9fa48("391"), i++)) {
      if (stryMutAct_9fa48("392")) {
        {}
      } else {
        stryCov_9fa48("392");
        if (stryMutAct_9fa48("395") ? i % 2 !== 0 : stryMutAct_9fa48("394") ? false : stryMutAct_9fa48("393") ? true : (stryCov_9fa48("393", "394", "395"), (stryMutAct_9fa48("396") ? i * 2 : (stryCov_9fa48("396"), i % 2)) === 0)) {
          if (stryMutAct_9fa48("397")) {
            {}
          } else {
            stryCov_9fa48("397");
            finalResult = add(finalResult, i);
          }
        } else {
          if (stryMutAct_9fa48("398")) {
            {}
          } else {
            stryCov_9fa48("398");
            finalResult = subtract(finalResult, i);
          }
        }
      }
    }
    return finalResult;
  }
}

// mutant irem
function complexMathCalculation3(a, b, c, d) {
  if (stryMutAct_9fa48("399")) {
    {}
  } else {
    stryCov_9fa48("399");
    const sum = add(a, b);
    const difference = subtract(c, d);
    const product = multiply(sum, difference);
    const result = divide(product, 2);
    let finalResult = result;
    for (let i = 0; stryMutAct_9fa48("402") ? i >= 5 : stryMutAct_9fa48("401") ? i <= 5 : stryMutAct_9fa48("400") ? false : (stryCov_9fa48("400", "401", "402"), i < 5); stryMutAct_9fa48("403") ? i-- : (stryCov_9fa48("403"), i++)) {
      if (stryMutAct_9fa48("404")) {
        {}
      } else {
        stryCov_9fa48("404");
        if (stryMutAct_9fa48("407") ? i % 2 !== 0 : stryMutAct_9fa48("406") ? false : stryMutAct_9fa48("405") ? true : (stryCov_9fa48("405", "406", "407"), (stryMutAct_9fa48("408") ? i * 2 : (stryCov_9fa48("408"), i % 2)) === 0)) {
          if (stryMutAct_9fa48("409")) {
            {}
          } else {
            stryCov_9fa48("409");
            finalResult = add(finalResult, i);
          }
        } else {
          if (stryMutAct_9fa48("410")) {
            {}
          } else {
            stryCov_9fa48("410");
            finalResult = subtract(finalResult, i);
          }
        }
      }
    }
    return stryMutAct_9fa48("411") ? +finalResult : (stryCov_9fa48("411"), -finalResult);
  }
}
export { add, subtract, multiply, divide, complexMathCalculation, complexMathCalculation1, complexMathCalculation2, complexMathCalculation3 };