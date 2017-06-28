function sumToOneDigit(num) {

    var len = num.toString().length;
    var sum = 0;

    while (len > 1) {

        var temp = Math.floor(num/Math.pow(10, len - 1));
        sum = sum + temp;
        num = num - (temp * Math.pow(10, len - 1));
        len = num.toString().length;

    }

    sum = sum + num;
    if (sum > 9) {
        return sumToOneDigit(sum);
    } else {
        return sum;
    }
}

console.log(sumToOneDigit(6286));