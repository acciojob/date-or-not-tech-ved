function isDate(input) {
    // if already Date object
    if (input instanceof Date) {
        return !isNaN(input.getTime());
    }
    
    // try parsing other inputs
    let d = new Date(input);
    return !isNaN(d.getTime());
}

// Driver code (AccioJob style)
let input = require("fs").readFileSync(0, "utf-8").trim();

// try to evaluate input (for cases like new Date())
let val;
try {
    val = eval(input);
} catch {
    val = input;
}

console.log(isDate(val));