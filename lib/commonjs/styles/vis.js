"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _reactNative = require("react-native");
var _asyncStorage = _interopRequireDefault(require("@react-native-async-storage/async-storage"));
var _responsive = require("./responsive");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
let isRTL = _reactNative.I18nManager.isRTL;
const getLang = async () => await _asyncStorage.default.getItem('locale');
getLang().then(res => {
  if (res && ['iw', 'he', 'ar'].includes(res)) {
    isRTL = true;
  }
});
const vis = _reactNative.StyleSheet.create({
  isRTL: {
    direction: isRTL ? 'rtl' : 'ltr'
  },
  rtl: {
    direction: 'rtl',
    textAlign: 'right'
  },
  h1: {
    height: (0, _responsive.heightPercentageToDP)('1%')
  },
  h2: {
    height: (0, _responsive.heightPercentageToDP)('2%')
  },
  h3: {
    height: (0, _responsive.heightPercentageToDP)('3%')
  },
  h4: {
    height: (0, _responsive.heightPercentageToDP)('4%')
  },
  h5: {
    height: (0, _responsive.heightPercentageToDP)('5%')
  },
  h5p: {
    height: '5%'
  },
  h6: {
    height: (0, _responsive.heightPercentageToDP)('6%')
  },
  h7: {
    height: (0, _responsive.heightPercentageToDP)('7%')
  },
  h8: {
    height: (0, _responsive.heightPercentageToDP)('8%')
  },
  h9: {
    height: (0, _responsive.heightPercentageToDP)('9%')
  },
  h10: {
    height: (0, _responsive.heightPercentageToDP)('10%')
  },
  h10p: {
    height: 10
  },
  h12: {
    height: (0, _responsive.heightPercentageToDP)('12%')
  },
  h12p: {
    height: '12%'
  },
  h13: {
    height: (0, _responsive.heightPercentageToDP)('13%')
  },
  h14: {
    height: (0, _responsive.heightPercentageToDP)('14%')
  },
  h15: {
    height: (0, _responsive.heightPercentageToDP)('15%')
  },
  h15p: {
    height: '15%'
  },
  h16: {
    height: (0, _responsive.heightPercentageToDP)('16%')
  },
  h16p: {
    height: '16%'
  },
  h17: {
    height: (0, _responsive.heightPercentageToDP)('17%')
  },
  h17p: {
    height: '17%'
  },
  h18: {
    height: (0, _responsive.heightPercentageToDP)('18%')
  },
  h18p: {
    height: '18%'
  },
  h20: {
    height: (0, _responsive.heightPercentageToDP)('20%')
  },
  h20p: {
    height: '20%'
  },
  h22: {
    height: (0, _responsive.heightPercentageToDP)('22%')
  },
  h23: {
    height: (0, _responsive.heightPercentageToDP)('23%')
  },
  h24: {
    height: (0, _responsive.heightPercentageToDP)('24%')
  },
  h25: {
    height: (0, _responsive.heightPercentageToDP)('25%')
  },
  h26: {
    height: (0, _responsive.heightPercentageToDP)('26%')
  },
  h27: {
    height: (0, _responsive.heightPercentageToDP)('27%')
  },
  h28: {
    height: (0, _responsive.heightPercentageToDP)('28%')
  },
  h30: {
    height: (0, _responsive.heightPercentageToDP)('30%')
  },
  h30p: {
    height: '30%'
  },
  h32: {
    height: (0, _responsive.heightPercentageToDP)('32%')
  },
  h33: {
    height: (0, _responsive.heightPercentageToDP)('33%')
  },
  h35: {
    height: (0, _responsive.heightPercentageToDP)('35%')
  },
  h36: {
    height: (0, _responsive.heightPercentageToDP)('36%')
  },
  h37: {
    height: (0, _responsive.heightPercentageToDP)('37%')
  },
  h38: {
    height: (0, _responsive.heightPercentageToDP)('38%')
  },
  h39: {
    height: (0, _responsive.heightPercentageToDP)('39%')
  },
  h40: {
    height: (0, _responsive.heightPercentageToDP)('40%')
  },
  h40p: {
    height: 40
  },
  h41: {
    height: (0, _responsive.heightPercentageToDP)('41%')
  },
  h42: {
    height: (0, _responsive.heightPercentageToDP)('42%')
  },
  h43: {
    height: (0, _responsive.heightPercentageToDP)('43%')
  },
  h44: {
    height: (0, _responsive.heightPercentageToDP)('44%')
  },
  h45: {
    height: (0, _responsive.heightPercentageToDP)('45%')
  },
  h46: {
    height: (0, _responsive.heightPercentageToDP)('46%')
  },
  h47: {
    height: (0, _responsive.heightPercentageToDP)('47%')
  },
  h48: {
    height: (0, _responsive.heightPercentageToDP)('48%')
  },
  h50: {
    height: (0, _responsive.heightPercentageToDP)('50%')
  },
  h45p: {
    height: 45
  },
  h50p: {
    height: 50
  },
  h55: {
    height: (0, _responsive.heightPercentageToDP)('55%')
  },
  h55p: {
    height: 55
  },
  h60: {
    height: (0, _responsive.heightPercentageToDP)('60%')
  },
  h60p: {
    height: 60
  },
  h65: {
    height: (0, _responsive.heightPercentageToDP)('65%')
  },
  h65p: {
    height: 65
  },
  h68: {
    height: (0, _responsive.heightPercentageToDP)('68%')
  },
  h70: {
    height: (0, _responsive.heightPercentageToDP)('70%')
  },
  h70p: {
    height: 70
  },
  h73: {
    height: (0, _responsive.heightPercentageToDP)('73%')
  },
  h75: {
    height: (0, _responsive.heightPercentageToDP)('75%')
  },
  h80: {
    height: (0, _responsive.heightPercentageToDP)('80%')
  },
  h80p: {
    height: 80
  },
  h81: {
    height: (0, _responsive.heightPercentageToDP)('81%')
  },
  h82: {
    height: (0, _responsive.heightPercentageToDP)('82%')
  },
  h83: {
    height: (0, _responsive.heightPercentageToDP)('83%')
  },
  h83p: {
    height: 83
  },
  h84: {
    height: (0, _responsive.heightPercentageToDP)('84%')
  },
  h84p: {
    height: '84%'
  },
  h85: {
    height: (0, _responsive.heightPercentageToDP)('85%')
  },
  h85p: {
    height: '85%'
  },
  h86: {
    height: (0, _responsive.heightPercentageToDP)('86%')
  },
  h87: {
    height: (0, _responsive.heightPercentageToDP)('87%')
  },
  h88: {
    height: (0, _responsive.heightPercentageToDP)('88%')
  },
  h89: {
    height: (0, _responsive.heightPercentageToDP)('89%')
  },
  h90: {
    height: (0, _responsive.heightPercentageToDP)('90%')
  },
  h90p: {
    height: '90%'
  },
  h95: {
    height: (0, _responsive.heightPercentageToDP)('95%')
  },
  h96: {
    height: (0, _responsive.heightPercentageToDP)('96%')
  },
  h98: {
    height: (0, _responsive.heightPercentageToDP)('98%')
  },
  h100: {
    height: (0, _responsive.heightPercentageToDP)('100%')
  },
  h10pe: {
    height: '10%'
  },
  h20pe: {
    height: '20%'
  },
  h25pe: {
    height: '25%'
  },
  h30pe: {
    height: '30%'
  },
  h40pe: {
    height: '40%'
  },
  h50pe: {
    height: '50%'
  },
  h60pe: {
    height: '60%'
  },
  h70pe: {
    height: '70%'
  },
  h80pe: {
    height: '80%'
  },
  h90pe: {
    height: '90%'
  },
  h100pe: {
    height: '100%'
  },
  w10pe: {
    width: '10%'
  },
  w15pe: {
    width: '15%'
  },
  w20pe: {
    width: '20%'
  },
  w25pe: {
    width: '25%'
  },
  w30pe: {
    width: '30%'
  },
  w40pe: {
    width: '40%'
  },
  w50pe: {
    width: '50%'
  },
  w60pe: {
    width: '60%'
  },
  w65pe: {
    width: '65%'
  },
  w70pe: {
    width: '70%'
  },
  w75pe: {
    width: '75%'
  },
  w80pe: {
    width: '80%'
  },
  w90pe: {
    width: '90%'
  },
  w100pe: {
    width: '100%'
  },
  h100p: {
    width: '100%'
  },
  W1: {
    width: (0, _responsive.widthPercentageToDP)('1%')
  },
  w2: {
    width: (0, _responsive.widthPercentageToDP)('2%')
  },
  w3: {
    width: (0, _responsive.widthPercentageToDP)('3%')
  },
  w4: {
    width: (0, _responsive.widthPercentageToDP)('4%')
  },
  w5: {
    width: (0, _responsive.widthPercentageToDP)('5%')
  },
  w6: {
    width: (0, _responsive.widthPercentageToDP)('6%')
  },
  w7: {
    width: (0, _responsive.widthPercentageToDP)('7%')
  },
  w8: {
    width: (0, _responsive.widthPercentageToDP)('8%')
  },
  w9: {
    width: (0, _responsive.widthPercentageToDP)('9%')
  },
  w10: {
    width: (0, _responsive.widthPercentageToDP)('10%')
  },
  w11: {
    width: (0, _responsive.widthPercentageToDP)('11%')
  },
  w12: {
    width: (0, _responsive.widthPercentageToDP)('12%')
  },
  w15: {
    width: (0, _responsive.widthPercentageToDP)('15%')
  },
  w16: {
    width: (0, _responsive.widthPercentageToDP)('16%')
  },
  w18: {
    width: (0, _responsive.widthPercentageToDP)('18%')
  },
  w19: {
    width: (0, _responsive.widthPercentageToDP)('19%')
  },
  w20: {
    width: (0, _responsive.widthPercentageToDP)('20%')
  },
  w20p: {
    width: '20%'
  },
  w21: {
    width: (0, _responsive.widthPercentageToDP)('21%')
  },
  w22: {
    width: (0, _responsive.widthPercentageToDP)('22%')
  },
  w23: {
    width: (0, _responsive.widthPercentageToDP)('23%')
  },
  w24: {
    width: (0, _responsive.widthPercentageToDP)('24%')
  },
  w25: {
    width: (0, _responsive.widthPercentageToDP)('25%')
  },
  w26: {
    width: (0, _responsive.widthPercentageToDP)('26%')
  },
  w27: {
    width: (0, _responsive.widthPercentageToDP)('27%')
  },
  w28: {
    width: (0, _responsive.widthPercentageToDP)('28%')
  },
  w30: {
    width: (0, _responsive.widthPercentageToDP)('30%')
  },
  w30p: {
    width: 30
  },
  w32: {
    width: (0, _responsive.widthPercentageToDP)('32%')
  },
  w33: {
    width: (0, _responsive.widthPercentageToDP)('33.333333%')
  },
  w36: {
    width: (0, _responsive.widthPercentageToDP)('36%')
  },
  w38: {
    width: (0, _responsive.widthPercentageToDP)('38%')
  },
  w40: {
    width: (0, _responsive.widthPercentageToDP)('40%')
  },
  w40p: {
    width: 40
  },
  w41: {
    width: (0, _responsive.widthPercentageToDP)('41%')
  },
  w42: {
    width: (0, _responsive.widthPercentageToDP)('42%')
  },
  w43: {
    width: (0, _responsive.widthPercentageToDP)('43%')
  },
  w44: {
    width: (0, _responsive.widthPercentageToDP)('44%')
  },
  w45: {
    width: (0, _responsive.widthPercentageToDP)('45%')
  },
  w46: {
    width: (0, _responsive.widthPercentageToDP)('46%')
  },
  w48: {
    width: (0, _responsive.widthPercentageToDP)('48%')
  },
  w50: {
    width: (0, _responsive.widthPercentageToDP)('50%')
  },
  w50p: {
    width: 50
  },
  w55: {
    width: (0, _responsive.widthPercentageToDP)('55%')
  },
  w52: {
    width: (0, _responsive.widthPercentageToDP)('52%')
  },
  w53: {
    width: (0, _responsive.widthPercentageToDP)('53%')
  },
  w54: {
    width: (0, _responsive.widthPercentageToDP)('54%')
  },
  w58: {
    width: (0, _responsive.widthPercentageToDP)('58%')
  },
  w60: {
    width: (0, _responsive.widthPercentageToDP)('60%')
  },
  w60p: {
    width: 60
  },
  w65: {
    width: (0, _responsive.widthPercentageToDP)('65%')
  },
  w68: {
    width: (0, _responsive.widthPercentageToDP)('68%')
  },
  w70: {
    width: (0, _responsive.widthPercentageToDP)('70%')
  },
  w70p: {
    width: 70
  },
  w75: {
    width: (0, _responsive.widthPercentageToDP)('75%')
  },
  w75p: {
    width: 75
  },
  w80: {
    width: (0, _responsive.widthPercentageToDP)('80%')
  },
  w80p: {
    width: 80
  },
  w88: {
    width: (0, _responsive.widthPercentageToDP)('88%')
  },
  w90: {
    width: (0, _responsive.widthPercentageToDP)('90%')
  },
  w92: {
    width: (0, _responsive.widthPercentageToDP)('92%')
  },
  w94: {
    width: (0, _responsive.widthPercentageToDP)('94%')
  },
  w95: {
    width: (0, _responsive.widthPercentageToDP)('95%')
  },
  w96: {
    width: (0, _responsive.widthPercentageToDP)('96%')
  },
  w98: {
    width: (0, _responsive.widthPercentageToDP)('98%')
  },
  w100: {
    width: (0, _responsive.widthPercentageToDP)('100%')
  },
  w100p: {
    width: '100%'
  },
  b1: {
    bottom: (0, _responsive.heightPercentageToDP)('1%')
  },
  b20p: {
    bottom: 20
  },
  b50p: {
    bottom: 50
  },
  b0: {
    bottom: 0
  },
  b50: {
    bottom: 50
  },
  b60: {
    bottom: 60
  },
  b70: {
    bottom: 70
  },
  b80: {
    bottom: 80
  },
  b90: {
    bottom: 90
  },
  b100: {
    bottom: 100
  },
  w5h5: {
    width: (0, _responsive.widthPercentageToDP)('5%'),
    height: (0, _responsive.heightPercentageToDP)('5%')
  },
  w10h5: {
    width: (0, _responsive.widthPercentageToDP)('10%'),
    height: (0, _responsive.heightPercentageToDP)('5%')
  },
  w70h18: {
    width: (0, _responsive.widthPercentageToDP)('70%'),
    height: (0, _responsive.heightPercentageToDP)('18%')
  },
  w20h18: {
    width: (0, _responsive.widthPercentageToDP)('20%'),
    height: (0, _responsive.heightPercentageToDP)('18%')
  },
  w65h18: {
    width: (0, _responsive.widthPercentageToDP)('65%'),
    height: (0, _responsive.heightPercentageToDP)('18%')
  },
  w70h5: {
    width: (0, _responsive.widthPercentageToDP)('70%'),
    height: (0, _responsive.heightPercentageToDP)('5%')
  },
  w65h5: {
    width: (0, _responsive.widthPercentageToDP)('65%'),
    height: (0, _responsive.heightPercentageToDP)('5%')
  },
  w70h10: {
    width: (0, _responsive.widthPercentageToDP)('70%'),
    height: (0, _responsive.heightPercentageToDP)('10%')
  },
  w25h18: {
    width: (0, _responsive.widthPercentageToDP)('25%'),
    height: (0, _responsive.heightPercentageToDP)('18%')
  },
  w15h18: {
    width: (0, _responsive.widthPercentageToDP)('15%'),
    height: (0, _responsive.heightPercentageToDP)('18%')
  },
  w100h15: {
    width: (0, _responsive.widthPercentageToDP)('100%'),
    height: (0, _responsive.heightPercentageToDP)('15%')
  },
  w100h55: {
    width: (0, _responsive.widthPercentageToDP)('100%'),
    height: (0, _responsive.heightPercentageToDP)('55%')
  },
  w40h5: {
    width: (0, _responsive.widthPercentageToDP)('40%'),
    height: (0, _responsive.heightPercentageToDP)('5%')
  },
  w40h10: {
    width: (0, _responsive.widthPercentageToDP)('40%'),
    height: (0, _responsive.heightPercentageToDP)('10%')
  },
  w50h10: {
    width: (0, _responsive.widthPercentageToDP)('50%'),
    height: (0, _responsive.heightPercentageToDP)('10%')
  },
  w50h50: {
    width: (0, _responsive.widthPercentageToDP)('50%'),
    height: (0, _responsive.heightPercentageToDP)('50%')
  },
  w100h5: {
    width: (0, _responsive.widthPercentageToDP)('100%'),
    height: (0, _responsive.heightPercentageToDP)('5%')
  },
  w100h3: {
    width: (0, _responsive.widthPercentageToDP)('100%'),
    height: (0, _responsive.heightPercentageToDP)('3%')
  },
  w20h5: {
    width: (0, _responsive.widthPercentageToDP)('30%'),
    height: (0, _responsive.heightPercentageToDP)('5%')
  },
  w50h5: {
    width: (0, _responsive.widthPercentageToDP)('50%'),
    height: (0, _responsive.heightPercentageToDP)('5%')
  },
  w100h7: {
    width: (0, _responsive.widthPercentageToDP)('100%'),
    height: (0, _responsive.heightPercentageToDP)('7%')
  },
  w100h8: {
    width: (0, _responsive.widthPercentageToDP)('100%'),
    height: (0, _responsive.heightPercentageToDP)('8%')
  },
  w100h10: {
    width: (0, _responsive.widthPercentageToDP)('100%'),
    height: (0, _responsive.heightPercentageToDP)('10%')
  },
  w100h12: {
    width: (0, _responsive.widthPercentageToDP)('100%'),
    height: (0, _responsive.heightPercentageToDP)('12%')
  },
  w100h20: {
    width: (0, _responsive.widthPercentageToDP)('100%'),
    height: (0, _responsive.heightPercentageToDP)('20%')
  },
  w100h25: {
    width: (0, _responsive.widthPercentageToDP)('100%'),
    height: (0, _responsive.heightPercentageToDP)('25%')
  },
  w100h30: {
    width: (0, _responsive.widthPercentageToDP)('100%'),
    height: (0, _responsive.heightPercentageToDP)('30%')
  },
  w100h35: {
    width: (0, _responsive.widthPercentageToDP)('100%'),
    height: (0, _responsive.heightPercentageToDP)('35%')
  },
  w100h40: {
    width: (0, _responsive.widthPercentageToDP)('100%'),
    height: (0, _responsive.heightPercentageToDP)('40%')
  },
  w100h45: {
    width: (0, _responsive.widthPercentageToDP)('100%'),
    height: (0, _responsive.heightPercentageToDP)('45%')
  },
  w100h46: {
    width: (0, _responsive.widthPercentageToDP)('100%'),
    height: (0, _responsive.heightPercentageToDP)('46%')
  },
  w100h47: {
    width: (0, _responsive.widthPercentageToDP)('100%'),
    height: (0, _responsive.heightPercentageToDP)('47%')
  },
  w100h48: {
    width: (0, _responsive.widthPercentageToDP)('100%'),
    height: (0, _responsive.heightPercentageToDP)('48%')
  },
  w100h50: {
    width: (0, _responsive.widthPercentageToDP)('100%'),
    height: (0, _responsive.heightPercentageToDP)('50%')
  },
  w100h60: {
    width: (0, _responsive.widthPercentageToDP)('100%'),
    height: (0, _responsive.heightPercentageToDP)('60%')
  },
  w100h80: {
    width: (0, _responsive.widthPercentageToDP)('100%'),
    height: (0, _responsive.heightPercentageToDP)('80%')
  },
  w100h100: {
    width: (0, _responsive.widthPercentageToDP)('100%'),
    height: (0, _responsive.heightPercentageToDP)('100%')
  },
  w100h110: {
    width: (0, _responsive.widthPercentageToDP)('100%'),
    height: (0, _responsive.heightPercentageToDP)('110%')
  },
  w100h70: {
    width: (0, _responsive.widthPercentageToDP)('100%'),
    height: (0, _responsive.heightPercentageToDP)('70%')
  },
  w30h20: {
    width: (0, _responsive.widthPercentageToDP)('30%'),
    height: (0, _responsive.heightPercentageToDP)('20%')
  },
  w70h20: {
    width: (0, _responsive.widthPercentageToDP)('70%'),
    height: (0, _responsive.heightPercentageToDP)('20%')
  },
  w20h20: {
    width: (0, _responsive.widthPercentageToDP)('20%'),
    height: (0, _responsive.heightPercentageToDP)('20%')
  },
  w60h20: {
    width: (0, _responsive.widthPercentageToDP)('60%'),
    height: (0, _responsive.heightPercentageToDP)('20%')
  },
  w100h18: {
    width: (0, _responsive.widthPercentageToDP)('100%'),
    height: (0, _responsive.heightPercentageToDP)('18%')
  },
  w35: {
    width: (0, _responsive.widthPercentageToDP)('35%')
  },
  p0: {
    padding: (0, _responsive.widthPercentageToDP)('0%')
  },
  p1: {
    padding: (0, _responsive.widthPercentageToDP)('1%')
  },
  p2: {
    padding: (0, _responsive.widthPercentageToDP)('2%')
  },
  p3: {
    padding: (0, _responsive.widthPercentageToDP)('3%')
  },
  p5p: {
    padding: '5%'
  },
  p20p: {
    padding: 20
  },
  m1: {
    margin: (0, _responsive.widthPercentageToDP)('1%')
  },
  m2: {
    margin: (0, _responsive.widthPercentageToDP)('2%')
  },
  m5: {
    margin: (0, _responsive.heightPercentageToDP)('5%')
  },
  mt1: {
    marginTop: (0, _responsive.heightPercentageToDP)('1%')
  },
  mt2: {
    marginTop: (0, _responsive.heightPercentageToDP)('2%')
  },
  mt3: {
    marginTop: (0, _responsive.heightPercentageToDP)('3%')
  },
  mt3_2: {
    marginTop: (0, _responsive.heightPercentageToDP)('3.2%')
  },
  mt3_5: {
    marginTop: (0, _responsive.heightPercentageToDP)('3.5%')
  },
  mt4: {
    marginTop: (0, _responsive.heightPercentageToDP)('4%')
  },
  mt5: {
    marginTop: (0, _responsive.heightPercentageToDP)('5%')
  },
  mt6: {
    marginTop: (0, _responsive.heightPercentageToDP)('6%')
  },
  mt7: {
    marginTop: (0, _responsive.heightPercentageToDP)('7%')
  },
  mt8: {
    marginTop: (0, _responsive.heightPercentageToDP)('8%')
  },
  mt9: {
    marginTop: (0, _responsive.heightPercentageToDP)('9%')
  },
  mt10: {
    marginTop: (0, _responsive.heightPercentageToDP)('10%')
  },
  mt15: {
    marginTop: (0, _responsive.heightPercentageToDP)('15%')
  },
  mt16: {
    marginTop: (0, _responsive.heightPercentageToDP)('16%')
  },
  mt17: {
    marginTop: (0, _responsive.heightPercentageToDP)('17%')
  },
  mt18: {
    marginTop: (0, _responsive.heightPercentageToDP)('18%')
  },
  mt19: {
    marginTop: (0, _responsive.heightPercentageToDP)('19%')
  },
  mt20: {
    marginTop: (0, _responsive.heightPercentageToDP)('20%')
  },
  mt21: {
    marginTop: (0, _responsive.heightPercentageToDP)('21%')
  },
  mt22: {
    marginTop: (0, _responsive.heightPercentageToDP)('22%')
  },
  mt23: {
    marginTop: (0, _responsive.heightPercentageToDP)('23%')
  },
  mt25: {
    marginTop: (0, _responsive.heightPercentageToDP)('25%')
  },
  mt30: {
    marginTop: (0, _responsive.heightPercentageToDP)('30%')
  },
  mt100: {
    marginTop: (0, _responsive.heightPercentageToDP)('100%')
  },
  mt34: {
    marginTop: (0, _responsive.heightPercentageToDP)('34%')
  },
  mt35: {
    marginTop: (0, _responsive.heightPercentageToDP)('35%')
  },
  mt40: {
    marginTop: (0, _responsive.heightPercentageToDP)('40%')
  },
  mt45: {
    marginTop: (0, _responsive.heightPercentageToDP)('45%')
  },
  mt50: {
    marginTop: (0, _responsive.heightPercentageToDP)('50%')
  },
  mt55: {
    marginTop: (0, _responsive.heightPercentageToDP)('55%')
  },
  mt60: {
    marginTop: (0, _responsive.heightPercentageToDP)('60%')
  },
  mt65: {
    marginTop: (0, _responsive.heightPercentageToDP)('65%')
  },
  mt70: {
    marginTop: (0, _responsive.heightPercentageToDP)('70%')
  },
  mt75: {
    marginTop: (0, _responsive.heightPercentageToDP)('75%')
  },
  mt80: {
    marginTop: (0, _responsive.heightPercentageToDP)('80%')
  },
  mt85: {
    marginTop: (0, _responsive.heightPercentageToDP)('85%')
  },
  mt90: {
    marginTop: (0, _responsive.heightPercentageToDP)('90%')
  },
  mt95: {
    marginTop: (0, _responsive.heightPercentageToDP)('95%')
  },
  mb4: {
    marginBottom: (0, _responsive.heightPercentageToDP)('4%')
  },
  mb5: {
    marginBottom: (0, _responsive.heightPercentageToDP)('5%')
  },
  mb1: {
    marginBottom: (0, _responsive.heightPercentageToDP)('1%')
  },
  mb2: {
    marginBottom: (0, _responsive.heightPercentageToDP)('2%')
  },
  mb7: {
    marginBottom: (0, _responsive.heightPercentageToDP)('7%')
  },
  mb10: {
    marginBottom: (0, _responsive.heightPercentageToDP)('10%')
  },
  mb5p: {
    marginBottom: 5
  },
  mb10p: {
    marginBottom: 10
  },
  mb15: {
    marginBottom: (0, _responsive.heightPercentageToDP)('15%')
  },
  mb20: {
    marginBottom: (0, _responsive.heightPercentageToDP)('20%')
  },
  mb25: {
    marginBottom: (0, _responsive.heightPercentageToDP)('25%')
  },
  mb30: {
    marginBottom: (0, _responsive.heightPercentageToDP)('30%')
  },
  mb3: {
    marginBottom: (0, _responsive.heightPercentageToDP)('3%')
  },
  mb35: {
    marginBottom: (0, _responsive.heightPercentageToDP)('35%')
  },
  mb40: {
    marginBottom: (0, _responsive.heightPercentageToDP)('40%')
  },
  mb45: {
    marginBottom: (0, _responsive.heightPercentageToDP)('45%')
  },
  mb50: {
    marginBottom: (0, _responsive.heightPercentageToDP)('50%')
  },
  mb55: {
    marginBottom: (0, _responsive.heightPercentageToDP)('55%')
  },
  mb60: {
    marginBottom: (0, _responsive.heightPercentageToDP)('60%')
  },
  mb65: {
    marginBottom: (0, _responsive.heightPercentageToDP)('65%')
  },
  mb70: {
    marginBottom: (0, _responsive.heightPercentageToDP)('70%')
  },
  mb75: {
    marginBottom: (0, _responsive.heightPercentageToDP)('75%')
  },
  mb80: {
    marginBottom: (0, _responsive.heightPercentageToDP)('80%')
  },
  mb85: {
    marginBottom: (0, _responsive.heightPercentageToDP)('85%')
  },
  mb90: {
    marginBottom: (0, _responsive.heightPercentageToDP)('90%')
  },
  mb95: {
    marginBottom: (0, _responsive.heightPercentageToDP)('95%')
  },
  mb100: {
    marginBottom: (0, _responsive.heightPercentageToDP)('100%')
  },
  mr1: {
    marginRight: (0, _responsive.widthPercentageToDP)('1%')
  },
  mr2: {
    marginRight: (0, _responsive.widthPercentageToDP)('2%')
  },
  mr3: {
    marginRight: (0, _responsive.widthPercentageToDP)('3%')
  },
  mr5: {
    marginRight: (0, _responsive.widthPercentageToDP)('5%')
  },
  mr7: {
    marginRight: (0, _responsive.widthPercentageToDP)('7%')
  },
  mr10: {
    marginRight: (0, _responsive.widthPercentageToDP)('10%')
  },
  mr15: {
    marginRight: (0, _responsive.widthPercentageToDP)('15%')
  },
  mr20: {
    marginRight: (0, _responsive.widthPercentageToDP)('10%')
  },
  mr12_5: {
    marginRight: (0, _responsive.widthPercentageToDP)('12.5%')
  },
  mr25: {
    marginRight: (0, _responsive.widthPercentageToDP)('25%')
  },
  mr30: {
    marginRight: (0, _responsive.widthPercentageToDP)('30%')
  },
  mr55: {
    marginRight: (0, _responsive.widthPercentageToDP)('55%')
  },
  mr63: {
    marginRight: (0, _responsive.widthPercentageToDP)('63%')
  },
  mr70: {
    marginRight: (0, _responsive.widthPercentageToDP)('70%')
  },
  mr73: {
    marginRight: (0, _responsive.widthPercentageToDP)('73%')
  },
  ml1: {
    marginLeft: (0, _responsive.widthPercentageToDP)('1%')
  },
  ml2: {
    marginLeft: (0, _responsive.widthPercentageToDP)('2%')
  },
  ml3: {
    marginLeft: (0, _responsive.widthPercentageToDP)('3%')
  },
  ml4: {
    marginLeft: (0, _responsive.widthPercentageToDP)('4%')
  },
  ml7: {
    marginLeft: (0, _responsive.widthPercentageToDP)('7%')
  },
  ml10: {
    marginLeft: (0, _responsive.widthPercentageToDP)('10%')
  },
  ml15: {
    marginLeft: (0, _responsive.widthPercentageToDP)('15%')
  },
  ml16: {
    marginLeft: (0, _responsive.widthPercentageToDP)('16%')
  },
  ml17: {
    marginLeft: (0, _responsive.widthPercentageToDP)('17%')
  },
  ml18: {
    marginLeft: (0, _responsive.widthPercentageToDP)('18%')
  },
  ml19: {
    marginLeft: (0, _responsive.widthPercentageToDP)('19%')
  },
  ml20: {
    marginLeft: (0, _responsive.widthPercentageToDP)('20%')
  },
  ml23: {
    marginLeft: (0, _responsive.widthPercentageToDP)('23%')
  },
  ml25: {
    marginLeft: (0, _responsive.widthPercentageToDP)('25%')
  },
  ml30: {
    marginLeft: (0, _responsive.widthPercentageToDP)('30%')
  },
  ml32: {
    marginLeft: (0, _responsive.widthPercentageToDP)('32%')
  },
  ml35: {
    marginLeft: (0, _responsive.widthPercentageToDP)('35%')
  },
  ml40: {
    marginLeft: (0, _responsive.widthPercentageToDP)('40%')
  },
  ml50: {
    marginLeft: (0, _responsive.widthPercentageToDP)('50%')
  },
  ml55: {
    marginLeft: (0, _responsive.widthPercentageToDP)('55%')
  },
  ml60: {
    marginLeft: (0, _responsive.widthPercentageToDP)('60%')
  },
  ml63: {
    marginLeft: (0, _responsive.widthPercentageToDP)('63%')
  },
  ml67: {
    marginLeft: (0, _responsive.widthPercentageToDP)('67%')
  },
  ml12_5: {
    marginLeft: (0, _responsive.widthPercentageToDP)('12.5%')
  },
  ml5: {
    marginLeft: (0, _responsive.widthPercentageToDP)('5%')
  },
  pt1: {
    paddingTop: (0, _responsive.heightPercentageToDP)('1%')
  },
  pt2: {
    paddingTop: (0, _responsive.heightPercentageToDP)('2%')
  },
  pt3: {
    paddingTop: (0, _responsive.heightPercentageToDP)('3%')
  },
  pt4: {
    paddingTop: (0, _responsive.heightPercentageToDP)('4%')
  },
  pt5: {
    paddingTop: (0, _responsive.heightPercentageToDP)('5%')
  },
  pt6: {
    paddingTop: (0, _responsive.heightPercentageToDP)('6%')
  },
  pt7: {
    paddingTop: (0, _responsive.heightPercentageToDP)('7%')
  },
  pt8: {
    paddingTop: (0, _responsive.heightPercentageToDP)('8%')
  },
  pt9: {
    paddingTop: (0, _responsive.heightPercentageToDP)('9%')
  },
  pt10: {
    paddingTop: (0, _responsive.heightPercentageToDP)('10%')
  },
  pt20: {
    paddingTop: (0, _responsive.heightPercentageToDP)('20%')
  },
  pb1: {
    paddingBottom: (0, _responsive.heightPercentageToDP)('1%')
  },
  pb2: {
    paddingBottom: (0, _responsive.heightPercentageToDP)('2%')
  },
  pb3: {
    paddingBottom: (0, _responsive.heightPercentageToDP)('3%')
  },
  pb4: {
    paddingBottom: (0, _responsive.heightPercentageToDP)('4%')
  },
  pb5: {
    paddingBottom: (0, _responsive.heightPercentageToDP)('5%')
  },
  pb10: {
    paddingBottom: (0, _responsive.heightPercentageToDP)('10%')
  },
  PL10: {
    paddingLeft: (0, _responsive.widthPercentageToDP)('10%')
  },
  PR10: {
    paddingRight: (0, _responsive.widthPercentageToDP)('10%')
  },
  // Flex
  col: {
    flexDirection: 'column'
  },
  colRl: {
    flexDirection: 'column-reverse'
  },
  row: {
    flexDirection: 'row'
  },
  rowRl: {
    flexDirection: !isRTL ? 'row' : 'row-reverse'
  },
  fs: {
    justifyContent: 'flex-start'
  },
  fsRl: {
    justifyContent: !isRTL ? 'flex-start' : 'flex-end'
  },
  fc: {
    justifyContent: 'center'
  },
  fe: {
    justifyContent: 'flex-end'
  },
  feRl: {
    justifyContent: !isRTL ? 'flex-end' : 'flex-start'
  },
  as: {
    alignItems: 'flex-start'
  },
  asRl: {
    alignItems: !isRTL ? 'flex-start' : 'flex-end'
  },
  ac: {
    alignItems: 'center'
  },
  ae: {
    alignItems: 'flex-end'
  },
  aeRl: {
    alignItems: !isRTL ? 'flex-end' : 'flex-start'
  },
  sb: {
    justifyContent: 'space-between'
  },
  sa: {
    justifyContent: 'space-around'
  },
  fw: {
    flexWrap: 'wrap'
  },
  // Fontsize
  fos18: {
    fontSize: (0, _responsive.widthPercentageToDP)('18%')
  },
  fos16: {
    fontSize: (0, _responsive.widthPercentageToDP)('16%')
  },
  fos14: {
    fontSize: (0, _responsive.widthPercentageToDP)('14%')
  },
  fos12: {
    fontSize: (0, _responsive.widthPercentageToDP)('12%')
  },
  fos10: {
    fontSize: (0, _responsive.widthPercentageToDP)('10%')
  },
  fos9: {
    fontSize: (0, _responsive.widthPercentageToDP)('9%')
  },
  fos8: {
    fontSize: (0, _responsive.widthPercentageToDP)('8%')
  },
  fos7: {
    fontSize: (0, _responsive.widthPercentageToDP)('7%')
  },
  fos6: {
    fontSize: (0, _responsive.widthPercentageToDP)('6%')
  },
  fos5: {
    fontSize: (0, _responsive.widthPercentageToDP)('5%')
  },
  fos4: {
    fontSize: (0, _responsive.widthPercentageToDP)('4%')
  },
  fos3: {
    fontSize: (0, _responsive.widthPercentageToDP)('3%')
  },
  fos2_5: {
    fontSize: (0, _responsive.widthPercentageToDP)('2.5%')
  },
  fos2: {
    fontSize: (0, _responsive.widthPercentageToDP)('2%')
  },
  fos1: {
    fontSize: (0, _responsive.widthPercentageToDP)('1%')
  },
  lh32: {
    lineHeight: (0, _responsive.widthPercentageToDP)('32%')
  },
  lh30: {
    lineHeight: (0, _responsive.widthPercentageToDP)('30%')
  },
  lh28: {
    lineHeight: (0, _responsive.widthPercentageToDP)('28%')
  },
  lh26: {
    lineHeight: (0, _responsive.widthPercentageToDP)('26%')
  },
  lh24: {
    lineHeight: (0, _responsive.widthPercentageToDP)('24%')
  },
  lh22: {
    lineHeight: (0, _responsive.widthPercentageToDP)('22%')
  },
  lh20: {
    lineHeight: (0, _responsive.widthPercentageToDP)('20%')
  },
  lh18: {
    lineHeight: (0, _responsive.widthPercentageToDP)('18%')
  },
  lh16: {
    lineHeight: (0, _responsive.widthPercentageToDP)('16%')
  },
  lh14: {
    lineHeight: (0, _responsive.widthPercentageToDP)('14%')
  },
  lh12: {
    lineHeight: (0, _responsive.widthPercentageToDP)('12%')
  },
  lh10: {
    lineHeight: (0, _responsive.widthPercentageToDP)('10%')
  },
  lh9: {
    lineHeight: (0, _responsive.widthPercentageToDP)('9%')
  },
  lh8: {
    lineHeight: (0, _responsive.widthPercentageToDP)('8%')
  },
  lh7: {
    lineHeight: (0, _responsive.widthPercentageToDP)('7%')
  },
  lh6: {
    lineHeight: (0, _responsive.widthPercentageToDP)('6%')
  },
  lh5: {
    lineHeight: (0, _responsive.widthPercentageToDP)('5%')
  },
  lh4: {
    lineHeight: (0, _responsive.widthPercentageToDP)('4%')
  },
  lh3: {
    lineHeight: (0, _responsive.widthPercentageToDP)('3%')
  },
  lh2: {
    lineHeight: (0, _responsive.widthPercentageToDP)('2%')
  },
  lh1: {
    lineHeight: (0, _responsive.widthPercentageToDP)('1%')
  },
  // Container
  cnt: {
    width: (0, _responsive.widthPercentageToDP)('100%'),
    height: (0, _responsive.heightPercentageToDP)('100%')
  },
  sect1: {
    flex: 1
  },
  sect2: {
    flex: 2
  },
  sect3: {
    flex: 3
  },
  sect4: {
    flex: 4
  },
  sect5: {
    flex: 5
  },
  sect6: {
    flex: 6
  },
  sect7: {
    flex: 7
  },
  sect8: {
    flex: 8
  },
  sect9: {
    flex: 9
  },
  sect10: {
    flex: 10
  },
  ofs: {
    overflow: 'scroll'
  },
  ofh: {
    overflow: 'hidden'
  },
  abs: {
    position: 'absolute'
  },
  t0: {
    top: 0
  },
  z10: {
    zIndex: 10
  },
  z11: {
    zIndex: 11
  },
  top50: {
    position: 'absolute',
    top: 150,
    zIndex: 999
  },
  w56px: {
    width: 56
  },
  h56px: {
    height: 56
  },
  t5: {
    top: 5
  },
  t10: {
    top: 10
  },
  t20: {
    top: 20
  },
  t25: {
    top: 25
  },
  t30: {
    top: 30
  },
  t40: {
    top: 40
  },
  t50: {
    top: 50
  },
  t60: {
    top: 60
  },
  t70: {
    top: 70
  },
  t80: {
    top: 80
  },
  t90: {
    top: 90
  },
  t100: {
    top: 100
  },
  t130: {
    top: 130
  },
  t140: {
    top: 140
  },
  t150: {
    top: 150
  },
  t10p: {
    top: (0, _responsive.heightPercentageToDP)('10%')
  },
  t20p: {
    top: (0, _responsive.heightPercentageToDP)('20%')
  },
  t30p: {
    top: (0, _responsive.heightPercentageToDP)('30%')
  },
  t40p: {
    top: (0, _responsive.heightPercentageToDP)('40%')
  },
  t50p: {
    top: (0, _responsive.heightPercentageToDP)('50%')
  },
  t60p: {
    top: (0, _responsive.heightPercentageToDP)('60%')
  },
  t70p: {
    top: (0, _responsive.heightPercentageToDP)('70%')
  },
  t80p: {
    top: (0, _responsive.heightPercentageToDP)('80%')
  },
  t90p: {
    top: (0, _responsive.heightPercentageToDP)('90%')
  },
  r0: {
    right: 0
  },
  r5: {
    right: 5
  },
  r10: {
    right: 10
  },
  r20: {
    right: 20
  },
  r30: {
    right: 30
  },
  r35: {
    right: 35
  },
  b10: {
    bottom: 10
  },
  b15: {
    bottom: 15
  },
  b20: {
    bottom: 20
  },
  b23: {
    bottom: 23
  },
  b25: {
    bottom: 25
  },
  b27: {
    bottom: 27
  },
  b30: {
    bottom: 30
  },
  b35: {
    bottom: 35
  },
  l5: {
    left: 5
  },
  l10: {
    left: 10
  },
  l15: {
    left: 15
  },
  l20: {
    left: 20
  },
  l30: {
    left: 30
  },
  l35: {
    left: 35
  },
  l40: {
    left: 40
  },
  l50: {
    left: 50
  },
  l10Rl: !isRTL ? {
    left: 10
  } : {
    right: 0
  },
  bottom10: {
    position: 'absolute',
    bottom: 10,
    zIndex: 999
  },
  bottom20: {
    position: 'absolute',
    bottom: 20,
    zIndex: 999
  },
  bottom25: {
    position: 'absolute',
    bottom: 25,
    zIndex: 999
  },
  bottom30: {
    position: 'absolute',
    bottom: 30,
    zIndex: 999
  },
  bottom40: {
    position: 'absolute',
    bottom: 40,
    zIndex: 999
  },
  bottom50: {
    position: 'absolute',
    bottom: 50,
    zIndex: 999
  },
  bottom60: {
    position: 'absolute',
    bottom: 60,
    zIndex: 999
  },
  bottom70: {
    position: 'absolute',
    bottom: 70,
    zIndex: 999
  },
  bottom80: {
    position: 'absolute',
    bottom: 80,
    zIndex: 999
  },
  bottom90: {
    position: 'absolute',
    bottom: 90,
    zIndex: 999
  },
  bottom100: {
    position: 'absolute',
    bottom: 100,
    zIndex: 999
  },
  right10: {
    position: 'absolute',
    right: 10,
    zIndex: 999
  },
  right30: {
    position: 'absolute',
    right: 30,
    zIndex: 999
  },
  right70: {
    position: 'absolute',
    right: 70,
    zIndex: 999
  },
  minh0: {
    minHeight: 0
  },
  minh1: {
    minHeight: (0, _responsive.widthPercentageToDP)('1%')
  },
  minh2: {
    minHeight: (0, _responsive.widthPercentageToDP)('2%')
  },
  minh3: {
    minHeight: (0, _responsive.widthPercentageToDP)('3%')
  },
  minh4: {
    minHeight: (0, _responsive.widthPercentageToDP)('4%')
  },
  minh5: {
    minHeight: (0, _responsive.widthPercentageToDP)('5%')
  },
  minh6: {
    minHeight: (0, _responsive.widthPercentageToDP)('6%')
  },
  minh7: {
    minHeight: (0, _responsive.widthPercentageToDP)('7%')
  },
  minh8: {
    minHeight: (0, _responsive.widthPercentageToDP)('8%')
  },
  minh9: {
    minHeight: (0, _responsive.widthPercentageToDP)('9%')
  },
  minh10: {
    minHeight: (0, _responsive.widthPercentageToDP)('10%')
  },
  maxh1: {
    maxHeight: (0, _responsive.widthPercentageToDP)('1%')
  },
  maxh2: {
    maxHeight: (0, _responsive.widthPercentageToDP)('2%')
  },
  maxh3: {
    maxHeight: (0, _responsive.widthPercentageToDP)('3%')
  },
  maxh4: {
    maxHeight: (0, _responsive.widthPercentageToDP)('4%')
  },
  maxh5: {
    maxHeight: (0, _responsive.widthPercentageToDP)('5%')
  },
  maxh6: {
    maxHeight: (0, _responsive.widthPercentageToDP)('6%')
  },
  maxh7: {
    maxHeight: (0, _responsive.widthPercentageToDP)('7%')
  },
  maxh8: {
    maxHeight: (0, _responsive.widthPercentageToDP)('8%')
  },
  maxh9: {
    maxHeight: (0, _responsive.widthPercentageToDP)('9%')
  },
  maxh10: {
    maxHeight: (0, _responsive.widthPercentageToDP)('10%')
  },
  maxh20: {
    maxHeight: (0, _responsive.widthPercentageToDP)('20%')
  },
  maxh25: {
    maxHeight: (0, _responsive.widthPercentageToDP)('25%')
  },
  pageContainer: {
    flex: 1,
    width: (0, _responsive.widthPercentageToDP)('100%'),
    height: (0, _responsive.heightPercentageToDP)('100%')
  },
  tal: {
    textAlign: 'left'
  },
  talRl: {
    textAlign: !isRTL ? 'left' : 'right'
  },
  tac: {
    textAlign: 'center'
  },
  tar: {
    textAlign: 'right'
  },
  tarRl: {
    textAlign: !isRTL ? 'right' : 'left'
  },
  // border radius
  brdr0: {
    borderRadius: 0
  },
  brdr3: {
    borderRadius: 3
  },
  brdr8: {
    borderRadius: 8
  },
  brdrTl3: {
    borderTopLeftRadius: 3
  },
  brdrTr3: {
    borderTopRightRadius: 3
  },
  brdrTl0: {
    borderTopLeftRadius: 0
  },
  brdrTr0: {
    borderTopRightRadius: 0
  },
  brdrBl0: {
    borderBottomLeftRadius: 0
  },
  brdrBr0: {
    borderBottomRightRadius: 0
  },
  brdrBl3: {
    borderBottomLeftRadius: 3
  },
  brdrBr3: {
    borderBottomRightRadius: 3
  },
  brdr6: {
    borderRadius: 6
  },
  brdrTl6: {
    borderTopLeftRadius: 6
  },
  brdrTr6: {
    borderTopRightRadius: 6
  },
  brdrBl6: {
    borderBottomLeftRadius: 6
  },
  brdrBr6: {
    borderBottomRightRadius: 6
  },
  brdr9: {
    borderRadius: 9
  },
  brdrTl9: {
    borderTopLeftRadius: 9
  },
  brdrTr9: {
    borderTopRightRadius: 9
  },
  brdrBl9: {
    borderBottomLeftRadius: 9
  },
  brdrBr9: {
    borderBottomRightRadius: 9
  },
  brdr12: {
    borderRadius: 12
  },
  brdr14: {
    borderRadius: 14
  },
  brdr16: {
    borderRadius: 16
  },
  brdrTl12: {
    borderTopLeftRadius: 12
  },
  brdrTr12: {
    borderTopRightRadius: 12
  },
  brdrBl12: {
    borderBottomLeftRadius: 12
  },
  brdrBr12: {
    borderBottomRightRadius: 12
  },
  brdr15: {
    borderRadius: 15
  },
  brdr30: {
    borderRadius: 30
  },
  brdr60: {
    borderRadius: 60
  },
  brdr90: {
    borderRadius: 90
  },
  brdr100: {
    borderRadius: 100
  }
});
var _default = vis;
exports.default = _default;
//# sourceMappingURL=vis.js.map