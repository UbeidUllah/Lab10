function find(x) {
    arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
    check = false;
    console.log(x+1)
    arr.includes(x)
    for(i = 0; i<20;i++) {
        if (arr[i] == x) {
            check = true;
        }
    }
    return check;
}

module.exports.find = find;