function isDate(input) {
    // valid Date object
    if (input instanceof Date) {
        return !isNaN(input.getTime());
    }

    // try parsing other types (string, number)
    const d = new Date(input);
    return !isNaN(d.getTime());
}