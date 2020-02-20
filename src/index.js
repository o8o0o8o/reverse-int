module.exports = function reverse (n) {  
  return String(n).replace('-', '').split(/\B/g).reverse().join('');
}
