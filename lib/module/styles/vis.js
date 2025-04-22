import { StyleSheet, I18nManager } from 'react-native';
import Storage from '@react-native-async-storage/async-storage';
import { widthPercentageToDP, heightPercentageToDP } from './responsive';
let isRTL = I18nManager.isRTL;
const getLang = async () => await Storage.getItem('locale');
getLang().then(res => {
  if (res && ['iw', 'he', 'ar'].includes(res)) {
    isRTL = true;
  }
});
const vis = StyleSheet.create({
  isRTL: {
    direction: isRTL ? 'rtl' : 'ltr'
  },
  rtl: {
    direction: 'rtl',
    textAlign: 'right'
  },
  h1: {
    height: heightPercentageToDP('1%')
  },
  h2: {
    height: heightPercentageToDP('2%')
  },
  h3: {
    height: heightPercentageToDP('3%')
  },
  h4: {
    height: heightPercentageToDP('4%')
  },
  h5: {
    height: heightPercentageToDP('5%')
  },
  h5p: {
    height: '5%'
  },
  h6: {
    height: heightPercentageToDP('6%')
  },
  h7: {
    height: heightPercentageToDP('7%')
  },
  h8: {
    height: heightPercentageToDP('8%')
  },
  h9: {
    height: heightPercentageToDP('9%')
  },
  h10: {
    height: heightPercentageToDP('10%')
  },
  h10p: {
    height: 10
  },
  h12: {
    height: heightPercentageToDP('12%')
  },
  h12p: {
    height: '12%'
  },
  h13: {
    height: heightPercentageToDP('13%')
  },
  h14: {
    height: heightPercentageToDP('14%')
  },
  h15: {
    height: heightPercentageToDP('15%')
  },
  h15p: {
    height: '15%'
  },
  h16: {
    height: heightPercentageToDP('16%')
  },
  h16p: {
    height: '16%'
  },
  h17: {
    height: heightPercentageToDP('17%')
  },
  h17p: {
    height: '17%'
  },
  h18: {
    height: heightPercentageToDP('18%')
  },
  h18p: {
    height: '18%'
  },
  h20: {
    height: heightPercentageToDP('20%')
  },
  h20p: {
    height: '20%'
  },
  h22: {
    height: heightPercentageToDP('22%')
  },
  h23: {
    height: heightPercentageToDP('23%')
  },
  h24: {
    height: heightPercentageToDP('24%')
  },
  h25: {
    height: heightPercentageToDP('25%')
  },
  h26: {
    height: heightPercentageToDP('26%')
  },
  h27: {
    height: heightPercentageToDP('27%')
  },
  h28: {
    height: heightPercentageToDP('28%')
  },
  h30: {
    height: heightPercentageToDP('30%')
  },
  h30p: {
    height: '30%'
  },
  h32: {
    height: heightPercentageToDP('32%')
  },
  h33: {
    height: heightPercentageToDP('33%')
  },
  h35: {
    height: heightPercentageToDP('35%')
  },
  h36: {
    height: heightPercentageToDP('36%')
  },
  h37: {
    height: heightPercentageToDP('37%')
  },
  h38: {
    height: heightPercentageToDP('38%')
  },
  h39: {
    height: heightPercentageToDP('39%')
  },
  h40: {
    height: heightPercentageToDP('40%')
  },
  h40p: {
    height: 40
  },
  h41: {
    height: heightPercentageToDP('41%')
  },
  h42: {
    height: heightPercentageToDP('42%')
  },
  h43: {
    height: heightPercentageToDP('43%')
  },
  h44: {
    height: heightPercentageToDP('44%')
  },
  h45: {
    height: heightPercentageToDP('45%')
  },
  h46: {
    height: heightPercentageToDP('46%')
  },
  h47: {
    height: heightPercentageToDP('47%')
  },
  h48: {
    height: heightPercentageToDP('48%')
  },
  h50: {
    height: heightPercentageToDP('50%')
  },
  h45p: {
    height: 45
  },
  h50p: {
    height: 50
  },
  h55: {
    height: heightPercentageToDP('55%')
  },
  h55p: {
    height: 55
  },
  h60: {
    height: heightPercentageToDP('60%')
  },
  h60p: {
    height: 60
  },
  h65: {
    height: heightPercentageToDP('65%')
  },
  h65p: {
    height: 65
  },
  h68: {
    height: heightPercentageToDP('68%')
  },
  h70: {
    height: heightPercentageToDP('70%')
  },
  h70p: {
    height: 70
  },
  h73: {
    height: heightPercentageToDP('73%')
  },
  h75: {
    height: heightPercentageToDP('75%')
  },
  h80: {
    height: heightPercentageToDP('80%')
  },
  h80p: {
    height: 80
  },
  h81: {
    height: heightPercentageToDP('81%')
  },
  h82: {
    height: heightPercentageToDP('82%')
  },
  h83: {
    height: heightPercentageToDP('83%')
  },
  h83p: {
    height: 83
  },
  h84: {
    height: heightPercentageToDP('84%')
  },
  h84p: {
    height: '84%'
  },
  h85: {
    height: heightPercentageToDP('85%')
  },
  h85p: {
    height: '85%'
  },
  h86: {
    height: heightPercentageToDP('86%')
  },
  h87: {
    height: heightPercentageToDP('87%')
  },
  h88: {
    height: heightPercentageToDP('88%')
  },
  h89: {
    height: heightPercentageToDP('89%')
  },
  h90: {
    height: heightPercentageToDP('90%')
  },
  h90p: {
    height: '90%'
  },
  h95: {
    height: heightPercentageToDP('95%')
  },
  h96: {
    height: heightPercentageToDP('96%')
  },
  h98: {
    height: heightPercentageToDP('98%')
  },
  h100: {
    height: heightPercentageToDP('100%')
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
    width: widthPercentageToDP('1%')
  },
  w2: {
    width: widthPercentageToDP('2%')
  },
  w3: {
    width: widthPercentageToDP('3%')
  },
  w4: {
    width: widthPercentageToDP('4%')
  },
  w5: {
    width: widthPercentageToDP('5%')
  },
  w6: {
    width: widthPercentageToDP('6%')
  },
  w7: {
    width: widthPercentageToDP('7%')
  },
  w8: {
    width: widthPercentageToDP('8%')
  },
  w9: {
    width: widthPercentageToDP('9%')
  },
  w10: {
    width: widthPercentageToDP('10%')
  },
  w11: {
    width: widthPercentageToDP('11%')
  },
  w12: {
    width: widthPercentageToDP('12%')
  },
  w15: {
    width: widthPercentageToDP('15%')
  },
  w16: {
    width: widthPercentageToDP('16%')
  },
  w18: {
    width: widthPercentageToDP('18%')
  },
  w19: {
    width: widthPercentageToDP('19%')
  },
  w20: {
    width: widthPercentageToDP('20%')
  },
  w20p: {
    width: '20%'
  },
  w21: {
    width: widthPercentageToDP('21%')
  },
  w22: {
    width: widthPercentageToDP('22%')
  },
  w23: {
    width: widthPercentageToDP('23%')
  },
  w24: {
    width: widthPercentageToDP('24%')
  },
  w25: {
    width: widthPercentageToDP('25%')
  },
  w26: {
    width: widthPercentageToDP('26%')
  },
  w27: {
    width: widthPercentageToDP('27%')
  },
  w28: {
    width: widthPercentageToDP('28%')
  },
  w30: {
    width: widthPercentageToDP('30%')
  },
  w30p: {
    width: 30
  },
  w32: {
    width: widthPercentageToDP('32%')
  },
  w33: {
    width: widthPercentageToDP('33.333333%')
  },
  w36: {
    width: widthPercentageToDP('36%')
  },
  w38: {
    width: widthPercentageToDP('38%')
  },
  w40: {
    width: widthPercentageToDP('40%')
  },
  w40p: {
    width: 40
  },
  w41: {
    width: widthPercentageToDP('41%')
  },
  w42: {
    width: widthPercentageToDP('42%')
  },
  w43: {
    width: widthPercentageToDP('43%')
  },
  w44: {
    width: widthPercentageToDP('44%')
  },
  w45: {
    width: widthPercentageToDP('45%')
  },
  w46: {
    width: widthPercentageToDP('46%')
  },
  w48: {
    width: widthPercentageToDP('48%')
  },
  w50: {
    width: widthPercentageToDP('50%')
  },
  w50p: {
    width: 50
  },
  w55: {
    width: widthPercentageToDP('55%')
  },
  w52: {
    width: widthPercentageToDP('52%')
  },
  w53: {
    width: widthPercentageToDP('53%')
  },
  w54: {
    width: widthPercentageToDP('54%')
  },
  w58: {
    width: widthPercentageToDP('58%')
  },
  w60: {
    width: widthPercentageToDP('60%')
  },
  w60p: {
    width: 60
  },
  w65: {
    width: widthPercentageToDP('65%')
  },
  w68: {
    width: widthPercentageToDP('68%')
  },
  w70: {
    width: widthPercentageToDP('70%')
  },
  w70p: {
    width: 70
  },
  w75: {
    width: widthPercentageToDP('75%')
  },
  w75p: {
    width: 75
  },
  w80: {
    width: widthPercentageToDP('80%')
  },
  w80p: {
    width: 80
  },
  w88: {
    width: widthPercentageToDP('88%')
  },
  w90: {
    width: widthPercentageToDP('90%')
  },
  w92: {
    width: widthPercentageToDP('92%')
  },
  w94: {
    width: widthPercentageToDP('94%')
  },
  w95: {
    width: widthPercentageToDP('95%')
  },
  w96: {
    width: widthPercentageToDP('96%')
  },
  w98: {
    width: widthPercentageToDP('98%')
  },
  w100: {
    width: widthPercentageToDP('100%')
  },
  w100p: {
    width: '100%'
  },
  b1: {
    bottom: heightPercentageToDP('1%')
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
    width: widthPercentageToDP('5%'),
    height: heightPercentageToDP('5%')
  },
  w10h5: {
    width: widthPercentageToDP('10%'),
    height: heightPercentageToDP('5%')
  },
  w70h18: {
    width: widthPercentageToDP('70%'),
    height: heightPercentageToDP('18%')
  },
  w20h18: {
    width: widthPercentageToDP('20%'),
    height: heightPercentageToDP('18%')
  },
  w65h18: {
    width: widthPercentageToDP('65%'),
    height: heightPercentageToDP('18%')
  },
  w70h5: {
    width: widthPercentageToDP('70%'),
    height: heightPercentageToDP('5%')
  },
  w65h5: {
    width: widthPercentageToDP('65%'),
    height: heightPercentageToDP('5%')
  },
  w70h10: {
    width: widthPercentageToDP('70%'),
    height: heightPercentageToDP('10%')
  },
  w25h18: {
    width: widthPercentageToDP('25%'),
    height: heightPercentageToDP('18%')
  },
  w15h18: {
    width: widthPercentageToDP('15%'),
    height: heightPercentageToDP('18%')
  },
  w100h15: {
    width: widthPercentageToDP('100%'),
    height: heightPercentageToDP('15%')
  },
  w100h55: {
    width: widthPercentageToDP('100%'),
    height: heightPercentageToDP('55%')
  },
  w40h5: {
    width: widthPercentageToDP('40%'),
    height: heightPercentageToDP('5%')
  },
  w40h10: {
    width: widthPercentageToDP('40%'),
    height: heightPercentageToDP('10%')
  },
  w50h10: {
    width: widthPercentageToDP('50%'),
    height: heightPercentageToDP('10%')
  },
  w50h50: {
    width: widthPercentageToDP('50%'),
    height: heightPercentageToDP('50%')
  },
  w100h5: {
    width: widthPercentageToDP('100%'),
    height: heightPercentageToDP('5%')
  },
  w100h3: {
    width: widthPercentageToDP('100%'),
    height: heightPercentageToDP('3%')
  },
  w20h5: {
    width: widthPercentageToDP('30%'),
    height: heightPercentageToDP('5%')
  },
  w50h5: {
    width: widthPercentageToDP('50%'),
    height: heightPercentageToDP('5%')
  },
  w100h7: {
    width: widthPercentageToDP('100%'),
    height: heightPercentageToDP('7%')
  },
  w100h8: {
    width: widthPercentageToDP('100%'),
    height: heightPercentageToDP('8%')
  },
  w100h10: {
    width: widthPercentageToDP('100%'),
    height: heightPercentageToDP('10%')
  },
  w100h12: {
    width: widthPercentageToDP('100%'),
    height: heightPercentageToDP('12%')
  },
  w100h20: {
    width: widthPercentageToDP('100%'),
    height: heightPercentageToDP('20%')
  },
  w100h25: {
    width: widthPercentageToDP('100%'),
    height: heightPercentageToDP('25%')
  },
  w100h30: {
    width: widthPercentageToDP('100%'),
    height: heightPercentageToDP('30%')
  },
  w100h35: {
    width: widthPercentageToDP('100%'),
    height: heightPercentageToDP('35%')
  },
  w100h40: {
    width: widthPercentageToDP('100%'),
    height: heightPercentageToDP('40%')
  },
  w100h45: {
    width: widthPercentageToDP('100%'),
    height: heightPercentageToDP('45%')
  },
  w100h46: {
    width: widthPercentageToDP('100%'),
    height: heightPercentageToDP('46%')
  },
  w100h47: {
    width: widthPercentageToDP('100%'),
    height: heightPercentageToDP('47%')
  },
  w100h48: {
    width: widthPercentageToDP('100%'),
    height: heightPercentageToDP('48%')
  },
  w100h50: {
    width: widthPercentageToDP('100%'),
    height: heightPercentageToDP('50%')
  },
  w100h60: {
    width: widthPercentageToDP('100%'),
    height: heightPercentageToDP('60%')
  },
  w100h80: {
    width: widthPercentageToDP('100%'),
    height: heightPercentageToDP('80%')
  },
  w100h100: {
    width: widthPercentageToDP('100%'),
    height: heightPercentageToDP('100%')
  },
  w100h110: {
    width: widthPercentageToDP('100%'),
    height: heightPercentageToDP('110%')
  },
  w100h70: {
    width: widthPercentageToDP('100%'),
    height: heightPercentageToDP('70%')
  },
  w30h20: {
    width: widthPercentageToDP('30%'),
    height: heightPercentageToDP('20%')
  },
  w70h20: {
    width: widthPercentageToDP('70%'),
    height: heightPercentageToDP('20%')
  },
  w20h20: {
    width: widthPercentageToDP('20%'),
    height: heightPercentageToDP('20%')
  },
  w60h20: {
    width: widthPercentageToDP('60%'),
    height: heightPercentageToDP('20%')
  },
  w100h18: {
    width: widthPercentageToDP('100%'),
    height: heightPercentageToDP('18%')
  },
  w35: {
    width: widthPercentageToDP('35%')
  },
  p0: {
    padding: widthPercentageToDP('0%')
  },
  p1: {
    padding: widthPercentageToDP('1%')
  },
  p2: {
    padding: widthPercentageToDP('2%')
  },
  p3: {
    padding: widthPercentageToDP('3%')
  },
  p5p: {
    padding: '5%'
  },
  p20p: {
    padding: 20
  },
  m1: {
    margin: widthPercentageToDP('1%')
  },
  m2: {
    margin: widthPercentageToDP('2%')
  },
  m5: {
    margin: heightPercentageToDP('5%')
  },
  mt1: {
    marginTop: heightPercentageToDP('1%')
  },
  mt2: {
    marginTop: heightPercentageToDP('2%')
  },
  mt3: {
    marginTop: heightPercentageToDP('3%')
  },
  mt3_2: {
    marginTop: heightPercentageToDP('3.2%')
  },
  mt3_5: {
    marginTop: heightPercentageToDP('3.5%')
  },
  mt4: {
    marginTop: heightPercentageToDP('4%')
  },
  mt5: {
    marginTop: heightPercentageToDP('5%')
  },
  mt6: {
    marginTop: heightPercentageToDP('6%')
  },
  mt7: {
    marginTop: heightPercentageToDP('7%')
  },
  mt8: {
    marginTop: heightPercentageToDP('8%')
  },
  mt9: {
    marginTop: heightPercentageToDP('9%')
  },
  mt10: {
    marginTop: heightPercentageToDP('10%')
  },
  mt15: {
    marginTop: heightPercentageToDP('15%')
  },
  mt16: {
    marginTop: heightPercentageToDP('16%')
  },
  mt17: {
    marginTop: heightPercentageToDP('17%')
  },
  mt18: {
    marginTop: heightPercentageToDP('18%')
  },
  mt19: {
    marginTop: heightPercentageToDP('19%')
  },
  mt20: {
    marginTop: heightPercentageToDP('20%')
  },
  mt21: {
    marginTop: heightPercentageToDP('21%')
  },
  mt22: {
    marginTop: heightPercentageToDP('22%')
  },
  mt23: {
    marginTop: heightPercentageToDP('23%')
  },
  mt25: {
    marginTop: heightPercentageToDP('25%')
  },
  mt30: {
    marginTop: heightPercentageToDP('30%')
  },
  mt100: {
    marginTop: heightPercentageToDP('100%')
  },
  mt34: {
    marginTop: heightPercentageToDP('34%')
  },
  mt35: {
    marginTop: heightPercentageToDP('35%')
  },
  mt40: {
    marginTop: heightPercentageToDP('40%')
  },
  mt45: {
    marginTop: heightPercentageToDP('45%')
  },
  mt50: {
    marginTop: heightPercentageToDP('50%')
  },
  mt55: {
    marginTop: heightPercentageToDP('55%')
  },
  mt60: {
    marginTop: heightPercentageToDP('60%')
  },
  mt65: {
    marginTop: heightPercentageToDP('65%')
  },
  mt70: {
    marginTop: heightPercentageToDP('70%')
  },
  mt75: {
    marginTop: heightPercentageToDP('75%')
  },
  mt80: {
    marginTop: heightPercentageToDP('80%')
  },
  mt85: {
    marginTop: heightPercentageToDP('85%')
  },
  mt90: {
    marginTop: heightPercentageToDP('90%')
  },
  mt95: {
    marginTop: heightPercentageToDP('95%')
  },
  mb4: {
    marginBottom: heightPercentageToDP('4%')
  },
  mb5: {
    marginBottom: heightPercentageToDP('5%')
  },
  mb1: {
    marginBottom: heightPercentageToDP('1%')
  },
  mb2: {
    marginBottom: heightPercentageToDP('2%')
  },
  mb7: {
    marginBottom: heightPercentageToDP('7%')
  },
  mb10: {
    marginBottom: heightPercentageToDP('10%')
  },
  mb5p: {
    marginBottom: 5
  },
  mb10p: {
    marginBottom: 10
  },
  mb15: {
    marginBottom: heightPercentageToDP('15%')
  },
  mb20: {
    marginBottom: heightPercentageToDP('20%')
  },
  mb25: {
    marginBottom: heightPercentageToDP('25%')
  },
  mb30: {
    marginBottom: heightPercentageToDP('30%')
  },
  mb3: {
    marginBottom: heightPercentageToDP('3%')
  },
  mb35: {
    marginBottom: heightPercentageToDP('35%')
  },
  mb40: {
    marginBottom: heightPercentageToDP('40%')
  },
  mb45: {
    marginBottom: heightPercentageToDP('45%')
  },
  mb50: {
    marginBottom: heightPercentageToDP('50%')
  },
  mb55: {
    marginBottom: heightPercentageToDP('55%')
  },
  mb60: {
    marginBottom: heightPercentageToDP('60%')
  },
  mb65: {
    marginBottom: heightPercentageToDP('65%')
  },
  mb70: {
    marginBottom: heightPercentageToDP('70%')
  },
  mb75: {
    marginBottom: heightPercentageToDP('75%')
  },
  mb80: {
    marginBottom: heightPercentageToDP('80%')
  },
  mb85: {
    marginBottom: heightPercentageToDP('85%')
  },
  mb90: {
    marginBottom: heightPercentageToDP('90%')
  },
  mb95: {
    marginBottom: heightPercentageToDP('95%')
  },
  mb100: {
    marginBottom: heightPercentageToDP('100%')
  },
  mr1: {
    marginRight: widthPercentageToDP('1%')
  },
  mr2: {
    marginRight: widthPercentageToDP('2%')
  },
  mr3: {
    marginRight: widthPercentageToDP('3%')
  },
  mr5: {
    marginRight: widthPercentageToDP('5%')
  },
  mr7: {
    marginRight: widthPercentageToDP('7%')
  },
  mr10: {
    marginRight: widthPercentageToDP('10%')
  },
  mr15: {
    marginRight: widthPercentageToDP('15%')
  },
  mr20: {
    marginRight: widthPercentageToDP('10%')
  },
  mr12_5: {
    marginRight: widthPercentageToDP('12.5%')
  },
  mr25: {
    marginRight: widthPercentageToDP('25%')
  },
  mr30: {
    marginRight: widthPercentageToDP('30%')
  },
  mr55: {
    marginRight: widthPercentageToDP('55%')
  },
  mr63: {
    marginRight: widthPercentageToDP('63%')
  },
  mr70: {
    marginRight: widthPercentageToDP('70%')
  },
  mr73: {
    marginRight: widthPercentageToDP('73%')
  },
  ml1: {
    marginLeft: widthPercentageToDP('1%')
  },
  ml2: {
    marginLeft: widthPercentageToDP('2%')
  },
  ml3: {
    marginLeft: widthPercentageToDP('3%')
  },
  ml4: {
    marginLeft: widthPercentageToDP('4%')
  },
  ml7: {
    marginLeft: widthPercentageToDP('7%')
  },
  ml10: {
    marginLeft: widthPercentageToDP('10%')
  },
  ml15: {
    marginLeft: widthPercentageToDP('15%')
  },
  ml16: {
    marginLeft: widthPercentageToDP('16%')
  },
  ml17: {
    marginLeft: widthPercentageToDP('17%')
  },
  ml18: {
    marginLeft: widthPercentageToDP('18%')
  },
  ml19: {
    marginLeft: widthPercentageToDP('19%')
  },
  ml20: {
    marginLeft: widthPercentageToDP('20%')
  },
  ml23: {
    marginLeft: widthPercentageToDP('23%')
  },
  ml25: {
    marginLeft: widthPercentageToDP('25%')
  },
  ml30: {
    marginLeft: widthPercentageToDP('30%')
  },
  ml32: {
    marginLeft: widthPercentageToDP('32%')
  },
  ml35: {
    marginLeft: widthPercentageToDP('35%')
  },
  ml40: {
    marginLeft: widthPercentageToDP('40%')
  },
  ml50: {
    marginLeft: widthPercentageToDP('50%')
  },
  ml55: {
    marginLeft: widthPercentageToDP('55%')
  },
  ml60: {
    marginLeft: widthPercentageToDP('60%')
  },
  ml63: {
    marginLeft: widthPercentageToDP('63%')
  },
  ml67: {
    marginLeft: widthPercentageToDP('67%')
  },
  ml12_5: {
    marginLeft: widthPercentageToDP('12.5%')
  },
  ml5: {
    marginLeft: widthPercentageToDP('5%')
  },
  pt1: {
    paddingTop: heightPercentageToDP('1%')
  },
  pt2: {
    paddingTop: heightPercentageToDP('2%')
  },
  pt3: {
    paddingTop: heightPercentageToDP('3%')
  },
  pt4: {
    paddingTop: heightPercentageToDP('4%')
  },
  pt5: {
    paddingTop: heightPercentageToDP('5%')
  },
  pt6: {
    paddingTop: heightPercentageToDP('6%')
  },
  pt7: {
    paddingTop: heightPercentageToDP('7%')
  },
  pt8: {
    paddingTop: heightPercentageToDP('8%')
  },
  pt9: {
    paddingTop: heightPercentageToDP('9%')
  },
  pt10: {
    paddingTop: heightPercentageToDP('10%')
  },
  pt20: {
    paddingTop: heightPercentageToDP('20%')
  },
  pb1: {
    paddingBottom: heightPercentageToDP('1%')
  },
  pb2: {
    paddingBottom: heightPercentageToDP('2%')
  },
  pb3: {
    paddingBottom: heightPercentageToDP('3%')
  },
  pb4: {
    paddingBottom: heightPercentageToDP('4%')
  },
  pb5: {
    paddingBottom: heightPercentageToDP('5%')
  },
  pb10: {
    paddingBottom: heightPercentageToDP('10%')
  },
  PL10: {
    paddingLeft: widthPercentageToDP('10%')
  },
  PR10: {
    paddingRight: widthPercentageToDP('10%')
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
    fontSize: widthPercentageToDP('18%')
  },
  fos16: {
    fontSize: widthPercentageToDP('16%')
  },
  fos14: {
    fontSize: widthPercentageToDP('14%')
  },
  fos12: {
    fontSize: widthPercentageToDP('12%')
  },
  fos10: {
    fontSize: widthPercentageToDP('10%')
  },
  fos9: {
    fontSize: widthPercentageToDP('9%')
  },
  fos8: {
    fontSize: widthPercentageToDP('8%')
  },
  fos7: {
    fontSize: widthPercentageToDP('7%')
  },
  fos6: {
    fontSize: widthPercentageToDP('6%')
  },
  fos5: {
    fontSize: widthPercentageToDP('5%')
  },
  fos4: {
    fontSize: widthPercentageToDP('4%')
  },
  fos3: {
    fontSize: widthPercentageToDP('3%')
  },
  fos2_5: {
    fontSize: widthPercentageToDP('2.5%')
  },
  fos2: {
    fontSize: widthPercentageToDP('2%')
  },
  fos1: {
    fontSize: widthPercentageToDP('1%')
  },
  lh32: {
    lineHeight: widthPercentageToDP('32%')
  },
  lh30: {
    lineHeight: widthPercentageToDP('30%')
  },
  lh28: {
    lineHeight: widthPercentageToDP('28%')
  },
  lh26: {
    lineHeight: widthPercentageToDP('26%')
  },
  lh24: {
    lineHeight: widthPercentageToDP('24%')
  },
  lh22: {
    lineHeight: widthPercentageToDP('22%')
  },
  lh20: {
    lineHeight: widthPercentageToDP('20%')
  },
  lh18: {
    lineHeight: widthPercentageToDP('18%')
  },
  lh16: {
    lineHeight: widthPercentageToDP('16%')
  },
  lh14: {
    lineHeight: widthPercentageToDP('14%')
  },
  lh12: {
    lineHeight: widthPercentageToDP('12%')
  },
  lh10: {
    lineHeight: widthPercentageToDP('10%')
  },
  lh9: {
    lineHeight: widthPercentageToDP('9%')
  },
  lh8: {
    lineHeight: widthPercentageToDP('8%')
  },
  lh7: {
    lineHeight: widthPercentageToDP('7%')
  },
  lh6: {
    lineHeight: widthPercentageToDP('6%')
  },
  lh5: {
    lineHeight: widthPercentageToDP('5%')
  },
  lh4: {
    lineHeight: widthPercentageToDP('4%')
  },
  lh3: {
    lineHeight: widthPercentageToDP('3%')
  },
  lh2: {
    lineHeight: widthPercentageToDP('2%')
  },
  lh1: {
    lineHeight: widthPercentageToDP('1%')
  },
  // Container
  cnt: {
    width: widthPercentageToDP('100%'),
    height: heightPercentageToDP('100%')
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
    top: heightPercentageToDP('10%')
  },
  t20p: {
    top: heightPercentageToDP('20%')
  },
  t30p: {
    top: heightPercentageToDP('30%')
  },
  t40p: {
    top: heightPercentageToDP('40%')
  },
  t50p: {
    top: heightPercentageToDP('50%')
  },
  t60p: {
    top: heightPercentageToDP('60%')
  },
  t70p: {
    top: heightPercentageToDP('70%')
  },
  t80p: {
    top: heightPercentageToDP('80%')
  },
  t90p: {
    top: heightPercentageToDP('90%')
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
    minHeight: widthPercentageToDP('1%')
  },
  minh2: {
    minHeight: widthPercentageToDP('2%')
  },
  minh3: {
    minHeight: widthPercentageToDP('3%')
  },
  minh4: {
    minHeight: widthPercentageToDP('4%')
  },
  minh5: {
    minHeight: widthPercentageToDP('5%')
  },
  minh6: {
    minHeight: widthPercentageToDP('6%')
  },
  minh7: {
    minHeight: widthPercentageToDP('7%')
  },
  minh8: {
    minHeight: widthPercentageToDP('8%')
  },
  minh9: {
    minHeight: widthPercentageToDP('9%')
  },
  minh10: {
    minHeight: widthPercentageToDP('10%')
  },
  maxh1: {
    maxHeight: widthPercentageToDP('1%')
  },
  maxh2: {
    maxHeight: widthPercentageToDP('2%')
  },
  maxh3: {
    maxHeight: widthPercentageToDP('3%')
  },
  maxh4: {
    maxHeight: widthPercentageToDP('4%')
  },
  maxh5: {
    maxHeight: widthPercentageToDP('5%')
  },
  maxh6: {
    maxHeight: widthPercentageToDP('6%')
  },
  maxh7: {
    maxHeight: widthPercentageToDP('7%')
  },
  maxh8: {
    maxHeight: widthPercentageToDP('8%')
  },
  maxh9: {
    maxHeight: widthPercentageToDP('9%')
  },
  maxh10: {
    maxHeight: widthPercentageToDP('10%')
  },
  maxh20: {
    maxHeight: widthPercentageToDP('20%')
  },
  maxh25: {
    maxHeight: widthPercentageToDP('25%')
  },
  pageContainer: {
    flex: 1,
    width: widthPercentageToDP('100%'),
    height: heightPercentageToDP('100%')
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
export default vis;
//# sourceMappingURL=vis.js.map