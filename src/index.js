module.exports = function reverse (n) {
    
    if (n > 0) {
        const strN = String(n);
        return strN.split('').reverse().join('');
    } else {
        m = -1 * n;
        const strM = String(m);
        return strM.split('').reverse().join('');
    } 
}
