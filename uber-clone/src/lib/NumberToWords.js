function numberToWords(number) {
  const units = [
    '',
    'One',
    'Two',
    'Three',
    'Four',
    'Five',
    'Six',
    'Seven',
    'Eight',
    'Nine',
  ];
  const teens = [
    'Eleven',
    'Twelve',
    'Thirteen',
    'Fourteen',
    'Fifteen',
    'Sixteen',
    'Seventeen',
    'Eighteen',
    'Nineteen',
  ];
  const tens = [
    '',
    'Ten',
    'Twenty',
    'Thirty',
    'Forty',
    'Fifty',
    'Sixty',
    'Seventy',
    'Eighty',
    'Ninety',
  ];

  function convertBelowHundred(num) {
    if (num < 10) {
      return units[num];
    } else if (num < 20) {
      return teens[num - 11];
    } else {
      const digit = num % 10;
      const ten = Math.floor(num / 10);
      return tens[ten] + (digit !== 0 ? ` ${units[digit]}` : '');
    }
  }

  if (number === 0) {
    return 'Zero';
  }

  const billion = Math.floor(number / 1000000000);
  const million = Math.floor((number % 1000000000) / 1000000);
  const thousand = Math.floor((number % 1000000) / 1000);
  const remainder = number % 1000;

  let result = '';

  if (billion > 0) {
    result += `${convertBelowHundred(billion)} Billion `;
  }

  if (million > 0) {
    result += `${convertBelowHundred(million)} Million `;
  }

  if (thousand > 0) {
    result += `${convertBelowHundred(thousand)} Thousand `;
  }

  if (remainder > 0) {
    result += convertBelowHundred(remainder);
  }

  return result.trim().toLowerCase();
}

export default numberToWords;
