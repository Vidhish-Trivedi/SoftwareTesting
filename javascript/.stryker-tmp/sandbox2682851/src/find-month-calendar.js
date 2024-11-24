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
class Month {
  constructor() {
    if (stryMutAct_9fa48("191")) {
      {}
    } else {
      stryCov_9fa48("191");
      this.Days = stryMutAct_9fa48("192") ? [] : (stryCov_9fa48("192"), [stryMutAct_9fa48("193") ? "" : (stryCov_9fa48("193"), 'M'), stryMutAct_9fa48("194") ? "" : (stryCov_9fa48("194"), 'T'), stryMutAct_9fa48("195") ? "" : (stryCov_9fa48("195"), 'W'), stryMutAct_9fa48("196") ? "" : (stryCov_9fa48("196"), 'Th'), stryMutAct_9fa48("197") ? "" : (stryCov_9fa48("197"), 'F'), stryMutAct_9fa48("198") ? "" : (stryCov_9fa48("198"), 'S'), stryMutAct_9fa48("199") ? "" : (stryCov_9fa48("199"), 'Su')]);
      this.BDays = stryMutAct_9fa48("200") ? [] : (stryCov_9fa48("200"), [stryMutAct_9fa48("201") ? "" : (stryCov_9fa48("201"), 'M'), stryMutAct_9fa48("202") ? "" : (stryCov_9fa48("202"), 'Su'), stryMutAct_9fa48("203") ? "" : (stryCov_9fa48("203"), 'S'), stryMutAct_9fa48("204") ? "" : (stryCov_9fa48("204"), 'F'), stryMutAct_9fa48("205") ? "" : (stryCov_9fa48("205"), 'Th'), stryMutAct_9fa48("206") ? "" : (stryCov_9fa48("206"), 'W'), stryMutAct_9fa48("207") ? "" : (stryCov_9fa48("207"), 'T')]);
      this.epoch = stryMutAct_9fa48("208") ? {} : (stryCov_9fa48("208"), {
        month: 1,
        year: 1900
      });
      this.monthDays = stryMutAct_9fa48("209") ? [] : (stryCov_9fa48("209"), [31, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]);
      this.monthDaysLeap = stryMutAct_9fa48("210") ? [] : (stryCov_9fa48("210"), [31, 31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]);
    }
  }
  isLeapYear = year => {
    if (stryMutAct_9fa48("211")) {
      {}
    } else {
      stryCov_9fa48("211");
      return stryMutAct_9fa48("214") ? year % 400 === 0 && year % 100 !== 0 && year % 4 === 0 : stryMutAct_9fa48("213") ? false : stryMutAct_9fa48("212") ? true : (stryCov_9fa48("212", "213", "214"), (stryMutAct_9fa48("216") ? year % 400 !== 0 : stryMutAct_9fa48("215") ? false : (stryCov_9fa48("215", "216"), (stryMutAct_9fa48("217") ? year * 400 : (stryCov_9fa48("217"), year % 400)) === 0)) || (stryMutAct_9fa48("219") ? year % 100 !== 0 || year % 4 === 0 : stryMutAct_9fa48("218") ? false : (stryCov_9fa48("218", "219"), (stryMutAct_9fa48("221") ? year % 100 === 0 : stryMutAct_9fa48("220") ? true : (stryCov_9fa48("220", "221"), (stryMutAct_9fa48("222") ? year * 100 : (stryCov_9fa48("222"), year % 100)) !== 0)) && (stryMutAct_9fa48("224") ? year % 4 !== 0 : stryMutAct_9fa48("223") ? true : (stryCov_9fa48("223", "224"), (stryMutAct_9fa48("225") ? year * 4 : (stryCov_9fa48("225"), year % 4)) === 0)))));
    }
  };
  printCal(days, startDay, output = stryMutAct_9fa48("226") ? () => undefined : (stryCov_9fa48("226"), value => console.log(value))) {
    if (stryMutAct_9fa48("227")) {
      {}
    } else {
      stryCov_9fa48("227");
      output(stryMutAct_9fa48("228") ? "" : (stryCov_9fa48("228"), 'M   T   W   Th  F   S   Su'));
      const dates = stryMutAct_9fa48("229") ? ["Stryker was here"] : (stryCov_9fa48("229"), []);
      let i;
      for (i = 1; stryMutAct_9fa48("232") ? i > days : stryMutAct_9fa48("231") ? i < days : stryMutAct_9fa48("230") ? false : (stryCov_9fa48("230", "231", "232"), i <= days); stryMutAct_9fa48("233") ? i-- : (stryCov_9fa48("233"), i++)) {
        if (stryMutAct_9fa48("234")) {
          {}
        } else {
          stryCov_9fa48("234");
          dates.push(i);
        }
      }
      for (i = 0; stryMutAct_9fa48("237") ? i >= this.Days.indexOf(startDay) : stryMutAct_9fa48("236") ? i <= this.Days.indexOf(startDay) : stryMutAct_9fa48("235") ? false : (stryCov_9fa48("235", "236", "237"), i < this.Days.indexOf(startDay)); stryMutAct_9fa48("238") ? i-- : (stryCov_9fa48("238"), i++)) {
        if (stryMutAct_9fa48("239")) {
          {}
        } else {
          stryCov_9fa48("239");
          dates.unshift(stryMutAct_9fa48("240") ? "" : (stryCov_9fa48("240"), ' '));
        }
      }
      while (stryMutAct_9fa48("242") ? false : stryMutAct_9fa48("241") ? false : (stryCov_9fa48("241", "242"), true)) {
        if (stryMutAct_9fa48("243")) {
          {}
        } else {
          stryCov_9fa48("243");
          let row = stryMutAct_9fa48("244") ? "Stryker was here!" : (stryCov_9fa48("244"), '');
          for (i = 0; stryMutAct_9fa48("246") ? i < 7 || dates.length !== 0 : stryMutAct_9fa48("245") ? false : (stryCov_9fa48("245", "246"), (stryMutAct_9fa48("249") ? i >= 7 : stryMutAct_9fa48("248") ? i <= 7 : stryMutAct_9fa48("247") ? true : (stryCov_9fa48("247", "248", "249"), i < 7)) && (stryMutAct_9fa48("251") ? dates.length === 0 : stryMutAct_9fa48("250") ? true : (stryCov_9fa48("250", "251"), dates.length !== 0))); stryMutAct_9fa48("252") ? i-- : (stryCov_9fa48("252"), i++)) {
            if (stryMutAct_9fa48("253")) {
              {}
            } else {
              stryCov_9fa48("253");
              stryMutAct_9fa48("254") ? row -= dates.shift() : (stryCov_9fa48("254"), row += dates.shift());
              while (stryMutAct_9fa48("256") ? row.length % 4 === 0 : stryMutAct_9fa48("255") ? false : (stryCov_9fa48("255", "256"), (stryMutAct_9fa48("257") ? row.length * 4 : (stryCov_9fa48("257"), row.length % 4)) !== 0)) {
                if (stryMutAct_9fa48("258")) {
                  {}
                } else {
                  stryCov_9fa48("258");
                  row += stryMutAct_9fa48("259") ? "" : (stryCov_9fa48("259"), ' ');
                }
              }
            }
          }
          output(row);
          if (stryMutAct_9fa48("262") ? dates.length !== 0 : stryMutAct_9fa48("261") ? false : stryMutAct_9fa48("260") ? true : (stryCov_9fa48("260", "261", "262"), dates.length === 0)) break;
        }
      }
    }
  }
  parseDate(date) {
    if (stryMutAct_9fa48("263")) {
      {}
    } else {
      stryCov_9fa48("263");
      const dateAr = stryMutAct_9fa48("264") ? ["Stryker was here"] : (stryCov_9fa48("264"), []);
      let block = stryMutAct_9fa48("265") ? "Stryker was here!" : (stryCov_9fa48("265"), '');
      let i;
      for (i = 0; stryMutAct_9fa48("268") ? i >= date.length : stryMutAct_9fa48("267") ? i <= date.length : stryMutAct_9fa48("266") ? false : (stryCov_9fa48("266", "267", "268"), i < date.length); stryMutAct_9fa48("269") ? i-- : (stryCov_9fa48("269"), i++)) {
        if (stryMutAct_9fa48("270")) {
          {}
        } else {
          stryCov_9fa48("270");
          if (stryMutAct_9fa48("273") ? date[i] !== '/' : stryMutAct_9fa48("272") ? false : stryMutAct_9fa48("271") ? true : (stryCov_9fa48("271", "272", "273"), date[i] === (stryMutAct_9fa48("274") ? "" : (stryCov_9fa48("274"), '/')))) {
            if (stryMutAct_9fa48("275")) {
              {}
            } else {
              stryCov_9fa48("275");
              dateAr.push(parseInt(block));
              block = stryMutAct_9fa48("276") ? "Stryker was here!" : (stryCov_9fa48("276"), '');
              continue;
            }
          }
          stryMutAct_9fa48("277") ? block -= date[i] : (stryCov_9fa48("277"), block += date[i]);
        }
      }
      dateAr.push(parseInt(block));
      if (stryMutAct_9fa48("280") ? dateAr.length === 2 : stryMutAct_9fa48("279") ? false : stryMutAct_9fa48("278") ? true : (stryCov_9fa48("278", "279", "280"), dateAr.length !== 2)) throw new Error(stryMutAct_9fa48("281") ? "" : (stryCov_9fa48("281"), 'Improper string encoding'));
      const dateOb = stryMutAct_9fa48("282") ? {} : (stryCov_9fa48("282"), {
        month: dateAr[0],
        year: dateAr[1]
      });
      return dateOb;
    }
  }
  isGreater(startDate, endDate) {
    if (stryMutAct_9fa48("283")) {
      {}
    } else {
      stryCov_9fa48("283");
      if (stryMutAct_9fa48("287") ? startDate.year <= endDate.year : stryMutAct_9fa48("286") ? startDate.year >= endDate.year : stryMutAct_9fa48("285") ? false : stryMutAct_9fa48("284") ? true : (stryCov_9fa48("284", "285", "286", "287"), startDate.year > endDate.year)) {
        if (stryMutAct_9fa48("288")) {
          {}
        } else {
          stryCov_9fa48("288");
          return stryMutAct_9fa48("289") ? false : (stryCov_9fa48("289"), true);
        }
      } else if (stryMutAct_9fa48("293") ? startDate.year >= endDate.year : stryMutAct_9fa48("292") ? startDate.year <= endDate.year : stryMutAct_9fa48("291") ? false : stryMutAct_9fa48("290") ? true : (stryCov_9fa48("290", "291", "292", "293"), startDate.year < endDate.year)) {
        if (stryMutAct_9fa48("294")) {
          {}
        } else {
          stryCov_9fa48("294");
          return stryMutAct_9fa48("295") ? true : (stryCov_9fa48("295"), false);
        }
      } else if (stryMutAct_9fa48("299") ? startDate.month <= endDate.month : stryMutAct_9fa48("298") ? startDate.month >= endDate.month : stryMutAct_9fa48("297") ? false : stryMutAct_9fa48("296") ? true : (stryCov_9fa48("296", "297", "298", "299"), startDate.month > endDate.month)) {
        if (stryMutAct_9fa48("300")) {
          {}
        } else {
          stryCov_9fa48("300");
          return stryMutAct_9fa48("301") ? false : (stryCov_9fa48("301"), true);
        }
      } else if (stryMutAct_9fa48("305") ? startDate.month >= endDate.month : stryMutAct_9fa48("304") ? startDate.month <= endDate.month : stryMutAct_9fa48("303") ? false : stryMutAct_9fa48("302") ? true : (stryCov_9fa48("302", "303", "304", "305"), startDate.month < endDate.month)) {
        if (stryMutAct_9fa48("306")) {
          {}
        } else {
          stryCov_9fa48("306");
          return stryMutAct_9fa48("307") ? true : (stryCov_9fa48("307"), false);
        }
      }
      return stryMutAct_9fa48("308") ? false : (stryCov_9fa48("308"), true);
    }
  }
  getDayDiff(startDate, endDate) {
    if (stryMutAct_9fa48("309")) {
      {}
    } else {
      stryCov_9fa48("309");
      if (stryMutAct_9fa48("312") ? this.isGreater(startDate, endDate) !== null : stryMutAct_9fa48("311") ? false : stryMutAct_9fa48("310") ? true : (stryCov_9fa48("310", "311", "312"), this.isGreater(startDate, endDate) === null)) {
        if (stryMutAct_9fa48("313")) {
          {}
        } else {
          stryCov_9fa48("313");
          return 0;
        }
      } else if (stryMutAct_9fa48("316") ? this.isGreater(startDate, endDate) !== true : stryMutAct_9fa48("315") ? false : stryMutAct_9fa48("314") ? true : (stryCov_9fa48("314", "315", "316"), this.isGreater(startDate, endDate) === (stryMutAct_9fa48("317") ? false : (stryCov_9fa48("317"), true)))) {
        if (stryMutAct_9fa48("318")) {
          {}
        } else {
          stryCov_9fa48("318");
          const midDate = startDate;
          startDate = endDate;
          endDate = midDate;
        }
      }
      let diff = 0;
      while (stryMutAct_9fa48("320") ? startDate.year === endDate.year : stryMutAct_9fa48("319") ? false : (stryCov_9fa48("319", "320"), startDate.year !== endDate.year)) {
        if (stryMutAct_9fa48("321")) {
          {}
        } else {
          stryCov_9fa48("321");
          stryMutAct_9fa48("322") ? diff -= this.isLeapYear(startDate.year) ? 366 : 365 : (stryCov_9fa48("322"), diff += this.isLeapYear(startDate.year) ? 366 : 365);
          startDate.year = stryMutAct_9fa48("323") ? startDate.year - 1 : (stryCov_9fa48("323"), startDate.year + 1);
        }
      }
      while (stryMutAct_9fa48("325") ? startDate.month === endDate.month : stryMutAct_9fa48("324") ? false : (stryCov_9fa48("324", "325"), startDate.month !== endDate.month)) {
        if (stryMutAct_9fa48("326")) {
          {}
        } else {
          stryCov_9fa48("326");
          if (stryMutAct_9fa48("330") ? startDate.month >= endDate.month : stryMutAct_9fa48("329") ? startDate.month <= endDate.month : stryMutAct_9fa48("328") ? false : stryMutAct_9fa48("327") ? true : (stryCov_9fa48("327", "328", "329", "330"), startDate.month < endDate.month)) {
            if (stryMutAct_9fa48("331")) {
              {}
            } else {
              stryCov_9fa48("331");
              if (stryMutAct_9fa48("333") ? false : stryMutAct_9fa48("332") ? true : (stryCov_9fa48("332", "333"), this.isLeapYear(startDate.year))) stryMutAct_9fa48("334") ? diff -= this.monthDaysLeap[startDate.month] : (stryCov_9fa48("334"), diff += this.monthDaysLeap[startDate.month]);else stryMutAct_9fa48("335") ? diff -= this.monthDays[startDate.month] : (stryCov_9fa48("335"), diff += this.monthDays[startDate.month]);
              startDate.month = stryMutAct_9fa48("336") ? startDate.month - 1 : (stryCov_9fa48("336"), startDate.month + 1);
            }
          } else {
            if (stryMutAct_9fa48("337")) {
              {}
            } else {
              stryCov_9fa48("337");
              if (stryMutAct_9fa48("339") ? false : stryMutAct_9fa48("338") ? true : (stryCov_9fa48("338", "339"), this.isLeapYear(startDate.year))) stryMutAct_9fa48("340") ? diff += this.monthDaysLeap[startDate.month - 1] : (stryCov_9fa48("340"), diff -= this.monthDaysLeap[stryMutAct_9fa48("341") ? startDate.month + 1 : (stryCov_9fa48("341"), startDate.month - 1)]);else stryMutAct_9fa48("342") ? diff += this.monthDays[startDate.month - 1] : (stryCov_9fa48("342"), diff -= this.monthDays[stryMutAct_9fa48("343") ? startDate.month + 1 : (stryCov_9fa48("343"), startDate.month - 1)]);
              startDate.month = stryMutAct_9fa48("344") ? startDate.month + 1 : (stryCov_9fa48("344"), startDate.month - 1);
            }
          }
        }
      }
      return diff;
    }
  }
  generateMonthCal(date) {
    if (stryMutAct_9fa48("345")) {
      {}
    } else {
      stryCov_9fa48("345");
      const Month = this.parseDate(date);
      let day = stryMutAct_9fa48("346") ? "Stryker was here!" : (stryCov_9fa48("346"), '');
      let difference = this.getDayDiff(this.epoch, Month);
      difference = stryMutAct_9fa48("347") ? difference * 7 : (stryCov_9fa48("347"), difference % 7);
      let Month2 = this.parseDate(date);
      day = this.isGreater(Month2, this.epoch) ? this.Days[difference] : this.BDays[difference];
      Month2 = this.parseDate(date);
      if (stryMutAct_9fa48("349") ? false : stryMutAct_9fa48("348") ? true : (stryCov_9fa48("348", "349"), this.isLeapYear(Month2.year))) this.printCal(this.monthDaysLeap[Month2.month], day);else this.printCal(this.monthDays[Month2.month], day);
    }
  }
}
export default Month;

// const x = new Month()
// x.generateMonthCal('1/2021')