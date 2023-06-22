const displayTimes = () => {
    const number = document.getElementById('number').value;
    const parsedNum = parseInt(number);
    const timesResult = document.getElementById('times-result');

    // make function
    // '!isFinite(parsedNumber) || isNaN(parsedNumber)' may be required
    if (parsedNum != number || parsedNum < 1 || parsedNum > 9) {
        timesResult.innerText = 'Input Error!';
        return;
    }

    const result = [];
    for (let i = 1; i <= 9; i++) {
        result.push(parsedNum + ' X ' + i + ' = ' + parsedNum * i);
    }
    timesResult.innerText = result.join('\n');
};
