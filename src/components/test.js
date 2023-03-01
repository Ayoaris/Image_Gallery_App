function betterCompression(s) {
    // Your code here
    let result = '';
    let count = 1;
    for (let i = 0; i < s.length; i++) {
        if (s[i] === s[i + 1]) {
            count++;
        } else {
            result += s[i] + count;
            count = 1;
        }
    
    }
    return result
   
}
console.log(betterCompression("a12c56a1b5"));
