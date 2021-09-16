export const pow = (base, exp) => {
  return base ** exp;
};

export const sum = (a, b) => a + b; // именованные экспорт
// module.exports.sum = sum;



class MyMath {
  static div = (a, b) => a / b;

  static mul = (a, b) => a * b;
}

export default MyMath; //  - экспорт значеия по умолчанию 

// export default pow;
// module.exports = pow;
