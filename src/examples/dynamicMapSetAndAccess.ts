// https://www.hackerrank.com/challenges/sock-merchant/problem

export const sockMerchant = (n: number, ar: number[]): number => {
    // Write your code here

    let result = 0;
    
    interface Foo {
        [key: string]: number;
    }
    
    let matches:Foo = {};

    ar.forEach((v) => {        
        if(!matches.hasOwnProperty(v)) {
            matches[v] = 1;
        } else {
            matches[v] += 1;
        }
    });
    
    console.debug(matches);
    
    let k: keyof Foo;
    for (k in matches) {
        console.debug(matches[k])
        
        result += Math.floor(matches[k] / 2);
    }
    
    return result;
}

export default { sockMerchant }