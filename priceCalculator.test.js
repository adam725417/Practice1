const { calculatePrice } = require('./priceCalculator');

describe('價格計算邏輯', () => {
  describe('一般會員，無優惠券', () => {
    test('輸入金額 100，應該輸出 100', () => {
      const result = calculatePrice({
        amount: 100,
        memberType: 'normal',
        coupon: null
      });
      expect(result).toBe(100);
    });

    test('輸入金額 500，應該輸出 500', () => {
      const result = calculatePrice({
        amount: 500,
        memberType: 'normal',
        coupon: null
      });
      expect(result).toBe(500);
    });

    test('輸入金額 1000，應該輸出 1000', () => {
      const result = calculatePrice({
        amount: 1000,
        memberType: 'normal',
        coupon: null
      });
      expect(result).toBe(1000);
    });

    test('輸入金額 0，應該輸出 0', () => {
      const result = calculatePrice({
        amount: 0,
        memberType: 'normal',
        coupon: null
      });
      expect(result).toBe(0);
    });
  });

  describe('VIP 會員，無優惠券', () => {
    test('輸入金額 100，應該輸出 90（9 折）', () => {
      const result = calculatePrice({
        amount: 100,
        memberType: 'vip',
        coupon: null
      });
      expect(result).toBe(90);
    });

    test('輸入金額 500，應該輸出 450（9 折）', () => {
      const result = calculatePrice({
        amount: 500,
        memberType: 'vip',
        coupon: null
      });
      expect(result).toBe(450);
    });

    test('輸入金額 1000，應該輸出 900（9 折）', () => {
      const result = calculatePrice({
        amount: 1000,
        memberType: 'vip',
        coupon: null
      });
      expect(result).toBe(900);
    });

    test('輸入金額 0，應該輸出 0', () => {
      const result = calculatePrice({
        amount: 0,
        memberType: 'vip',
        coupon: null
      });
      expect(result).toBe(0);
    });
  });
});
