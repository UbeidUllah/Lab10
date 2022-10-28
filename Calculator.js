function sum (a,b) {
    return a+b;
}

function diff(a,b) {
    return a - b;
}

function mul(a,b) {
    return a*b;
}

function div (a,b) {
    if (b!= 0) {
        return a/b;
    }
    return -1;
}

module.exports.sum = sum;
module.exports.diff = diff;
module.exports.mul = mul;
module.exports.div = div;