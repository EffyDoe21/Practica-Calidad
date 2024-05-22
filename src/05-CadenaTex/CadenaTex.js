function cadenatex(str) {
    if (!str) return str;
    return str.replace(/\b\w/g, char => char.toUpperCase());
}

module.exports = cadenatex;
