function getDivisors(num) {
    var divisors = [];
    for (let i = 1; i * i <= num; i++) {
        if (i * i === num) divisors.push(i);
        else if (num % i === 0) divisors.push(i, num / i);
    }
    return divisors.sort(function (a, b) { return a - b; });
    //(a, b) => a - b
};
