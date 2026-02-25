function rot13(str) {
    let res = "";
    
    for (let i = 0; i < str.length; i++) {
        let ch = str[i];
        
        if (ch >= 'A' && ch <= 'Z') {
            let code = ch.charCodeAt(0) - 65; // 0-25
            code = (code + 13) % 26;
            res += String.fromCharCode(code + 65);
        } else {
            res += ch; // keep punctuation/space
        }
    }
    
    return res;
}

// Driver code (AccioJob style)
let input = require("fs").readFileSync(0, "utf-8").trim();
console.log(rot13(input));