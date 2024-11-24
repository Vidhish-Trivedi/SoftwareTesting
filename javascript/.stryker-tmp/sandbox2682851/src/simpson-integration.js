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
function integralEvaluation(N, a, b, func) {
  if (stryMutAct_9fa48("547")) {
    {}
  } else {
    stryCov_9fa48("547");
    let isNEven = stryMutAct_9fa48("548") ? false : (stryCov_9fa48("548"), true);
    if (stryMutAct_9fa48("551") ? N % 2 === 0 : stryMutAct_9fa48("550") ? false : stryMutAct_9fa48("549") ? true : (stryCov_9fa48("549", "550", "551"), (stryMutAct_9fa48("552") ? N * 2 : (stryCov_9fa48("552"), N % 2)) !== 0)) isNEven = stryMutAct_9fa48("553") ? true : (stryCov_9fa48("553"), false);
    if (stryMutAct_9fa48("556") ? (!Number.isInteger(N) || Number.isNaN(a)) && Number.isNaN(b) : stryMutAct_9fa48("555") ? false : stryMutAct_9fa48("554") ? true : (stryCov_9fa48("554", "555", "556"), (stryMutAct_9fa48("558") ? !Number.isInteger(N) && Number.isNaN(a) : stryMutAct_9fa48("557") ? false : (stryCov_9fa48("557", "558"), (stryMutAct_9fa48("559") ? Number.isInteger(N) : (stryCov_9fa48("559"), !Number.isInteger(N))) || Number.isNaN(a))) || Number.isNaN(b))) {
      if (stryMutAct_9fa48("560")) {
        {}
      } else {
        stryCov_9fa48("560");
        throw new TypeError(stryMutAct_9fa48("561") ? "" : (stryCov_9fa48("561"), 'Expected integer N and finite a, b'));
      }
    }
    if (stryMutAct_9fa48("564") ? false : stryMutAct_9fa48("563") ? true : stryMutAct_9fa48("562") ? isNEven : (stryCov_9fa48("562", "563", "564"), !isNEven)) {
      if (stryMutAct_9fa48("565")) {
        {}
      } else {
        stryCov_9fa48("565");
        throw Error(stryMutAct_9fa48("566") ? "" : (stryCov_9fa48("566"), 'N is not an even number'));
      }
    }
    if (stryMutAct_9fa48("570") ? N > 0 : stryMutAct_9fa48("569") ? N < 0 : stryMutAct_9fa48("568") ? false : stryMutAct_9fa48("567") ? true : (stryCov_9fa48("567", "568", "569", "570"), N <= 0)) {
      if (stryMutAct_9fa48("571")) {
        {}
      } else {
        stryCov_9fa48("571");
        throw Error(stryMutAct_9fa48("572") ? "" : (stryCov_9fa48("572"), 'N has to be >= 2'));
      }
    }
    if (stryMutAct_9fa48("576") ? a <= b : stryMutAct_9fa48("575") ? a >= b : stryMutAct_9fa48("574") ? false : stryMutAct_9fa48("573") ? true : (stryCov_9fa48("573", "574", "575", "576"), a > b)) {
      if (stryMutAct_9fa48("577")) {
        {}
      } else {
        stryCov_9fa48("577");
        throw Error(stryMutAct_9fa48("578") ? "" : (stryCov_9fa48("578"), 'a must be less or equal than b'));
      }
    }
    if (stryMutAct_9fa48("581") ? a !== b : stryMutAct_9fa48("580") ? false : stryMutAct_9fa48("579") ? true : (stryCov_9fa48("579", "580", "581"), a === b)) return 0;
    const h = stryMutAct_9fa48("582") ? (b - a) * N : (stryCov_9fa48("582"), (stryMutAct_9fa48("583") ? b + a : (stryCov_9fa48("583"), b - a)) / N);
    let xi = a;
    const pointsArray = stryMutAct_9fa48("584") ? ["Stryker was here"] : (stryCov_9fa48("584"), []);
    let temp;
    for (let i = 0; stryMutAct_9fa48("587") ? i >= N + 1 : stryMutAct_9fa48("586") ? i <= N + 1 : stryMutAct_9fa48("585") ? false : (stryCov_9fa48("585", "586", "587"), i < (stryMutAct_9fa48("588") ? N - 1 : (stryCov_9fa48("588"), N + 1))); stryMutAct_9fa48("589") ? i-- : (stryCov_9fa48("589"), i++)) {
      if (stryMutAct_9fa48("590")) {
        {}
      } else {
        stryCov_9fa48("590");
        if (stryMutAct_9fa48("593") ? i === 0 && i === N : stryMutAct_9fa48("592") ? false : stryMutAct_9fa48("591") ? true : (stryCov_9fa48("591", "592", "593"), (stryMutAct_9fa48("595") ? i !== 0 : stryMutAct_9fa48("594") ? false : (stryCov_9fa48("594", "595"), i === 0)) || (stryMutAct_9fa48("597") ? i !== N : stryMutAct_9fa48("596") ? false : (stryCov_9fa48("596", "597"), i === N)))) temp = func(xi);else if (stryMutAct_9fa48("600") ? i % 2 !== 0 : stryMutAct_9fa48("599") ? false : stryMutAct_9fa48("598") ? true : (stryCov_9fa48("598", "599", "600"), (stryMutAct_9fa48("601") ? i * 2 : (stryCov_9fa48("601"), i % 2)) === 0)) temp = stryMutAct_9fa48("602") ? 2 / func(xi) : (stryCov_9fa48("602"), 2 * func(xi));else temp = stryMutAct_9fa48("603") ? 4 / func(xi) : (stryCov_9fa48("603"), 4 * func(xi));
        pointsArray.push(temp);
        stryMutAct_9fa48("604") ? xi -= h : (stryCov_9fa48("604"), xi += h);
      }
    }
    let result = stryMutAct_9fa48("605") ? h * 3 : (stryCov_9fa48("605"), h / 3);
    temp = pointsArray.reduce(stryMutAct_9fa48("606") ? () => undefined : (stryCov_9fa48("606"), (acc, currValue) => stryMutAct_9fa48("607") ? acc - currValue : (stryCov_9fa48("607"), acc + currValue)), 0);
    stryMutAct_9fa48("608") ? result /= temp : (stryCov_9fa48("608"), result *= temp);
    if (stryMutAct_9fa48("610") ? false : stryMutAct_9fa48("609") ? true : (stryCov_9fa48("609", "610"), Number.isNaN(result))) {
      if (stryMutAct_9fa48("611")) {
        {}
      } else {
        stryCov_9fa48("611");
        throw Error(stryMutAct_9fa48("612") ? "" : (stryCov_9fa48("612"), "Result is NaN. The input interval doesn't belong to the functions domain"));
      }
    }
    return result;
  }
}
export { integralEvaluation };