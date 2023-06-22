const setRandomBgColor = () => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    const newColor = 'rgb(' + r + ',' + g + ',' + b + ')';
    document.getElementById('color-box').style.backgroundColor = newColor;
};
