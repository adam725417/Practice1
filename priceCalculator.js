/**
 * 計算價格
 * @param {Object} options - 計算選項
 * @param {number} options.amount - 輸入金額
 * @param {string} options.memberType - 會員類型
 * @param {Object|null} options.coupon - 優惠券
 * @returns {number} 計算後的金額
 */
function calculatePrice({ amount, memberType, coupon }) {
  // 一般會員，無優惠券時，輸入金額等於輸出金額
  if (memberType === 'normal' && coupon === null) {
    return amount;
  }

  // 其他情況的邏輯可以之後再實作
  return amount;
}

module.exports = { calculatePrice };
