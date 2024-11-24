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
function compare(a, b) {
  if (stryMutAct_9fa48("23")) {
    {}
  } else {
    stryCov_9fa48("23");
    if (stryMutAct_9fa48("27") ? a.x >= b.x : stryMutAct_9fa48("26") ? a.x <= b.x : stryMutAct_9fa48("25") ? false : stryMutAct_9fa48("24") ? true : (stryCov_9fa48("24", "25", "26", "27"), a.x < b.x)) return stryMutAct_9fa48("28") ? +1 : (stryCov_9fa48("28"), -1);
    if (stryMutAct_9fa48("31") ? a.x === b.x || a.y < b.y : stryMutAct_9fa48("30") ? false : stryMutAct_9fa48("29") ? true : (stryCov_9fa48("29", "30", "31"), (stryMutAct_9fa48("33") ? a.x !== b.x : stryMutAct_9fa48("32") ? true : (stryCov_9fa48("32", "33"), a.x === b.x)) && (stryMutAct_9fa48("36") ? a.y >= b.y : stryMutAct_9fa48("35") ? a.y <= b.y : stryMutAct_9fa48("34") ? true : (stryCov_9fa48("34", "35", "36"), a.y < b.y)))) return stryMutAct_9fa48("37") ? +1 : (stryCov_9fa48("37"), -1);
    return 1;
  }
}
function orientation(a, b, c) {
  if (stryMutAct_9fa48("38")) {
    {}
  } else {
    stryCov_9fa48("38");
    const alpha = stryMutAct_9fa48("39") ? (b.y - a.y) * (b.x - a.x) : (stryCov_9fa48("39"), (stryMutAct_9fa48("40") ? b.y + a.y : (stryCov_9fa48("40"), b.y - a.y)) / (stryMutAct_9fa48("41") ? b.x + a.x : (stryCov_9fa48("41"), b.x - a.x)));
    const beta = stryMutAct_9fa48("42") ? (c.y - b.y) * (c.x - b.x) : (stryCov_9fa48("42"), (stryMutAct_9fa48("43") ? c.y + b.y : (stryCov_9fa48("43"), c.y - b.y)) / (stryMutAct_9fa48("44") ? c.x + b.x : (stryCov_9fa48("44"), c.x - b.x)));
    if (stryMutAct_9fa48("48") ? alpha <= beta : stryMutAct_9fa48("47") ? alpha >= beta : stryMutAct_9fa48("46") ? false : stryMutAct_9fa48("45") ? true : (stryCov_9fa48("45", "46", "47", "48"), alpha > beta)) return 1;else if (stryMutAct_9fa48("52") ? beta <= alpha : stryMutAct_9fa48("51") ? beta >= alpha : stryMutAct_9fa48("50") ? false : stryMutAct_9fa48("49") ? true : (stryCov_9fa48("49", "50", "51", "52"), beta > alpha)) return stryMutAct_9fa48("53") ? +1 : (stryCov_9fa48("53"), -1);
    return 0;
  }
}
function convexHull(points) {
  if (stryMutAct_9fa48("54")) {
    {}
  } else {
    stryCov_9fa48("54");
    const pointsLen = points.length;
    if (stryMutAct_9fa48("58") ? pointsLen > 2 : stryMutAct_9fa48("57") ? pointsLen < 2 : stryMutAct_9fa48("56") ? false : stryMutAct_9fa48("55") ? true : (stryCov_9fa48("55", "56", "57", "58"), pointsLen <= 2)) {
      if (stryMutAct_9fa48("59")) {
        {}
      } else {
        stryCov_9fa48("59");
        throw new Error(stryMutAct_9fa48("60") ? "" : (stryCov_9fa48("60"), 'Minimum of 3 points is required to form closed polygon!'));
      }
    }
    stryMutAct_9fa48("61") ? points : (stryCov_9fa48("61"), points.sort(compare));
    const p1 = points[0];
    const p2 = points[stryMutAct_9fa48("62") ? pointsLen + 1 : (stryCov_9fa48("62"), pointsLen - 1)];
    const upperPoints = stryMutAct_9fa48("63") ? ["Stryker was here"] : (stryCov_9fa48("63"), []);
    const lowerPoints = stryMutAct_9fa48("64") ? ["Stryker was here"] : (stryCov_9fa48("64"), []);
    upperPoints.push(p1);
    lowerPoints.push(p1);
    for (let i = 1; stryMutAct_9fa48("67") ? i >= pointsLen : stryMutAct_9fa48("66") ? i <= pointsLen : stryMutAct_9fa48("65") ? false : (stryCov_9fa48("65", "66", "67"), i < pointsLen); stryMutAct_9fa48("68") ? i-- : (stryCov_9fa48("68"), i++)) {
      if (stryMutAct_9fa48("69")) {
        {}
      } else {
        stryCov_9fa48("69");
        if (stryMutAct_9fa48("72") ? i === pointsLen - 1 && orientation(p1, points[i], p2) !== -1 : stryMutAct_9fa48("71") ? false : stryMutAct_9fa48("70") ? true : (stryCov_9fa48("70", "71", "72"), (stryMutAct_9fa48("74") ? i !== pointsLen - 1 : stryMutAct_9fa48("73") ? false : (stryCov_9fa48("73", "74"), i === (stryMutAct_9fa48("75") ? pointsLen + 1 : (stryCov_9fa48("75"), pointsLen - 1)))) || (stryMutAct_9fa48("77") ? orientation(p1, points[i], p2) === -1 : stryMutAct_9fa48("76") ? false : (stryCov_9fa48("76", "77"), orientation(p1, points[i], p2) !== (stryMutAct_9fa48("78") ? +1 : (stryCov_9fa48("78"), -1)))))) {
          if (stryMutAct_9fa48("79")) {
            {}
          } else {
            stryCov_9fa48("79");
            let upLen = upperPoints.length;
            while (stryMutAct_9fa48("81") ? upLen >= 2 || orientation(upperPoints[upLen - 2], upperPoints[upLen - 1], points[i]) === -1 : stryMutAct_9fa48("80") ? false : (stryCov_9fa48("80", "81"), (stryMutAct_9fa48("84") ? upLen < 2 : stryMutAct_9fa48("83") ? upLen > 2 : stryMutAct_9fa48("82") ? true : (stryCov_9fa48("82", "83", "84"), upLen >= 2)) && (stryMutAct_9fa48("86") ? orientation(upperPoints[upLen - 2], upperPoints[upLen - 1], points[i]) !== -1 : stryMutAct_9fa48("85") ? true : (stryCov_9fa48("85", "86"), orientation(upperPoints[stryMutAct_9fa48("87") ? upLen + 2 : (stryCov_9fa48("87"), upLen - 2)], upperPoints[stryMutAct_9fa48("88") ? upLen + 1 : (stryCov_9fa48("88"), upLen - 1)], points[i]) === (stryMutAct_9fa48("89") ? +1 : (stryCov_9fa48("89"), -1)))))) {
              if (stryMutAct_9fa48("90")) {
                {}
              } else {
                stryCov_9fa48("90");
                upperPoints.pop();
                upLen = upperPoints.length;
              }
            }
            upperPoints.push(points[i]);
          }
        }
        if (stryMutAct_9fa48("93") ? i === pointsLen - 1 && orientation(p1, points[i], p2) !== 1 : stryMutAct_9fa48("92") ? false : stryMutAct_9fa48("91") ? true : (stryCov_9fa48("91", "92", "93"), (stryMutAct_9fa48("95") ? i !== pointsLen - 1 : stryMutAct_9fa48("94") ? false : (stryCov_9fa48("94", "95"), i === (stryMutAct_9fa48("96") ? pointsLen + 1 : (stryCov_9fa48("96"), pointsLen - 1)))) || (stryMutAct_9fa48("98") ? orientation(p1, points[i], p2) === 1 : stryMutAct_9fa48("97") ? false : (stryCov_9fa48("97", "98"), orientation(p1, points[i], p2) !== 1)))) {
          if (stryMutAct_9fa48("99")) {
            {}
          } else {
            stryCov_9fa48("99");
            let lowLen = lowerPoints.length;
            while (stryMutAct_9fa48("101") ? lowLen >= 2 || orientation(lowerPoints[lowLen - 2], lowerPoints[lowLen - 1], points[i]) === 1 : stryMutAct_9fa48("100") ? false : (stryCov_9fa48("100", "101"), (stryMutAct_9fa48("104") ? lowLen < 2 : stryMutAct_9fa48("103") ? lowLen > 2 : stryMutAct_9fa48("102") ? true : (stryCov_9fa48("102", "103", "104"), lowLen >= 2)) && (stryMutAct_9fa48("106") ? orientation(lowerPoints[lowLen - 2], lowerPoints[lowLen - 1], points[i]) !== 1 : stryMutAct_9fa48("105") ? true : (stryCov_9fa48("105", "106"), orientation(lowerPoints[stryMutAct_9fa48("107") ? lowLen + 2 : (stryCov_9fa48("107"), lowLen - 2)], lowerPoints[stryMutAct_9fa48("108") ? lowLen + 1 : (stryCov_9fa48("108"), lowLen - 1)], points[i]) === 1)))) {
              if (stryMutAct_9fa48("109")) {
                {}
              } else {
                stryCov_9fa48("109");
                lowerPoints.pop();
                lowLen = lowerPoints.length;
              }
            }
            lowerPoints.push(points[i]);
          }
        }
      }
    }
    const hull = stryMutAct_9fa48("110") ? ["Stryker was here"] : (stryCov_9fa48("110"), []);
    for (let i = 1; stryMutAct_9fa48("113") ? i >= upperPoints.length - 1 : stryMutAct_9fa48("112") ? i <= upperPoints.length - 1 : stryMutAct_9fa48("111") ? false : (stryCov_9fa48("111", "112", "113"), i < (stryMutAct_9fa48("114") ? upperPoints.length + 1 : (stryCov_9fa48("114"), upperPoints.length - 1))); stryMutAct_9fa48("115") ? i-- : (stryCov_9fa48("115"), i++)) {
      if (stryMutAct_9fa48("116")) {
        {}
      } else {
        stryCov_9fa48("116");
        hull.push(upperPoints[i]);
      }
    }
    for (let i = stryMutAct_9fa48("117") ? lowerPoints.length + 1 : (stryCov_9fa48("117"), lowerPoints.length - 1); stryMutAct_9fa48("120") ? i < 0 : stryMutAct_9fa48("119") ? i > 0 : stryMutAct_9fa48("118") ? false : (stryCov_9fa48("118", "119", "120"), i >= 0); stryMutAct_9fa48("121") ? i++ : (stryCov_9fa48("121"), i--)) {
      if (stryMutAct_9fa48("122")) {
        {}
      } else {
        stryCov_9fa48("122");
        hull.push(lowerPoints[i]);
      }
    }
    return hull;
  }
}
export { convexHull };

// Example

// const points = [
//   { x: 0, y: 3 },
//   { x: 1, y: 1 },
//   { x: 2, y: 2 },
//   { x: 4, y: 4 },
//   { x: 0, y: 0 },
//   { x: 1, y: 2 },
//   { x: 3, y: 1 },
//   { x: 3, y: 3 }]

// convexHull(points)