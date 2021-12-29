export default class FractionClass{
    constructor(num, den = 1) {
        while (parseInt(num) !== num) {
            num *= 10; den *= 10;
        }
        let gcd = findGCD(num, den);
        this.num = num / gcd;
        this.den = den / gcd;
        if (this.den < 0) { this.num *= -1; this.den *= -1}
    }

    static add(f1, f2) { 
        var den = findMCM(f1.den, f2.den);
        var num = f1.num * (den / f1.den) + f2.num * (den / f2.den);
        return new FractionClass(num,den);
    }

    static substract(f1, f2) {
        var den = findMCM(f1.den, f2.den);
        var num = f1.num * (den / f1.den) - f2.num * (den / f2.den);
        return new FractionClass(num,den);
    }

    static product(f1, f2) {
        if (!f1.hasOwnProperty('den')) f1 = new FractionClass(f1);
        if (!f2.hasOwnProperty('den')) f2 = new FractionClass(f2);
        if(f1.num  > Number.MAX_SAFE_INTEGER / Math.abs(f2.num) || f1.den > Number.MAX_SAFE_INTEGER / Math.abs(f2.den)) throw ErrorEvent('Fraction Product Overflow')
        return new FractionClass(f1.num * f2.num, f1.den * f2.den);
    }

    static division(f1, f2) {
        return new FractionClass(f1.num * f2.den, f1.den * f2.num);
    }

    print() {
        if (this.den !== 1) console.log(this.num + '/' + this.den);
        else console.log(this.num);
    }

    get string() {
        if (this.den !== 1) return String(this.num + '/' + this.den);
        else return this.num;
    }

    get decimal() {
        return longDivision(this.num, this.den);
    }
}

function longDivision(dividend, divisor, quotient = '', decimals = 0, isNegative = false) {
    let i = 0
    if (dividend < 0) { isNegative = true; dividend *= -1}
    if (divisor < 0) { isNegative = true; divisor *= -1}
    if (!dividend || decimals === 20) return isNegative ? (-1) * quotient : quotient
    while (dividend - (divisor * (i + 1)) >= 0) { i++; }
    if (decimals === 1) quotient += '.'
    if(dividend >= Number.MAX_VALUE / 10) throw Error('Long Division Overflow');
    return longDivision((dividend - divisor * i)*10, divisor, quotient += i, ++decimals, isNegative)
}

function findGCD(a, b) {
    return b ? findGCD(b, a % b) : a
}

function findMCM(a, b, mcm = 1) {
    for (var i = 2; i <= Math.min(a, b); i++) {
        if (a % i === 0 && b % i === 0) {
            return findMCM(a / i, b / i, mcm * i);
        }
    }
    return a * b * mcm;
}