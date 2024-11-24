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
class Determinant {
  subMatrix = (matrix, i, j) => {
    if (stryMutAct_9fa48("123")) {
      {}
    } else {
      stryCov_9fa48("123");
      let matrixSize = matrix[0].length;
      if (stryMutAct_9fa48("126") ? matrixSize !== 1 : stryMutAct_9fa48("125") ? false : stryMutAct_9fa48("124") ? true : (stryCov_9fa48("124", "125", "126"), matrixSize === 1)) {
        if (stryMutAct_9fa48("127")) {
          {}
        } else {
          stryCov_9fa48("127");
          return matrix[0][0];
        }
      }
      let subMatrix = stryMutAct_9fa48("128") ? ["Stryker was here"] : (stryCov_9fa48("128"), []);
      for (let x = 0; stryMutAct_9fa48("131") ? x >= matrixSize : stryMutAct_9fa48("130") ? x <= matrixSize : stryMutAct_9fa48("129") ? false : (stryCov_9fa48("129", "130", "131"), x < matrixSize); stryMutAct_9fa48("132") ? x-- : (stryCov_9fa48("132"), x++)) {
        if (stryMutAct_9fa48("133")) {
          {}
        } else {
          stryCov_9fa48("133");
          if (stryMutAct_9fa48("136") ? x !== i : stryMutAct_9fa48("135") ? false : stryMutAct_9fa48("134") ? true : (stryCov_9fa48("134", "135", "136"), x === i)) {
            if (stryMutAct_9fa48("137")) {
              {}
            } else {
              stryCov_9fa48("137");
              continue;
            }
          }
          subMatrix.push(stryMutAct_9fa48("138") ? ["Stryker was here"] : (stryCov_9fa48("138"), []));
          for (let y = 0; stryMutAct_9fa48("141") ? y >= matrixSize : stryMutAct_9fa48("140") ? y <= matrixSize : stryMutAct_9fa48("139") ? false : (stryCov_9fa48("139", "140", "141"), y < matrixSize); stryMutAct_9fa48("142") ? y-- : (stryCov_9fa48("142"), y++)) {
            if (stryMutAct_9fa48("143")) {
              {}
            } else {
              stryCov_9fa48("143");
              if (stryMutAct_9fa48("146") ? y !== j : stryMutAct_9fa48("145") ? false : stryMutAct_9fa48("144") ? true : (stryCov_9fa48("144", "145", "146"), y === j)) {
                if (stryMutAct_9fa48("147")) {
                  {}
                } else {
                  stryCov_9fa48("147");
                  continue;
                }
              }
              subMatrix[stryMutAct_9fa48("148") ? subMatrix.length + 1 : (stryCov_9fa48("148"), subMatrix.length - 1)].push(matrix[x][y]);
            }
          }
        }
      }
      return subMatrix;
    }
  };
  isMatrixSquare = matrix => {
    if (stryMutAct_9fa48("149")) {
      {}
    } else {
      stryCov_9fa48("149");
      let numRows = matrix.length;
      for (let i = 0; stryMutAct_9fa48("152") ? i >= numRows : stryMutAct_9fa48("151") ? i <= numRows : stryMutAct_9fa48("150") ? false : (stryCov_9fa48("150", "151", "152"), i < numRows); stryMutAct_9fa48("153") ? i-- : (stryCov_9fa48("153"), i++)) {
        if (stryMutAct_9fa48("154")) {
          {}
        } else {
          stryCov_9fa48("154");
          if (stryMutAct_9fa48("157") ? numRows === matrix[i].length : stryMutAct_9fa48("156") ? false : stryMutAct_9fa48("155") ? true : (stryCov_9fa48("155", "156", "157"), numRows !== matrix[i].length)) {
            if (stryMutAct_9fa48("158")) {
              {}
            } else {
              stryCov_9fa48("158");
              return stryMutAct_9fa48("159") ? true : (stryCov_9fa48("159"), false);
            }
          }
        }
      }
      return stryMutAct_9fa48("160") ? false : (stryCov_9fa48("160"), true);
    }
  };
  determinant = matrix => {
    if (stryMutAct_9fa48("161")) {
      {}
    } else {
      stryCov_9fa48("161");
      if (stryMutAct_9fa48("164") ? (!Array.isArray(matrix) || matrix.length === 0) && !Array.isArray(matrix[0]) : stryMutAct_9fa48("163") ? false : stryMutAct_9fa48("162") ? true : (stryCov_9fa48("162", "163", "164"), (stryMutAct_9fa48("166") ? !Array.isArray(matrix) && matrix.length === 0 : stryMutAct_9fa48("165") ? false : (stryCov_9fa48("165", "166"), (stryMutAct_9fa48("167") ? Array.isArray(matrix) : (stryCov_9fa48("167"), !Array.isArray(matrix))) || (stryMutAct_9fa48("169") ? matrix.length !== 0 : stryMutAct_9fa48("168") ? false : (stryCov_9fa48("168", "169"), matrix.length === 0)))) || (stryMutAct_9fa48("170") ? Array.isArray(matrix[0]) : (stryCov_9fa48("170"), !Array.isArray(matrix[0]))))) {
        if (stryMutAct_9fa48("171")) {
          {}
        } else {
          stryCov_9fa48("171");
          throw new Error(stryMutAct_9fa48("172") ? "" : (stryCov_9fa48("172"), "Input is not a valid 2D matrix."));
        }
      }
      if (stryMutAct_9fa48("175") ? false : stryMutAct_9fa48("174") ? true : stryMutAct_9fa48("173") ? this.isMatrixSquare(matrix) : (stryCov_9fa48("173", "174", "175"), !this.isMatrixSquare(matrix))) {
        if (stryMutAct_9fa48("176")) {
          {}
        } else {
          stryCov_9fa48("176");
          throw new Error(stryMutAct_9fa48("177") ? "" : (stryCov_9fa48("177"), "Square matrix is required."));
        }
      }
      let numCols = matrix[0].length;
      if (stryMutAct_9fa48("180") ? numCols !== 1 : stryMutAct_9fa48("179") ? false : stryMutAct_9fa48("178") ? true : (stryCov_9fa48("178", "179", "180"), numCols === 1)) {
        if (stryMutAct_9fa48("181")) {
          {}
        } else {
          stryCov_9fa48("181");
          return matrix[0][0];
        }
      }
      let result = 0;
      let setIndex = 0;
      for (let i = 0; stryMutAct_9fa48("184") ? i >= numCols : stryMutAct_9fa48("183") ? i <= numCols : stryMutAct_9fa48("182") ? false : (stryCov_9fa48("182", "183", "184"), i < numCols); stryMutAct_9fa48("185") ? i-- : (stryCov_9fa48("185"), i++)) {
        if (stryMutAct_9fa48("186")) {
          {}
        } else {
          stryCov_9fa48("186");
          stryMutAct_9fa48("187") ? result -= Math.pow(-1, i) * matrix[setIndex][i] * this.determinant(this.subMatrix(matrix, setIndex, i)) : (stryCov_9fa48("187"), result += stryMutAct_9fa48("188") ? Math.pow(-1, i) * matrix[setIndex][i] / this.determinant(this.subMatrix(matrix, setIndex, i)) : (stryCov_9fa48("188"), (stryMutAct_9fa48("189") ? Math.pow(-1, i) / matrix[setIndex][i] : (stryCov_9fa48("189"), Math.pow(stryMutAct_9fa48("190") ? +1 : (stryCov_9fa48("190"), -1), i) * matrix[setIndex][i])) * this.determinant(this.subMatrix(matrix, setIndex, i))));
        }
      }
      return result;
    }
  };
}
export default Determinant;