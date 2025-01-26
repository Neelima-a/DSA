// You are given a string s and a pattern string p, where p contains exactly one '*' character.
// The '*' in p can be replaced with any sequence of zero or more characters.
// Return true if p can be made a substring of s, and false otherwise.

const hasMatch = (s, p) =>{
    const [prefix, suffix] = p.split('*')
    console.log(prefix, suffix)
    return s.startsWith(prefix) && s.endsWith(suffix) && s.length >= prefix.length + suffix.length
};

// console.log(hasMatch('Neelima', 'Nee*ma'))

const isPatternMatch = (s, p) =>{
    const startIndex = p.indexOf('*')//index 3

    let prefix = p.slice(0, startIndex) //Nee
    let suffix = p.slice(startIndex+1)//ma

    console.log(prefix,suffix)

    for (let i = 0; i < prefix.length; i++) {
        if (s[i] !== prefix[i]) return false; // Mismatch in prefix
    }
    
    for (let i = 0; i < suffix.length; i++) {
        if (s[s.length - suffix.length + i] !== suffix[i]) return false; // Mismatch in suffix
    }

    return s.length >= prefix.length + suffix.length;
}
console.log(isPatternMatch('Neelima', 'Nee*ma'))