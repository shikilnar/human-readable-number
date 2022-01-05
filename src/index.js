module.exports = function toReadable (number) {
  const dict = {
    0: 'zero',
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine',
    10: 'ten',
    11: 'eleven',
    12: 'twelve',
    13: 'thirteen',
    14: 'fourteen',
    15: 'fifteen',
    16: 'sixteen',
    17: 'seventeen',
    18: 'eighteen',
    19: 'nineteen',
    20: 'twenty',
    30: 'thirty',
    40: 'forty',
    50: 'fifty',
    60: 'sixty',
    70: 'seventy',
    80: 'eighty',
    90: 'ninety',
    100: 'hundred'
  };
  
  const hundred = ' hundred';
  if (dict[number]){
    if(number === 100){
      return dict[1] + hundred;
    }
    return dict[number];
  }

  let res ='';
  if (number > 100){
    res = dict[Math.floor(number / 100)] + hundred;
  }
  
  let teen = number % 100;
  if (dict[teen] && teen > 0){
    return res + ' ' + dict[teen];
  } else if(Math.floor(teen/10)*10) {
    res = res + ' ' + dict[Math.floor(teen/10)*10];
  }

  let num = teen%10;
  if (num > 0){
    res = res + ' ' + dict[num];
  }
  return res.trim();
}
