/**
 * Formats a number into Indian-style readable string with suffixes (K, L, Cr).
 * @param {number} num - The number to format.
 * @returns {string} - The formatted number as a string.
 */
const formatNumberIndian = (num) => {
  if (num >= 1e7) { // 1 Crore = 1e7
    return (num / 1e7).toFixed(1).replace(/\.0$/, "") + " Cr";
  }
  if (num >= 1e5) { // 1 Lakh = 1e5
    return (num / 1e5).toFixed(1).replace(/\.0$/, "") + " L";
  }
  if (num >= 1e3) { // Thousand
    return (num / 1e3).toFixed(1).replace(/\.0$/, "") + "K";
  }
  return num.toString();
};

export default formatNumberIndian;
