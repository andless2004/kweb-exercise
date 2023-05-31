function isValidNumber(num) {
    const checkNum = parseInt(num);
    if (!isFinite(checkNum) || isNaN(checkNum)) return false;
    if (checkNum != num) return false;
    return (checkNum >= 1) && (checkNum <= 9);
};
