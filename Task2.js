function sum(x,y,z) {
    sum = 0;
    for(i = 1; i < z; i++) {
        if (i % x == 0 || i % y == 0) {
            sum = sum + i;
        }
    }
    return sum;
}

module.exports.sum = sum;