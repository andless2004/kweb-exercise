const successProb = [100, 60, 36, 22, 13, 8, 5, 3, 2, 1];
let attempts = 0;
let level = 0;

const tryLevelUp = () => {
    const loopId = setInterval(() => {
        attempts++;
        // make function
        const successed = Math.floor(Math.random() * 100) < successProb[level];
        if (successed) {
            document.getElementById('current-level').innerText = ++level;
            document.getElementById('gauge-bar').style.width = level * 10 + '%';
        }
        document.getElementById('attempts').innerText = attempts;
        if (level >= 10) clearInterval(loopId);
    }, 100);
};
